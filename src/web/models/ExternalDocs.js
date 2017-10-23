import { types } from 'mobx-state-tree'

import { update } from '../utils'

const ExternalDocs = types.model({
  description: types.maybe(types.string),
  url: types.string
}).actions(self => ({
  update: update(self)
}))

export default ExternalDocs
