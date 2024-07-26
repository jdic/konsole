import { LogLevel, LogMessage } from './types/Global'
import { Colors } from './constants/Colors'

const log = (tag: LogLevel, message: any[]): void =>
{
  const time = new Date().toLocaleTimeString()
  const color = Colors[tag.toLowerCase() as keyof typeof Colors]
  const reset = Colors.reset
  const cyan = Colors.cyan

  console.log(`${color}[${tag}] ${cyan}[${time}]${reset}`, ...message)
}

export const warn: LogMessage = (...message) => log('WARN', message)
export const fail: LogMessage = (...message) => log('FAIL', message)
export const info: LogMessage = (...message) => log('INFO', message)
export const succ: LogMessage = (...message) => log('SUCC', message)
