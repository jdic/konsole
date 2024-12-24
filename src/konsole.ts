import type { ConsoleMethod, LoggerConfig, Message } from '@/types/global'
import { getTimestamp } from './utils/timestamps'
import { colorize } from './utils/colors'
import { Colors } from './constants/colors'

let globalConfig: LoggerConfig =
{
  showTimestamp: false,
}

const logWithConsoleMethod = (consoleMethod: ConsoleMethod, label: string, color: string, message: Message[]) =>
{
  const timestamp = globalConfig.showTimestamp ? `[${getTimestamp()}]` : ''
  const data = `${timestamp} ${colorize(color, `[${label}]`)} ${message.join(' ')}`.trim()

  console[consoleMethod](data)

  return data
}

export const konsole =
{
  /**
   * Configure the logger.
   */
  config: (config: LoggerConfig) =>
  {
    globalConfig = { ...globalConfig, ...config }
  },

  /**
   * Log a message with the `DONE` and green label using `console.info()`.
   */
  done: (...message: Message[]): string =>
  {
    return logWithConsoleMethod('info', 'DONE', Colors.green, message)
  },

  /**
   * Log a message with the `ERROR` and red label using `console.error()`.
   */
  error: (...message: Message[]): string =>
  {
    return logWithConsoleMethod('error', 'ERROR', Colors.red, message)
  },

  /**
   * Log a message with the `WARN` and yellow label using `console.warn()`.
   */
  warn: (...message: Message[]): string =>
  {
    return logWithConsoleMethod('warn', 'WARN', Colors.yellow, message)
  },

  /**
   * Log a message with the `INFO` and blue label using `console.info()`.
   */
  info: (...message: Message[]): string =>
  {
    return logWithConsoleMethod('info', 'INFO', Colors.blue, message)
  },

  /**
   * Log a message with the `LOG` label using `console.log()`.
   */
  log: (...message: Message[]): string =>
  {
    return logWithConsoleMethod('log', 'LOG', Colors.reset, message)
  },
}
