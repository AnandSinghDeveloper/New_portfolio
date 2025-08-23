import React from 'react'
import { Timeline } from '../Components/Timeline'
import { experiences } from '../Constants'
const Expriences = () => {
  return (
    <div className='w-full md:pl-20 p-10'>
      <Timeline data={experiences}/>
    </div>
  )
}

export default Expriences
