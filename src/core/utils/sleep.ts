/* eslint-disable no-promise-executor-return,@typescript-eslint/ban-ts-comment */
// @ts-ignore
export const sleep = (ms: number): Promise<number> => new Promise((r) => setTimeout(r, ms))
