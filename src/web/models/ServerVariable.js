import { types } from 'mobx-state-tree'

import { update } from '../utils'

const ServerVariable = types.model({
  enum: types.maybe(types.array(types.string)),
  default: types.string,
  description: types.maybe(types.string)
}).actions(self => ({
  update: update(self)
}))

export default ServerVariable
