import React from 'react'
import Items from '../Components/Items'
import { useSelector } from 'react-redux'

const Home = () => {
   const items =  useSelector( (store)=> store.item)
    // console.log(items)
  return (
      <div className=' flex flex-wrap justify-center gap-10 my-8'>
        {items && items.map((item) => <Items item={item} key={item.id} />)}
      </div>
  )
}

export default Home