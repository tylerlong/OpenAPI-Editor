import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './components/App'
import OpenAPI from './models/OpenAPI'
import { defaultValue } from './utils'

const openAPI = OpenAPI.create(defaultValue)

ReactDOM.render(<App openAPI={openAPI} />, document.getElementById('root'))
