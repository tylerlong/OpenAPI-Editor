import React from 'react'
import { render } from 'react-dom'

import './index.css'

import App from './components/App'
import Doc from './models/Doc'

const doc = Doc.create()

render(<App doc={doc} />, document.getElementById('root'))
