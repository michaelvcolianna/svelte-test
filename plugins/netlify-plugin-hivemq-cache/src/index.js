export const onPreBuild = async function ({
  utils: { cache },
}) {
  await cache.restore('./_cache')

  console.log('Cache restore:', await cache.list())
}

export const onPostBuild = async function ({
  utils: { cache },
}) {
  await cache.save('./_cache')
  
  console.log('Cache save:', await cache.list())
}
