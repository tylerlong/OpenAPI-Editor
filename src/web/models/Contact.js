import { types } from 'mobx-state-tree'

const Contact = types.model({
  id: types.identifier(types.string)
})

export default Contact
