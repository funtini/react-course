import React from 'react'
import ReactDOM from 'react-dom'

import Family from './Family'
import Member from './member'


ReactDOM.render(
<Family lastname='Silva'>
    <Member name ='Guilherme' />
    <Member name ='Rafael' />
    <Member name ='Ana' />
</Family>
    , document.getElementById('app'))

