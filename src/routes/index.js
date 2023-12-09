import BodyOnly from "../Component/Layout/Component/BodyOnly/index.js";
import HeaderOnly from "../Component/Layout/Component/HeaderOnly/index.js";
import orderAdmin from "../Component/Page/Admin/orderAdmin.js";
import userAdmin from "../Component/Page/Admin/userAdmin.js";
import CustomerOrderDetail from "../Component/Page/Customer/CustomerOrderDetail.js";
import Login from "../Component/Page/LoginSignup/LoginSignup.js";
import NVDIA_STORE_MAIN from "../Component/Page/Main/NVDIA_STORE_MAIN.js";
import Policy from "../Component/Page/Policy/index.js";
import Products from "../Component/Page/Products/Products.js";
import Products_gtx_4060 from "../Component/Page/Products/Products_gtx_4060.js";
import Products_gtx_4070Ti from "../Component/Page/Products/Products_gtx_4070Ti.js";
import Products_gtx_4080 from "../Component/Page/Products/Products_gtx_4080.js";
import Products_gtx_4090 from "../Component/Page/Products/Products_gtx_4090.js";
import Products_gtx_Titan from "../Component/Page/Products/Products_gtx_Titan.js";
import Search from "../Component/Page/Search/index.js";
import Service from "../Component/Page/Service/Service.js";
import Shop from "../Component/Page/Shop/Shop.js";
const publicRoutes = [
  {
    path:  process.env.PUBLIC_URL+"/",
    component: NVDIA_STORE_MAIN,

  },

  {
    path: process.env.PUBLIC_URL+"/Service",
    component: Service,
  },

  {
    path: process.env.PUBLIC_URL+"/Shop",
   component: Shop,
  },

  {
    path: process.env.PUBLIC_URL+"/Login",
    component: Login,
    layout:HeaderOnly
  },
  {
    path: process.env.PUBLIC_URL+"/Search",
    component: Search,
  },
  {
    path: process.env.PUBLIC_URL+"/Main",
    component: NVDIA_STORE_MAIN,
  },
  {
    path: process.env.PUBLIC_URL+"/Products",
    component: Products
  },
  {
    path: process.env.PUBLIC_URL+"/Products_gtx_4080",
    component: Products_gtx_4080
  },
  {
    path: process.env.PUBLIC_URL+"/Products_gtx_4090",
    component: Products_gtx_4090
  },
{
  path: process.env.PUBLIC_URL+"/Policy",
  component: Policy
},
{
  path: process.env.PUBLIC_URL+"/CustomerOrderDetail",
  component: CustomerOrderDetail,
  layout: BodyOnly
},
{
  path: process.env.PUBLIC_URL+"/userAdmin",
  component: userAdmin,
  layout: BodyOnly

},
{
  path: process.env.PUBLIC_URL+"/orderAdmin",
  component: orderAdmin,
  layout: BodyOnly
},
{
  path: process.env.PUBLIC_URL+"/Products_gtx_Titan",
  component:Products_gtx_Titan
},
{
  path: process.env.PUBLIC_URL+"/Products_gtx_4070Ti",
  component: Products_gtx_4070Ti
},
{
  path: process.env.PUBLIC_URL+"/Products_gtx_4060",
  component: Products_gtx_4060
},
];

const privateRoutes = {};

export { privateRoutes, publicRoutes };
