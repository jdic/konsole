import 'colors'

const log = (tag: string, message: any[]) =>
  console.log(tag, ...message)

export const warn = (...message: any[]) =>
  log('[WARN]'.yellow, message)

export const fail = (...message: any[]) =>
  log('[FAIL]'.red, message)

export const info = (...message: any[]) =>
  log('[INFO]'.blue, message)

export const success = (...message: any[]) =>
  log('[SUCC]'.green, message)
