import logo from './logo.svg'
import React from 'react'
function App() {
  let topic = <h3>Table of Color</h3>
  let colors = ['Red', 'Green', 'Blue', 'Yellow']
  let list = colors.map(c => <li>{c}</li>) //เเทรกค่าแบบJSX
  return <ul>
          {topic}
          {list}
          <img src={logo} width="10%" alt=""/>
  </ul>
}

export default App;