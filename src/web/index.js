import React from 'react'
import { render } from 'react-dom'

import './index.css'

import App from './components/App'
import Document from './models/Document'

const doc = Document.create()

render(<App document={doc} />, document.getElementById('root'))
