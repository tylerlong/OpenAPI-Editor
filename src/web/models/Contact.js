import { types } from 'mobx-state-tree'

const Contact = types.model({
  name: '',
  url: '',
  email: ''
}).actions(self => ({
  update (key, value) {
    if (self[key] === undefined) {
      throw new Error(`Unknown key '${key}'`)
    }
    self[key] = value
  }
}))

export default Contact
