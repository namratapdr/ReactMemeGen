import React from 'react'
import {MemeGen} from './componnents/memeGenerator'
import {Header} from './componnents/header'
export const App = () => {

  return (
    <div className="Container"> 
       <Header/>
       <MemeGen/>
    </div>
  )
}