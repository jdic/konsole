import { Colors } from '@/constants/colors'
import { colorize } from '@/utils/colors'
import { konsole } from '@/konsole'

describe('konsole', () =>
{
  it('should log a done message', () =>
  {
    const message = 'This is a done message'
    const result = konsole.done(message)

    expect(result).toBe(`${colorize(Colors.green, '[DONE]')} ${message}`)
  })

  it('should log an error message', () =>
  {
    const message = 'This is an error message'
    const result = konsole.error(message)

    expect(result).toBe(`${colorize(Colors.red, '[ERROR]')} ${message}`)
  })

  it('should log a warning message', () =>
  {
    const message = 'This is a warning message'
    const result = konsole.warn(message)

    expect(result).toBe(`${colorize(Colors.yellow, '[WARN]')} ${message}`)
  })

  it('should log an info message', () =>
  {
    const message = 'This is an info message'
    const result = konsole.info(message)

    expect(result).toBe(`${colorize(Colors.blue, '[INFO]')} ${message}`)
  })

  it('should log an log message', () =>
  {
    const message = 'This is a log message'
    const result = konsole.log(message)

    expect(result).toBe(`${colorize(Colors.reset, '[LOG]')} ${message}`)
  })

  it('should log a message with a timestamp', () =>
  {
    konsole.config({ showTimestamp: true })

    const message = 'This is a log message'
    const result = konsole.log(message)

    expect(result).toMatch(/^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\]/)
  })
})
