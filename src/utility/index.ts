export const noop = (...p: any) => {}

export const get = (obj: any, path: string, defaultValue = undefined) => {
  const paths = path.split('.')
  let current = obj
  for (let i = 0; i < paths.length; i += 1) {
    if (current[paths[i]] === undefined) {
      return defaultValue
    }
    current = current[paths[i]]
  }
  return current || defaultValue
}

export const map = (
  source: Array<any> | number,
  iterator: (item: any, index: number) => any
) => {
  const target = typeof source === 'number' ? [...Array(source)] : source

  return target.map(iterator)
}
