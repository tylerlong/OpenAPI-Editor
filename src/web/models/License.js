import { types } from 'mobx-state-tree'

import { update } from '../utils'

const License = types.model({
  name: '',
  url: ''
}).actions(self => ({
  update: update(self)
}))

export default License
