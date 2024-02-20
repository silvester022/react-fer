import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CounterApp } from './CounterApp'
// import { FirstApp } from './FirstApp'

// import { HelloWorldApp } from './HelloWorld'
// import { FirstApp } from './FirstApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp title='title' /> */}
    <CounterApp value={100} />
  </React.StrictMode>
)