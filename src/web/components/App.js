import React from 'react'
import { Input, Tabs } from 'antd'
import { observer } from 'mobx-react'

import FormItem from './FormItem'

class App extends React.Component {
  render () {
    console.log('render App')
    const openAPI = this.props.openAPI
    return (
      <div>
        <FormItem label='OpenAPI Specification version'>
          <Input value={openAPI.openapi} onChange={e => openAPI.update('openapi', e.target.value)} />
        </FormItem>
        <Tabs tabPosition='left' defaultActiveKey='info'>
          <Tabs.TabPane tab='Info' key='info'>
            Info
          </Tabs.TabPane>
          <Tabs.TabPane tab='Servers' key='servers'>
            Servers
          </Tabs.TabPane>
          <Tabs.TabPane tab='Paths' key='paths'>
            Paths
          </Tabs.TabPane>
          <Tabs.TabPane tab='Components' key='components'>
            Components
          </Tabs.TabPane>
          <Tabs.TabPane tab='Security' key='security'>
            Security
          </Tabs.TabPane>
          <Tabs.TabPane tab='Tags' key='tags'>
            Tags
          </Tabs.TabPane>
          <Tabs.TabPane tab='externalDocs' key='externalDocs'>
            ExternalDocs
          </Tabs.TabPane>
        </Tabs>
      </div>
    )
  }
}

export default observer(App)
