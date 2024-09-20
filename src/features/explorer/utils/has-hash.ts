interface WithHash {
  hash: string
}

export const hasHash = (toBeDetermined: unknown): toBeDetermined is WithHash => !!(toBeDetermined as WithHash).hash
