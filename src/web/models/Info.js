import { types } from 'mobx-state-tree'

import Contact from './Contact'
import License from './License'

const Info = types.model({
  title: '',
  description: '',
  termsOfService: '',
  contact: Contact,
  license: License,
  version: ''
}).actions(self => ({
  update (key, value) {
    if (self[key] === undefined) {
      throw new Error(`Unknown key '${key}'`)
    }
    self[key] = value
  }
}))

export default Info
