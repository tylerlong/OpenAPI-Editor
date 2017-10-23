import { types } from 'mobx-state-tree'

import Info from './Info'
import Tag from './Tag'
import ExternalDocs from './ExternalDocs'
import { update } from '../utils'

const OpenAPI = types.model({
  openapi: types.string,
  info: Info,
  tags: types.maybe(types.array(Tag)),
  externalDocs: types.maybe(ExternalDocs)
}).actions(self => ({
  update: update(self)
}))

export default OpenAPI
