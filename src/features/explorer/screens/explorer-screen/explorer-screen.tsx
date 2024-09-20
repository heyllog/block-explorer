import { FC, useEffect } from 'react'

import { RefreshControl, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from 'core/components/button'
import { LoaderCircle } from 'core/components/loader-circle'
import { AppTitle } from 'core/components/text'
import { useAppDispatch, useAppSelector } from 'core/store/hooks'
import { colors, sizes } from 'core/theme'

import { BlockDetails } from '../../components/block-details'
import { TxsList } from '../../components/txs-list'
import { getCurrentBlockInfo } from '../../store/actions/get-current-block-info'
import { selectExplorerState } from '../../store/selectors'

export const ExplorerScreen: FC = () => {
  const { blockInfo, txs, isLoadingInfo, isFailedLoadInfo } = useAppSelector(selectExplorerState)

  const insets = useSafeAreaInsets()
  const dispatch = useAppDispatch()

  const handleUpdateBlockInfo = async (): Promise<void> => {
    await dispatch(getCurrentBlockInfo())
  }

  useEffect(() => {
    void dispatch(getCurrentBlockInfo())
  }, [dispatch])

  if (isLoadingInfo && !blockInfo && !txs) {
    return (
      <View style={styles.loaderContainer}>
        <LoaderCircle />
        <AppTitle>Loading...</AppTitle>
      </View>
    )
  }

  if (isFailedLoadInfo) {
    return (
      <View style={styles.loaderContainer}>
        <AppTitle>Cannot get current block</AppTitle>
        <Button onPress={handleUpdateBlockInfo} isFullwidth>
          Try again
        </Button>
      </View>
    )
  }

  if (!blockInfo || !txs) return null

  return (
    <TxsList
      txs={txs}
      style={StyleSheet.flatten([styles.container, { marginTop: insets.top, paddingBottom: insets.bottom }])}
      isLoading={isLoadingInfo}
      refreshControl={
        <RefreshControl
          colors={[colors.text.main]}
          tintColor={colors.text.main}
          refreshing={isLoadingInfo}
          onRefresh={handleUpdateBlockInfo}
        />
      }
      ListHeaderComponent={
        <>
          <AppTitle style={styles.title}>Latest Block</AppTitle>
          <BlockDetails blockInfo={blockInfo} />

          <AppTitle style={styles.title}>Transactions</AppTitle>
        </>
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.pagePaddingHorizontal,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    gap: sizes.baseIndent,
    paddingHorizontal: sizes.pagePaddingHorizontal,
  },
  title: {
    paddingTop: sizes.pagePaddingVertical,
    paddingBottom: sizes.baseIndent,
  },
})
