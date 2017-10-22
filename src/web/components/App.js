import React from 'react'
import { Select } from 'antd'
import { observer } from 'mobx-react'

class App extends React.Component {
  render () {
    console.log('render App')
    const openAPI = this.props.openAPI
    return (
      <div>
        <h1>OpenAPI {openAPI.openapi}</h1>
        <Select value={openAPI.openapi} style={{ width: 120 }} onChange={value => openAPI.update('openapi', value)}>
          <Select.Option value='3.0.0'>3.0.0</Select.Option>
          <Select.Option value='3.0.1'>3.0.1</Select.Option>
        </Select>
        <h2>{openAPI.info.title}</h2>
      </div>
    )
  }
}

export default observer(App)
