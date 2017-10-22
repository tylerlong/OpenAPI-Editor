import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './components/App'
import OpenAPI from './models/OpenAPI'

const openapi = OpenAPI.create({
  openapi: '3.0.0',
  info: {
    id: 'info',
    title: '',
    description: '',
    termsOfService: '',
    contact: {
      id: 'contact'
    },
    license: {
      id: 'license'
    },
    version: ''
  }
})

ReactDOM.render(<App openapi={openapi} />, document.getElementById('root'))
