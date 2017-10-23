import { types } from 'mobx-state-tree'

import { update } from '../utils'
import ExternalDocs from './ExternalDocs'

const Tag = types.model({
  name: '',
  description: '',
  externalDocs: types.maybe(ExternalDocs)
}).actions(self => ({
  update: update(self)
}))

export default Tag
