import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './components/App'
import OpenAPI from './models/OpenAPI'

const openAPI = OpenAPI.create({
  openapi: '3.0.0',
  info: {
    title: 'RingCentral API',
    description: '',
    termsOfService: '',
    contact: {
    },
    license: {
    },
    version: 'v1.0'
  }
})

ReactDOM.render(<App openAPI={openAPI} />, document.getElementById('root'))
