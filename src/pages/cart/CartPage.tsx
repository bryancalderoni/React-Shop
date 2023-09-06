import { selectCartList, selectTotalCartCost, useCart } from "@/services/cart";

export function CartPage() {
  const list = useCart(selectCartList);
  const totalCost = useCart(selectTotalCartCost);
  const increaseQty = useCart(state => state.increaseQty)
  const decreaseQty = useCart(state => state.decreaseQty)
  return (
    <div>
      <h1 className="title">CART PAGE</h1>

      <ul>
        {list.map((e) => {
          return (
            <li
              key={e.product.id}
              className="flex flex-col sm:flex-row justify-between border-b border-blue-400 items-center gap-3 my-3 p-4 "
            >
              <div className="flex items-center gap-3">
                <img
                  src={e.product.tmb}
                  alt={e.product.name}
                  className="w-24 rounded-xl"
                />
                <div className="font-bold"> {e.product.name}</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex items-center gap-3">
                  <button className="btn primary" onClick={() => decreaseQty(e.product.id)}>-</button>
<div>Qty: {e.qty}</div>
                  <button className="btn primary" onClick={() => increaseQty(e.product.id)}>+</button>
                </div>
                <div className="w-16 text-center">€ {e.product.cost * e.qty}</div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="text-4xl text-right">Total : € {totalCost}</div>
    </div>
  );
}

export default CartPage;
