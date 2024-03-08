import { existsSync } from 'node:fs'

const ROOT_PATH = new URL('../../../../', import.meta.url).pathname
const CONFIG_FILE = `${ROOT_PATH}/svelte.config.js`
const TEST_FILE = `${ROOT_PATH}/scripts/test.sh`

export const onPreBuild = async function ({
  utils: { cache },
}) {
  // try {
  //   console.log('Build constants', constants)
  // } catch (error) {
  //   build.failBuild('Error message', { error })
  // }

  console.log(`Root path is ${ROOT_PATH}, config file is ${CONFIG_FILE}`)
}

export const onPostBuild = async function ({
  utils: { cache },
}) {
  // try {
  //   console.log('Build constants', constants)
  // } catch (error) {
  //   build.failBuild('Error message', { error })
  // }

  console.log(`Test script is ${TEST_FILE}`)
}
