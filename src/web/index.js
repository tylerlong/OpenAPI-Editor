import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './components/App'
import Doc from './models/Doc'

const doc = Doc.create()

ReactDOM.render(<App doc={doc} />, document.getElementById('root'))
