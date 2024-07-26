export type LogLevel = 'WARN' | 'FAIL' | 'INFO' | 'SUCC'

export interface LogMessage
{
  (message: any[]): void
}

export interface IColors
{
  reset: string
  warn: string
  fail: string
  info: string
  succ: string
  cyan: string
}
