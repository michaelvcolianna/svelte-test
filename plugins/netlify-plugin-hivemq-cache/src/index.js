import { existsSync, readdirSync, rmSync } from 'node:fs'

const ROOT_PATH = new URL('../../../', import.meta.url).pathname
const CACHE_PATH = `${ROOT_PATH}_cache`

export const onPreBuild = async function ({
  utils: { cache },
}) {
  console.log(`HiveMQ cache plugin pre build:`)

  console.log(`-- Pre-restore: ${CACHE_PATH} exists?`, existsSync(CACHE_PATH))
  
  await cache.restore('_cache')

  console.log(`-- Post-restore: ${CACHE_PATH} exists?`, existsSync(CACHE_PATH))
}

export const onPostBuild = async function ({
  utils: { cache },
}) {
  console.log(`HiveMQ cache plugin post build:`)

  await cache.save('_cache')

  console.log(`-- Pre-cleanup: ${CACHE_PATH} exists?`, existsSync(CACHE_PATH))

  const ls = readdirSync(ROOT_PATH)
  ls.filter((entry) => entry !== 'build').forEach((entry) => {
    const ENTRY_PATH = `${ROOT_PATH}${entry}`
    console.log(`-- Removing: ${ENTRY_PATH}`)
    
    rmSync(ENTRY_PATH, { recursive: true, force: true })
  })
  
  console.log(`-- Post-cleanup: ${CACHE_PATH} exists?`, existsSync(CACHE_PATH))
}
