import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import icon from "../../../Assests/ICON";
import Cart from "../Cart/Cart.js";
import Sidebar from "../DefaultLayout/Sidebar/index.js";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
function Header() {
  const [title, setTitle] = useState("NVIDIA STORE");
  const [showNav, setShowNav] =useState(false);
  const [showCart,setShowCart]=useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setTitle("NVIDIA STORE");
    } else if (location.pathname === "/Service") {
      setTitle("Service");
    } else if (location.pathname === "/Login") {
      setTitle("Login / Sign Up");
    }
  });

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <nav className={cx("global-nav")}>
          <div className={cx("nav-header-container")}>
            <div className={cx("logo-container")}>
              <div className={cx("logo")}>
                <img
                  src={icon.nvidia}
                  alt="nvidia-icon"
                  style={{ width: 110, height: 44 }}
                ></img>
              </div>
            </div>
            {
              location.pathname === "/Login" ||
              "/Products" ||
              "/Products_gtx_4080" ||
              "/Products_gtx_4090" ? (
                <div className={cx("nav-tool-container")}>
                  <span className={cx("cart-counter")}>0</span>

                  <FiShoppingCart
                    size={28}
                    style={{ paddingRight: 10 }}
                   onClick={()=>setShowCart(!showCart)}
                  />

                 <Cart  showCart={showCart}/>
                  <GiHamburgerMenu
                    size={28}
                    className={cx("nav-header-item")}
                    onClick={() => setShowNav(!showNav)}
                  />
                  <Sidebar show={showNav} />
                </div>
              ) : (
                <div></div>
              )
            }
          </div>
          <nav className={cx("navbar-fixed-top")}>
            <div className={cx("container")}>
              <div className={cx("row")}>
                <div className={cx("navbar-header")}>
                  <h1 className={cx("navbar-brand")}>{title}</h1>
                </div>
              </div>
            </div>
          </nav>
        </nav>
      </div>
    </header>
  );
}
export default Header;
