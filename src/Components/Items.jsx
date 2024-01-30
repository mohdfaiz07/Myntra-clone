import React from 'react'


const Items = (props) => {
      const {item} = props
        return (
            
    <div className=" bg-slate-200 flex flex-col justify-center items-center">
      <div className=' h-64 w-56 overflow- relative'>
      <img className="h-full w-full object-cover object-top " src={item.image} alt="item image" />
      <div className=" absolute bottom-3 bg-slate-100  ">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
     
      </div>
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      
        <button>
         Add to Bag
        </button>
      
    </div>
  );


}

export default Items