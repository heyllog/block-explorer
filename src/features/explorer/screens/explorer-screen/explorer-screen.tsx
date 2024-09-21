import { FC, useEffect, useState } from 'react'

import { RefreshControl, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useToast } from 'react-native-toast-notifications'

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
  const [isLoadedOnce, setIsLoadedOnce] = useState(false)
  const { blockInfo, txs, isLoadingInfo, isFailedLoadInfo } = useAppSelector(selectExplorerState)

  const insets = useSafeAreaInsets()
  const dispatch = useAppDispatch()
  const toast = useToast()

  const handleUpdateBlockInfo = async (): Promise<void> => {
    try {
      await dispatch(getCurrentBlockInfo()).unwrap()
    } catch (e) {
      if (isLoadedOnce) {
        toast.show('Unable to fetch data', { type: 'danger' })
      }
    }
  }

  useEffect(() => {
    void dispatch(getCurrentBlockInfo())
  }, [dispatch])

  useEffect(() => {
    if (txs || blockInfo) setIsLoadedOnce(true)
  }, [txs, blockInfo])

  if (isLoadingInfo && !isLoadedOnce) {
    return (
      <View style={styles.loaderContainer}>
        <LoaderCircle />
        <AppTitle>Loading...</AppTitle>
      </View>
    )
  }

  if (isFailedLoadInfo && !isLoadedOnce) {
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
          colors={[colors.background.main]}
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
