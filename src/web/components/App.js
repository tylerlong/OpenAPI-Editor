import React from 'react'

class App extends React.Component {
  render () {
    return <div>OpenAPI {this.props.document.openapi}</div>
  }
}

export default App
