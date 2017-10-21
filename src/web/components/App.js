import React from 'react'
import { Select } from 'antd'
import { observer } from 'mobx-react'

class App extends React.Component {
  render () {
    console.log('render App')
    const doc = this.props.doc
    return (
      <div>
        <h1>OpenAPI {doc.openapi}</h1>
        <Select value={doc.openapi} style={{ width: 120 }} onChange={value => doc.update('openapi', value)}>
          <Select.Option value='3.0.0'>3.0.0</Select.Option>
          <Select.Option value='3.0.1'>3.0.1</Select.Option>
        </Select>
      </div>
    )
  }
}

export default observer(App)
