import { types } from 'mobx-state-tree'

import Info from './Info'

const OpenAPI = types.model({
  openapi: '3.0.0',
  info: Info
}).actions(self => ({
  update (key, value) {
    self[key] = value
  }
}))

export default OpenAPI
