const path = require('node:path')
const fs = require('node:fs')

const dir = path.join(__dirname, '..', 'dist')

if (fs.existsSync(dir))
{
  const items = fs.readdirSync(dir)
    .filter((item) => !['README.nd', 'package.json'].includes(item))

  for (const item of items)
  {
    const itemPath = path.join(dir, item)

    if (fs.lstatSync(itemPath).isDirectory())
      fs.rmdirSync(itemPath, { recursive: true })

    else
      fs.unlinkSync(itemPath)
  }
}

else
{
  console.log('No items to be deleted.')
}
