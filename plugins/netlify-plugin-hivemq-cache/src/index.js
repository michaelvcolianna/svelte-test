import { existsSync } from 'node:fs'

const ROOT_PATH = new URL('../../../../', import.meta.url).pathname
const CONFIG_FILE = `${ROOT_PATH}/svelte.config.js`
const TEST_FILE = `${ROOT_PATH}/scripts/test.sh`

export const onPreBuild = async function ({
  utils: { status },
}) {
  // try {
  //   console.log('Build constants', constants)
  // } catch (error) {
  //   build.failBuild('Error message', { error })
  // }

  status.show({ summary: `Config file exists? ${existsSync(CONFIG_FILE)}` })
}

export const onPostBuild = async function ({
  utils: { status },
}) {
  // try {
  //   console.log('Build constants', constants)
  // } catch (error) {
  //   build.failBuild('Error message', { error })
  // }

  status.show({ summary: `Test script exists? ${existsSync(TEST_FILE)}` })
}
