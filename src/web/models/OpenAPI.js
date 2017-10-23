import { types } from 'mobx-state-tree'

import Info from './Info'
import Server from './Server'
import Tag from './Tag'
import ExternalDocs from './ExternalDocs'
import { update } from '../utils'

const OpenAPI = types.model({
  openapi: types.string,
  info: Info,
  severs: types.maybe(types.array(Server)),
  tags: types.maybe(types.array(Tag)),
  externalDocs: types.maybe(ExternalDocs)
}).actions(self => ({
  update: update(self)
}))

export default OpenAPI
