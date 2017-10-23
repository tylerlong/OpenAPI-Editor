import { types } from 'mobx-state-tree'

import Info from './Info'
import Tag from './Tag'
import ExternalDocs from './ExternalDocs'
import { update } from '../utils'

const OpenAPI = types.model({
  openapi: '3.0.0',
  info: Info,
  tags: types.array(Tag),
  externalDocs: ExternalDocs
}).actions(self => ({
  update: update(self)
}))

export default OpenAPI
