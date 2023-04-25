import React from 'react'
import Routes from './routes'
import Header from './header'
const layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes />
      </div>
    </div>
  )
}

export default layout