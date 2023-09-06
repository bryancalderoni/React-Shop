import { NavLink } from "react-router-dom";
import Avatar from "../../../assets/Avatar.png";
import { CartPanel } from "./CartPanel";
import { selectTotalCartItems, useCart, useCartPanel } from "@/services/cart";

export function NavBar() {

  const isCartPanelOpen = useCartPanel( state => state.open);
  const toggleCartPanel = useCartPanel( state => state.toggle);
  const totalCartItems = useCart(selectTotalCartItems)

const isActive = (obj: { isActive: boolean}) => {
    return obj.isActive ?  'font-bold text-sky-400' : 'text-white'
}

  return (
    <div className="fixed top-0 right-0 left-0 shadow-2xl z-10 ">
      <div className="bg-slate-900 flex justify-between items-center h-20 text-white ">
        <div className="flex items-center gap-3">
          <img src={Avatar} alt="logo" className="w-16 rounded-full"/>
          <NavLink to="shop" className={isActive}> SHOP </NavLink>
        </div>



        {/* Cart Button badge */}
        <div>
           <button className="btn accent lg" onClick={toggleCartPanel}>
            Cart: {totalCartItems}
           </button>
           
        </div>

{/* { Cart Panel} */}
{ isCartPanelOpen && <CartPanel />}

{/* Action button */}
        <div className="fixed bottom-2 right-2 p-5">
            <NavLink to="login" className="btn accent lg">login</NavLink>
            <NavLink to="cms" className="btn accent lg">cms</NavLink>
            <button className="btn primary lg">logout</button>
        </div>


      </div>
    </div>
  );
}

export default NavBar;
