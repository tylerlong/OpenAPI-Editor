import { types } from 'mobx-state-tree'

import { update } from '../utils'

const License = types.model({
  name: types.string,
  url: types.maybe(types.string)
}).actions(self => ({
  update: update(self)
}))

export default License
