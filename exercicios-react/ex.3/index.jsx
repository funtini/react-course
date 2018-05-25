import React from 'react'
import ReactDOM from 'react-dom'
import Component, { Primeiro, Segundo } from './component'

ReactDOM.render(<div><Primeiro/><Segundo/><Component value='ola'/></div>, document.getElementById('app'))

