import { existsSync, readdirSync, rmSync } from 'node:fs'

const ROOT_PATH = new URL('../../../', import.meta.url).pathname
const CACHE_PATH = `${ROOT_PATH}_cache`

export const onPreBuild = async function ({
  constants: { CACHE_DIR },
  utils: { cache },
}) {
  console.log(`HiveMQ cache plugin pre build:`)

  console.log(`-- Is _cache in Netlify cache?`, existsSync(`${CACHE_DIR}/_cache`))
  
  await cache.restore('./_cache')

  console.log(`-- Cache restored: ${CACHE_PATH} exists?`, existsSync(CACHE_PATH))
}

export const onPostBuild = async function ({
  constants: { CACHE_DIR },
  utils: { cache },
}) {
  console.log(`HiveMQ cache plugin post build:`)

  await cache.save('./_cache')
  
  const ls = readdirSync(ROOT_PATH)
  ls.filter((entry) => entry !== 'build').forEach((entry) => {
    const ENTRY_PATH = `${ROOT_PATH}${entry}`
    console.log(`-- Removing: ${ENTRY_PATH}`)
    
    rmSync(ENTRY_PATH, { recursive: true, force: true })
  })
  
  console.log(`-- Cache saved: Is _cache in Netlify cache?`, existsSync(`${CACHE_DIR}/_cache`))
}
