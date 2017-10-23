import { types } from 'mobx-state-tree'

import { update } from '../utils'

const Contact = types.model({
  name: types.maybe(types.string),
  url: types.maybe(types.string),
  email: types.maybe(types.string)
}).actions(self => ({
  update: update(self)
}))

export default Contact
