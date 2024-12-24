import type { BuildConfig } from 'bun'
import { konsole } from '@/konsole'
import dts from 'bun-plugin-dts'

const config: BuildConfig =
{
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  target: 'node',
  sourcemap: 'inline',
  plugins: [dts()],
}

const details = Object.entries(config)
  .filter((key) => key[0] !== 'plugins')
  .map(([key, value]) => `${key}:` + value).join('\n')
konsole.info('Build Details\n' + details)

konsole.info('Building...')
await Bun.build(config)

konsole.done('Build completed.')
