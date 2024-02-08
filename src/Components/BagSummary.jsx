import React from 'react'

const BagSummary = () => {
  return (
    <div className=" w-64  bg-slate-50 shadow-md">
      <div >
        <div >PRICE DETAILS totalItem Items </div>
        <div>
          <span >Total MRP</span>
          <span >₹totalMRP</span>
        </div>
        <div >
          <span >Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹totalDiscount
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹finalPayment</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};



export default BagSummary