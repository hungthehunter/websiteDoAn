import "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { RiAdminFill } from "react-icons/ri";
import icon from "../../../../Assests/ICON";
import Toggle from "../../../../Button/Toggle";
import styles from "./Sidebar.module.scss";
const cx = classNames.bind(styles);
function Sidebar({ show }) {
  const [toggle, setToggle] = useState("true");
const [color,setColor]=useState(false);
const sidebarColor = useRef(null);
const [fontColor,setFontColor]=useState(false);
useEffect(() => {
  if (sidebarColor.current) {
    if(color && fontColor){
      sidebarColor.current.style.backgroundColor ="#fff";
      setFontColor(color ? 'black' : 'var(--sidebar-color)');
    }else{
      sidebarColor.current.style.backgroundColor ='var(--sidebar-color)';
    }
    
  }
}, [color]);


const buttonChange=()=>{
  setToggle(!toggle);
  setColor(!color);
  setFontColor(!fontColor);
}



  return (
    <aside className={cx("wrapper")} >
      <div ref={sidebarColor} className={cx('sidebar', { 'active': show })}>
        <ul className={cx("sidebar-information", "flex-start")} >
          <li>
           
            <div className={cx("logo-title")}>
            <img src={icon.nvidia_notext} alt="logo" className={cx("logo")} />
            <div className={cx("logo-text")}>
            <span style={{ color: fontColor }}>Nvidia</span>
            <span style={{ color: fontColor }}>The way it mean to play</span>
            </div>
              </div>

          </li>
      
          <li>
            <a href="/" style={{ color: fontColor }}>
              {" "}
              <span>
                <BsHouseDoor size={45} className={cx("icon")}></BsHouseDoor>
              </span>
              Home
            </a>
          </li>
          <li>
            <a href="/" style={{ color: fontColor }}>
              <IoPeopleOutline
                size={45}
                className={cx("icon")}
              ></IoPeopleOutline>
              About us
            </a>
          </li>
          <li>
            <a href="/" style={{ color: fontColor }}>
              <span>
                <LuPhoneCall size={45} className={cx("icon")}></LuPhoneCall>
              </span>
              Contact us
            </a>
          </li>
        </ul>
        <ul className={cx("sidebar-tool", "flex-end")}>
<li>
  <a href="/websiteDoAn/CustomerOrderDetail">
    <span>
  <RiAdminFill 
  size={45}
  className={cx("icon")}
  style={{color:fontColor}}
  ></RiAdminFill>
  </span>
  Admin
  </a>
</li>
        
          <li>
            <a href="/Login" style={{ color: fontColor }}>
              <span>
                <BiLogOut
                  size={45}
                  className={cx("icon")}
                  style={{color: fontColor }}
              
                ></BiLogOut>
              </span>
              Login
            </a>
          </li>
          <li onChange={buttonChange}>
            <Toggle props={toggle}/>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default Sidebar;
