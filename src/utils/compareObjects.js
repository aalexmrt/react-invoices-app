import { isEqual, uniq } from 'lodash'

const getUpdatedKeys = (oldData, newData) => {
  const data = uniq([...Object.keys(oldData), ...Object.keys(newData)])
  const keys = []
  for (const key of data) {
    // console.log(oldData[key], newData[key])
    if (!isEqual(oldData[key], newData[key])) {
      keys.push(key)
    }
  }

  return keys
}

export default getUpdatedKeys
