import { types } from 'mobx-state-tree'

import { update } from '../utils'
import ServerVariable from './ServerVariable'

const Server = types.model({
  url: types.string,
  description: types.maybe(types.string),
  variables: types.maybe(types.map(ServerVariable))
}).actions(self => ({
  update: update(self)
}))

export default Server
