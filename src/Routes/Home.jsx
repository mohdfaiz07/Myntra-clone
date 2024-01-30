import React from 'react'
import Items from '../Components/Items'
import { useSelector } from 'react-redux'

const Home = () => {
   const items =  useSelector( (store)=> store.item)
  //  console.log(items)
  return (
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 bg-red-300 pt-4 '>
        {items && items.map((item) => <Items item={item} key={item.id} />)}
      </div>
  )
}

export default Home