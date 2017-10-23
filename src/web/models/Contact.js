import { types } from 'mobx-state-tree'

import { update } from '../utils'

const Contact = types.model({
  name: '',
  url: '',
  email: ''
}).actions(self => ({
  update: update(self)
}))

export default Contact
