import { selectTotalCartCost, useCart, useCartPanel } from "@/services/cart";
import React from "react";
import { useNavigate } from "react-router-dom";

export function CartPanel() {

    const navigate = useNavigate();
    const closeCartPanel = useCartPanel(state => state.closeOverlay);
    const list = useCart( state => state.list);
    const totalCartCost = useCart(selectTotalCartCost);


 function goToCart() {
    navigate('cart');
    closeCartPanel();
 }


  return (
    <div className="fixed bg-slate-800 right-4 top-24 p-3 rounded-xl shadow-2xl w-96">
      <ul className="flex flex-col">

     { list.map((e) => {
      return (
  

        <li key={e.product.id} className="flex justify-between items-center border-b border-slate-600 pb-3">
          <div>{e.product.name}</div>
          <div className="flex gap-3">
            <div>({e.qty} x € {e.product.cost})</div>
            <div>€ {e.qty * e.product.cost}</div>
          </div>
        </li>  ) })}
        
</ul>

            <div className="flex justify-end text-xl font-bold my-3">
                total:{totalCartCost}€
               
            </div>

            <div className="flex justify-center">
                <button className="btn primary" onClick={goToCart}>
               
                    Go to Cart
               </button>

            </div>
       
      
    </div>
  );
}
