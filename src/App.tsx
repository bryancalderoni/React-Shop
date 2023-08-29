import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CartPage from "./assets/pages/cart/CartPage";
import { ShopPage } from "./assets/pages/shop/ShopPage";
import CheckoutPage from "./assets/pages/checkout/CheckoutPage";
import ThanksPage from "./assets/pages/checkout/ThanksPage";
import LoginPage from "./assets/pages/login/LoginPage";
import CMSPage from "./assets/pages/cms/CMSPage";
import CMSProductsPage from "./assets/pages/cms/products/CMSProductsPage";
import CMSOrdersPage from "./assets/pages/cms/orders/CMSOrdersPage";
import NavBar from "./assets/shared/components/core/NavBar";

function App() {
  return (
    <BrowserRouter>


   <NavBar />

    <hr />
      <div className="page">
        <Routes>
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="thankyou" element={<ThanksPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="cms" element={<CMSPage />}>
          <Route path="products" element={<CMSProductsPage />} />
          <Route path="orders" element={<CMSOrdersPage />} />
          <Route index element={<Navigate to="products" />} />
          </Route>

          <Route path="*" element={<Navigate to="shop" />}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
