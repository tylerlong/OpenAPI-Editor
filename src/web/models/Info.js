import { types } from 'mobx-state-tree'

import Contact from './Contact'
import License from './License'
import { update } from '../utils'

const Info = types.model({
  title: '',
  description: '',
  termsOfService: '',
  contact: Contact,
  license: License,
  version: ''
}).actions(self => ({
  update: update(self)
}))

export default Info
