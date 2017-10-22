import { types } from 'mobx-state-tree'

import Info from './Info'

const OpenAPI = types.model({
  openapi: '3.0.0',
  info: Info
}).actions(self => ({
  update (key, value) {
    if (self[key] === undefined) {
      throw new Error(`Unknown key '${key}'`)
    }
    self[key] = value
  }
}))

export default OpenAPI
