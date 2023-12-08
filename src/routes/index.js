import HeaderOnly from "../Component/Layout/Component/HeaderOnly/index.js";
import orderAdmin from "../Component/Page/Admin/orderAdmin.js";
import userAdmin from "../Component/Page/Admin/userAdmin.js";
import CustomerAddressForm from "../Component/Page/Customer/CustomerAddressForm.js";
import CustomerOrderDetail from "../Component/Page/Customer/CustomerOrderDetail.js";
import Login from "../Component/Page/LoginSignup/LoginSignup.js";
import NVDIA_STORE_MAIN from "../Component/Page/Main/NVDIA_STORE_MAIN.js";
import Policy from "../Component/Page/Policy/index.js";
import Products from "../Component/Page/Products/Products.js";
import Products_gtx_4080 from "../Component/Page/Products/Products_gtx_4080.js";
import Products_gtx_4090 from "../Component/Page/Products/Products_gtx_4090.js";
import Search from "../Component/Page/Search/index.js";
import Service from "../Component/Page/Service/Service.js";
import Shop from "../Component/Page/Shop/Shop.js";
const publicRoutes = [
  {
    path: "/websiteNVIDIA/",
    component: NVDIA_STORE_MAIN,

  },

  {
    path: "/websiteNVIDIA/Service",
    component: Service,
  },

  {
   path: "/websiteNVIDIA/Shop",
   component: Shop,
  },

  {
    path: "/websiteNVIDIA/Login",
    component: Login,
    layout:HeaderOnly
  },
  {
    path: "/websiteNVIDIA/Search",
    component: Search,
  },
  {
    path:"/websiteNVIDIA/Main",
    component: NVDIA_STORE_MAIN,
  },
  {
    path:"/websiteNVIDIA/Products",
    component: Products
  },
  {
    path:"/websiteNVIDIA/Products_gtx_4080",
    component: Products_gtx_4080
  },
  {
    path:"/websiteNVIDIA/Products_gtx_4090",
    component: Products_gtx_4090
  },
{
  path:"/websiteNVIDIA/Policy",
  component: Policy
},
{
  path:"/websiteNVIDIA/CustomerAddressForm",
  component: CustomerAddressForm
},
{
  path:"/websiteNVIDIA/CustomerOrderDetail",
  component: CustomerOrderDetail
},
{
  path:"/websiteNVIDIA/orderAdmin",
  component: orderAdmin
},
{
  path:"/websiteNVIDIA/userAdmin",
  component: userAdmin
},

];

const privateRoutes = {};

export { privateRoutes, publicRoutes };
