import { types } from 'mobx-state-tree'

import Contact from './Contact'
import License from './License'

const Info = types.model({
  id: types.identifier(types.string),
  title: '',
  description: '',
  termsOfService: '',
  contact: types.reference(Contact),
  license: types.reference(License),
  version: ''
}).actions(self => ({
  update (key, value) {
    self[key] = value
  }
}))

export default Info
