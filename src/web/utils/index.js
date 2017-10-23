export const dataTypes = {
  integer: ['int32', 'int64'],
  number: ['float', 'double'],
  boolean: [],
  string: ['', 'byte', 'binary', 'date', 'date-time', 'password']
}

export const update = self => {
  return (key, value) => {
    if (self[key] === undefined) {
      throw new Error(`Unknown key '${key}'`)
    }
    self[key] = value
  }
}
