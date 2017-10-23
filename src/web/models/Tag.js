import { types } from 'mobx-state-tree'

import { update } from '../utils'
import ExternalDocs from './ExternalDocs'

const Tag = types.model({
  name: types.string,
  description: types.maybe(types.string),
  externalDocs: types.maybe(ExternalDocs)
}).actions(self => ({
  update: update(self)
}))

export default Tag
