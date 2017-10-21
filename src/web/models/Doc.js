import { types } from 'mobx-state-tree'

const Doc = types.model({
  openapi: '3.0.0'
}).actions(self => ({
  update (key, value) {
    self[key] = value
  }
}))

export default Doc
