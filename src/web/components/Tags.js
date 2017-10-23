import React from 'react'

class Tags extends React.Component {
  render () {
    console.log('render Tags')
    const tags = this.props.tags
    return (
      <div>
        {tags.map(tag => <h3 key={tag.name}>{tag.name}</h3>)}
      </div>
    )
  }
}

export default Tags
