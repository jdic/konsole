/**
 * Returns the current timestamp in ISO format.
 */
export const getTimestamp = (): string =>
{
  return new Date().toISOString()
}
