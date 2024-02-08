import React from "react";

const BagItem = () => {
  const item = {
    image: "/images/1.jpg",
    company: "hero",
    item_name: "jeans",
    current_price: 1000,
    original_price: 2000,
    discount_percentage: "50%",
    return_period: 7,
    delivery_date: 10 / 2 / 2024,
  };

  return (
    <>
      <div className=" h-32 w-3/5 flex items-center gap-3 bg-slate-50 shadow-md">
        <div className="item-left-part h-full  w-28  overflow-hidden ">
          <img className="object-center object-cover" src={item.image} />
        </div>
        <div className="item-right-part ">
          <div className=" font-medium text-xl">
            {item.company}
          </div>
          <div className=" font-medium text-base">{item.item_name}</div>
          <div>
            <span className="font-medium text-base" >Rs {item.current_price}</span>
            <span className=" text-xs ">Rs {item.original_price}</span>
            <span className="discount-percentage">
              ({item.discount_percentage}% OFF)
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">
              {item.return_period} days
            </span>{" "}
            return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">{item.delivery_date}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BagItem;
