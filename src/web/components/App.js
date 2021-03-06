import React from 'react'
import { Input, Tabs } from 'antd'
import { observer } from 'mobx-react'

import FormItem from './FormItem'
import Info from './Info'
import Tags from './Tags'
import ExternalDocs from './ExternalDocs'

class App extends React.Component {
  render () {
    console.log('render App')
    const openAPI = this.props.openAPI
    return (
      <div>
        <FormItem label='OpenAPI specification version'>
          <Input value={openAPI.openapi} onChange={e => openAPI.update('openapi', e.target.value)} />
        </FormItem>
        <Tabs tabPosition='left' defaultActiveKey='tags'>
          <Tabs.TabPane tab='info' key='info'>
            <Info info={openAPI.info} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='servers' key='servers'>
            servers
          </Tabs.TabPane>
          <Tabs.TabPane tab='paths' key='paths'>
            paths
          </Tabs.TabPane>
          <Tabs.TabPane tab='components' key='components'>
            components
          </Tabs.TabPane>
          <Tabs.TabPane tab='security' key='security'>
            security
          </Tabs.TabPane>
          <Tabs.TabPane tab='tags' key='tags'>
            <Tags tags={openAPI.tags} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='externalDocs' key='externalDocs'>
            <ExternalDocs externalDocs={openAPI.externalDocs} />
          </Tabs.TabPane>
        </Tabs>
      </div>
    )
  }
}

export default observer(App)
