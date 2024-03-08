import { readdirSync, rmSync } from 'node:fs'

const ROOT_PATH = new URL('../../../', import.meta.url).pathname
const CACHE_DIR = `${ROOT_PATH}_cache`

export const onPreBuild = async function ({
  utils: { cache },
}) {
  await cache.restore(CACHE_DIR)
}

export const onPostBuild = async function ({
  utils: { cache },
}) {
  await cache.save(CACHE_DIR)

  const ls = readdirSync(ROOT_PATH)
  ls.filter((entry) => entry !== 'build').forEach(entry => {
    rmSync(`${ROOT_PATH}${entry}`, { recursive: true, force: true })
  })

  console.log('HiveMQ cache plugin post build:', readdirSync(ROOT_PATH))
}
