import React from 'react'
import { Input } from 'antd'
import { observer } from 'mobx-react'

import FormItem from './FormItem'

class ExternalDocs extends React.Component {
  render () {
    console.log('render ExternalDocs')
    const externalDocs = this.props.externalDocs
    return (
      <div>
        <FormItem label='description'>
          <Input value={externalDocs.description} onChange={e => externalDocs.update('description', e.target.value)} />
        </FormItem>
        <FormItem label='url'>
          <Input value={externalDocs.url} onChange={e => externalDocs.update('url', e.target.value)} />
        </FormItem>
      </div>
    )
  }
}

export default observer(ExternalDocs)
