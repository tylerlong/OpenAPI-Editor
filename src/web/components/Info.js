import React from 'react'
import { Input } from 'antd'
import { observer } from 'mobx-react'

import FormItem from './FormItem'

class Info extends React.Component {
  render () {
    console.log('render Info')
    const info = this.props.info
    return (
      <div>
        <FormItem label='title'>
          <Input value={info.title} onChange={e => info.update('title', e.target.value)} />
        </FormItem>
        <FormItem label='description'>
          <Input value={info.description} onChange={e => info.update('description', e.target.value)} />
        </FormItem>
        <FormItem label='terms of service'>
          <Input value={info.termsOfService} onChange={e => info.update('termsOfService', e.target.value)} />
        </FormItem>
        <FormItem label='version'>
          <Input value={info.version} onChange={e => info.update('version', e.target.value)} />
        </FormItem>
      </div>
    )
  }
}

export default observer(Info)
