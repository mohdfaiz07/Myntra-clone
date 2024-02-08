import React from 'react'
import BagItem from '../Components/BagItem'
import BagSummary from '../Components/BagSummary'

const Bag = () => {
  return (
    <div className=' flex gap-10'>
        
        <BagItem/>
        <BagSummary/>

    </div>
  )
}

export default Bag