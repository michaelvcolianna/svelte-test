// import { existsSync } from 'node:fs'

const ROOT_PATH = new URL('../../../', import.meta.url).pathname
const CACHE_DIR = `${ROOT_PATH}_cache`

export const onPreBuild = async function ({
  utils: { cache },
}) {
  const restoreCache = await cache.restore(CACHE_DIR)

  console.log(`HiveMQ cache pre-build: ${CACHE_DIR}`, restoreCache)
}

export const onPostBuild = async function ({
  utils: { cache },
}) {
  const saveCache = await cache.save(CACHE_DIR)

  console.log(`HiveMQ cache post-build: ${CACHE_DIR}`, saveCache)
}
