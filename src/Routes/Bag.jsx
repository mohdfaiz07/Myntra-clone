import React from 'react'
import BagItem from '../Components/BagItem'
import BagSummary from '../Components/BagSummary'

const Bag = () => {
  return (
    <div className=' flex justify-between px-4'>
        
        <BagItem/>
        <BagSummary/>

    </div>
  )
}

export default Bag