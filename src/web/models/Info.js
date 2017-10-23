import { types } from 'mobx-state-tree'

import Contact from './Contact'
import License from './License'
import { update } from '../utils'

const Info = types.model({
  title: types.string,
  description: types.maybe(types.string),
  termsOfService: types.maybe(types.string),
  contact: types.maybe(Contact),
  license: types.maybe(License),
  version: types.string
}).actions(self => ({
  update: update(self)
}))

export default Info
