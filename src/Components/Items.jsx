import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BagAction } from "../ReduxStore/BagSlice";


const Items = (props) => {
  const { item } = props;
  const bag = useSelector((store) => store.bag);
  const dispatch = useDispatch();

  const addToBagHandler = () => {
    dispatch(BagAction.addToBag(item.id));
  };

  const removeToBagHandler = ()=>{
    dispatch(BagAction.removeToBag(item.id))

  }

  const foundElement = bag.indexOf(item.id) >= 0;


  return (
    <div className="  flex flex-col items-center mb-4 hover:shadow-md">
      <div className=" h-64 w-56 overflow- relative">
        <img
          className="h-full w-full object-cover object-top "
          src={item.image}
          alt="item image"
        />
        <div className=" absolute bottom-2 left-1 bg-white bg-opacity-75 px-1 ">
          <h6 className=" text-xs">
            {item.rating.stars} ⭐| {item.rating.count}
          </h6>
        </div>
      </div>
      <div className="company-name">
        <h1 className="text-xl capitalize font-bold">{item.company}</h1>
      </div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {foundElement ? (
        <button onClick={removeToBagHandler}  className="px-5 py-1 m-3 rounded-sm bg-red-700 text-white hover:shadow-md">
          Remove
        </button>
      ) : (
        <button
          onClick={addToBagHandler}
          className="px-5 py-1 m-3 rounded-md bg-pink-200 hover:shadow-md"
        >
           Add to Bag
        </button>
      )}
    </div>
  );
};

export default Items;
