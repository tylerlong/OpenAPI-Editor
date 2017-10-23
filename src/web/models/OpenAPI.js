import { types } from 'mobx-state-tree'

import Info from './Info'
import { update } from '../utils'

const OpenAPI = types.model({
  openapi: '3.0.0',
  info: Info
}).actions(self => ({
  update: update(self)
}))

export default OpenAPI
