import { Colors } from '@/constants/colors'

/**
 * Colorize a string with a specific color.
 */
export const colorize = (color: string, ...content: unknown[]): string =>
{
  return `${color}${content.join(' ')}${Colors.reset}`
}
