import { types } from 'mobx-state-tree'

const License = types.model({
  name: '',
  url: ''
}).actions(self => ({
  update (key, value) {
    if (self[key] === undefined) {
      throw new Error(`Unknown key '${key}'`)
    }
    self[key] = value
  }
}))

export default License
