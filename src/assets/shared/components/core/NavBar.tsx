import { NavLink } from "react-router-dom";
import Avatar from "../../../Avatar.png";

export function NavBar() {

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
{/* 
        <NavLink to="login">LOGIN</NavLink>
        <NavLink to="shop">SHOP</NavLink>
        <NavLink to="cms">CMS</NavLink> */}


        {/* Cart Button badge */}
        <div>
           <button className="btn accent lg">
            Cart: 0
           </button>
           
        </div>

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
