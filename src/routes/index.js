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
import Shop from '../Component/Page/Shop/index.js';

const publicRoutes = [
  {
    path: "/websiteDoAn",
    component: NVDIA_STORE_MAIN,
  },
  
    {
      path: "/websiteDoAn/Service",
      component: Service,
    },
    {
      path: "/websiteDoAn/Shop",
      component: Shop,
    },
    {
      path: "/websiteDoAn/Login",
      component: Login,
      layout: HeaderOnly,
    },
    {
      path: "/websiteDoAn/Search",
      component: Search,
    },
    // ... other routes
  
  {
    path:"/websiteDoAn/Main",
    component: NVDIA_STORE_MAIN,
  },
  {
    path:"/websiteDoAn/Products",
    component: Products
  },
  {
    path:"/websiteDoAn/Products_gtx_4080",
    component: Products_gtx_4080
  },
  {
    path:"/websiteDoAn/Products_gtx_4090",
    component: Products_gtx_4090
  },
{
  path:"/websiteDoAn/Policy",
  component: Policy
},
{
  path:"/websiteDoAn/CustomerOrderDetail",
  component: CustomerOrderDetail,
  layout: BodyOnly
},
{
  path:"/websiteDoAn/userAdmin",
  component: userAdmin,
  layout: BodyOnly

},
{
  path:"/websiteDoAn/orderAdmin",
  component: orderAdmin,
  layout: BodyOnly
},
{
  path:"/websiteDoAn/Products_gtx_Titan",
  component:Products_gtx_Titan
},
{
  path:"/websiteDoAn/Products_gtx_4070Ti",
  component: Products_gtx_4070Ti
},
{
  path:"/websiteDoAn/Products_gtx_4060",
  component: Products_gtx_4060
},
];

const privateRoutes = {};

export { privateRoutes, publicRoutes };
