import { types } from 'mobx-state-tree'

import Info from './Info'
import ExternalDocs from './ExternalDocs'
import { update } from '../utils'

const OpenAPI = types.model({
  openapi: '3.0.0',
  info: Info,
  externalDocs: ExternalDocs
}).actions(self => ({
  update: update(self)
}))

export default OpenAPI
