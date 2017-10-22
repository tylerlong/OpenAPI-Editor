import { types } from 'mobx-state-tree'

const License = types.model({
  id: types.identifier(types.string)
})

export default License
