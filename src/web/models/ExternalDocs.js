import { types } from 'mobx-state-tree'

import { update } from '../utils'

const ExternalDocs = types.model({
  description: '',
  url: ''
}).actions(self => ({
  update: update(self)
}))

export default ExternalDocs
