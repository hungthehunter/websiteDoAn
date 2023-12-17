import { React, useState } from "react";
import { Link } from "react-router-dom";
import PICTURE from "../../Assests/PICTURE";
import "../../Layout/Component/Footer/index.js";
import Footer from "../../Layout/Component/Footer/index.js";
import "../Main/NVDIA_STORE_MAIN.scss";
import SLIDER from "./NVDIA_STORE_MAIN_SLIDER.js";
function NVDIA_STORE_MAIN() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (newIndex) => {
    setActiveSlide(newIndex);
  };

  const images = [
    {
      src: PICTURE.geforce_ada,
      alt: 'Image 1',
      brand: 'GeForce RTX 40 Series',
      heading: 'BEYOND FAST',
      link: '',
    },
    {
      src: PICTURE.shield_full_family,
      alt: 'Image 2',
      brand: 'GeForce RTX 40 Series',
      heading: 'BEYOND FAST',
      link: '',
    },
    {
      src: PICTURE.jetson_nano_shop,
      alt: 'Image 3',
      brand: 'GeForce RTX 40 Series',
      heading: 'BEYOND FAST',
      link: '',
    },
    {
      src: PICTURE.geforce_laptop_shop_banner,
      alt: 'Image 4',
      brand: 'GeForce RTX 40 Series',
      heading: 'BEYOND FAST',
      link: '',
    }
  ];
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>NVDIA</title>
      {/* <div id="slider">
        <div className="slider-item">
          <img
            className="slider-img"
            src={PICTURE.geforce_ada}
            alt="geforce-ada-4090-background-image-spec2-bb300_300-l"
          ></img>
          <div className="slider text-content">
            <div className="slider text-brand">
              <span>
                <b className="text-brand-ad">GeForce RTX 40 Series</b>
              </span>
            </div>
            <div className="slider text-heading">
              <span>
                <b>BEYOND FAST</b>
              </span>
            </div>
            <div className="slider text-choose">
              <a href="" className="btn brand-green-btn green-success">
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <img
            src={PICTURE.shield_full_family}
            className="slider-img"
            alt="shield-full-family-launch-wmfg-2560x300"
          ></img>
          <div class="slider text-btn">
            <ul class="btn-cadidator">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="slider text-content">
            <div className="slider text-heading">
              <span>
                <b className="text-brand-ad">
                  More Options.
                  <br />
                  More to Love
                </b>
              </span>
            </div>
            <div className="slider text-brand">
              <span>
                <b>The All-New SHIELD TV.</b>
              </span>
            </div>
            <div className="slider text-choose">
              <a href="" className="btn brand-green-btn green-success">
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="slider-item ">
          <img
            className="slider-img"
            src={PICTURE.jetson_nano_shop}
            alt="jetson-nano-shop-1360x300.jpg"
          ></img>

          <div className="slider text-content">
            <div className="slider text-heading">
              <span>
                <b className="text-brand-ad">Jetson Store</b>
              </span>
            </div>
            <div className="slider text-brand">
              <span>
                <b>Buy the latest developer kits</b>
              </span>
            </div>
            <div className="slider text-choose">
              <a href="" className="btn brand-green-btn green-success">
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <img
            className="slider-img"
            src={PICTURE.geforce_laptop_shop_banner}
          ></img>

          <div className="slider text-content">
            <div className="slider text-heading">
              <span>
                <b className="text-brand-ad">
                  Worker by Day.
                  <br />
                  Warrior by Night.
                </b>
              </span>
            </div>
            <div className="slider text-brand">
              <span>
                <b>Thin and Powerful GeForce Laptops</b>
              </span>
            </div>
            <div className="slider text-choose">
              <a href="" className="btn brand-green-btn green-success">
                Shop All
              </a>
            </div>
          </div>
        </div>
        <div className="slider text-btn">
          <ul className="btn-cadidator">
            <li onclick="currentDiv(1)" />
            <li onclick="currentDiv(2)" />
            <li onclick="currentDiv(3)" />
            <li onclick="currentDiv(4)" />
          </ul>
        </div>
      </div> */}
      <SLIDER images={images} activeSlide={activeSlide} onChangeSlide={handleSlideChange}></SLIDER>
      <div className="produce-section">
        <div className="grid wide">
          <div id="content">
            {/* Begin:Gaming and Etertainment */}
            <div className="text-center mt-32">
              <h1 className="color-black ">Gaming and Entertainment</h1>
            </div>
            <div className="content-section">
              <div className="produce-list">
                <div className="row">
                  <div className=" mt-32 text-center col  l-3 m-6 c-12">
                    <div className="list-item">
                      <a href="">
                       
                          <img className="produce-picture" src={PICTURE.geforce_ada_big}  alt="geforce-ada-40-series-gf-spotlight-600x338-p@2x.jpg">

                          </img>
                     
                      </a>
                      <div className="item-content text-center">
                        <a href="/websiteDoAn/Shop" className="address-name-item">
                          <h3 className="color-black">
                            GeForce Graphics Cards and Desktops
                          </h3>
                        </a>
                        <a href="/websiteDoAn/Shop" className="address-shop-item color-green ">
                          Shop Now &nbsp;
                          <i
                            className="icon-content fa fa-angle-right"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="  mt-32 text-center col l-3 m-6 c-12">
                    <div className="list-item">
                      <a href="/websiteDoAn/Shop">
                        <img
                          src={PICTURE.geforce_rtx_30}
                          alt="geforce-rtx-30-series-laptops-evens-4c25-P@2x.jpg"
                          className="produce-picture"
                        ></img>
                      </a>
                      <div className="item-content text-center">
                        <a href="/websiteDoAn/Shop" className="address-name-item color-black">
                          <h3 className="color-black">GeForce Laptop</h3>
                        </a>
                        <a href="/websiteDoAn/Shop" className="address-shop-item color-green ">
                          Shop Now &nbsp;
                          <i
                            className="icon-content fa fa-angle-right"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="  mt-32 text-center col l-3 m-6 c-12">
                    <div className="list-item">
                      <a href="/websiteDoAn/Shop">
           
                    <img  src={PICTURE.geforce_now_event}    alt="geforce-now-evens-4c25-P@2x.jpg"  className="produce-picture"></img>
                      </a>
                      <div className="item-content text-center">
                        <a href="/websiteDoAn/Shop" className="address-name-item color-black">
                          <h3 className="color-black">GeForce Now</h3>
                        </a>
                        <a href="/websiteDoAn/Shop" className="address-shop-item color-green ">
                          Shop Now &nbsp;
                          <i
                            className="icon-content fa fa-angle-right"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="   mt-32 text-center col l-3 m-6 c-12">
                    <div className="list-item">
                    <Link to="/websiteDoAn/Shop">
                    <img src={PICTURE.nvidia_shield_event}  alt="nvidia-shield-evens-4c25-P@2x.jpg"  className="d produce-picture"></img>
                    </Link>
                      <div className="item-content text-center">
                        <a href="/websiteDoAn/Shop" className="address-name-item color-black">
                          <h3 className="color-black">NVIDIA SHIELD</h3>
                        </a>
                        <a href="/websiteDoAn/Shop" className="address-shop-item color-green ">
                          Shop Now &nbsp;
                          <i
                            className="icon-content fa fa-angle-right"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End:Gaming and Etertainment */}
            {/* Begin:Graphics Cards, Laptops and Embedded Systems */}
            <div className="text-center">
              <h1 className="color-black ">
                Graphics Cards, Laptops and Embedded Systems
              </h1>
            </div>
            <div className="content-section">
              <div className=" produce-list">
                <div className="row">
                  <div className="col mt-32 text-center l-3 m-6 c-12">
                    <div className="list-item">
                      <a href="/websiteDoAn/Shop">
                        <div>
                          <img
                            src={PICTURE.nvidia_studio_laptops}
                            alt=""
                            className=" produce-picture"
                          />
                        </div>
                      </a>
                      <div className="item-content text-center">
                        <a href="/websiteDoAn/Shop" className="address-name-item">
                          <h3 className="color-black">
                            STUDIO Creator Laptops and Desktops
                          </h3>
                        </a>
                        <a href="/websiteDoAn/Shop" className="address-shop-item color-green ">
                          Shop Now &nbsp;
                          <i
                            className="icon-content fa fa-angle-right"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className=" col  mt-32 text-center l-3 m-6 c-12">
                    <div className="list-item">
                      <a href="/websiteDoAn/Shop">
                      
                    <img src={PICTURE.nvidia_rtx_a6000} className="produce-picture" alt="nvidia-rtx-a6000-evens-4c25-P@2x.jpg"></img>
                      </a>
                      <div className="item-content text-center">
                        <a href="/websiteDoAn/Shop" className="address-name-item color-black">
                          <h3 className="color-black">
                            NVIDIA RTX Professional Graphics Cards
                          </h3>
                        </a>
                        <a href="/websiteDoAn/Shop" className="address-shop-item color-green ">
                          Shop Now &nbsp;
                          <i
                            className="icon-content fa fa-angle-right"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className=" col  mt-32 text-center l-3 m-6 c-12">
                    <div className="list-item">
                      <a href="/websiteDoAn/Shop">
                     
                    <img src={PICTURE.nvidia_titan_rtx}  alt="nvidia-titan-rtx-evens-4c25-P@2x.jpg" className="produce-picture"></img>
                      </a>
                      <div className="item-content text-center">
                        <a href="/websiteDoAn/Shop" className="address-name-item color-black">
                          <h3 className="color-black">
                            NVIDIA TITAN Graphics Cards
                          </h3>
                        </a>
                        <a href="/websiteDoAn/Shop" className="address-shop-item color-green ">
                          Shop Now &nbsp;
                          <i
                            className="icon-content fa fa-angle-right"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className=" col  mt-32 text-center l-3 m-6 c-12">
                    <div className="list-item">
                  <img  src={PICTURE.nvidia_jetson_family} alt="/nvidia-jetson-family-evens-4c25-P@2x.jpg"  className="d produce-picture"></img>
                      <div className="item-content text-center">
                        <a href="/websiteDoAn/Shop" className="address-name-item color-black">
                          <h3 className="color-black">NVIDIA Jetson</h3>
                        </a>
                        <a href="/websiteDoAn/Shop" className="address-shop-item color-green ">
                          Shop Now &nbsp;
                          <i
                            className="icon-content fa fa-angle-right"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End:Graphics Cards, Laptops and Embedded Systems */}
            {/* Begin:Networking */}
            <div className="text-center">
              <h1 className="color-black ">Networking</h1>
            </div>
            <div className="content-section">
              <div className="row produce-list">
                <div className=" col l-3 m-6 mt-32 text-center c-12">
                  <div className="list-item">
                    <a href="/websiteDoAn/Shop">
                      <div>
                 
                    <img  src={PICTURE.nvidia_networking} alt="nvidia-networking-adapters-evens-3c33-P@2x.jpg" className="produce-picture"></img>
                      </div>
                    </a>
                    <div className="item-content text-center">
                      <a href="/websiteDoAn/Shop" className="address-name-item">
                        <h3 className="color-black">Adapter Cards</h3>
                      </a>
                      <a href="" className="address-shop-item color-green ">
                        Shop Now &nbsp;
                        <i
                          className="icon-content fa fa-angle-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" col l-3 m-6 mt-32 text-center c-12">
                  <div className="list-item">
                    <a href="/websiteDoAn/Shop">
                  
                  <img src={PICTURE.nvidia_networking_switch} className="produce-picture" alt="nvidia-networking-switches-evens-3c33-P@2x.jpg"></img>
                    </a>
                    <div className="item-content text-center">
                      <a href="/websiteDoAn/Shop" className="address-name-item color-black">
                        <h3 className="color-black">Switch Systems</h3>
                      </a>
                      <a href="/websiteDoAn/Shop" className="address-shop-item color-green ">
                        Shop Now &nbsp;
                        <i
                          className="icon-content fa fa-angle-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" col l-3 m-6 mt-32 text-center c-12">
                  <div className="list-item">
                    <a href="/websiteDoAn/Shop">
                      <img
                    src={PICTURE.bluefield}
                    alt="bluefield"
                    className="produce-picture"
                  />
                    </a>
                    <div className="item-content text-center">
                      <a href="/websiteDoAn/Shop" className="address-name-item color-black">
                        <h3 className="color-black">DPU</h3>
                      </a>
                      <a href="/websiteDoAn/Shop" className="address-shop-item color-green ">
                        Shop Now &nbsp;
                        <i
                          className="icon-content fa fa-angle-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" col l-3 m-6 mt-32 text-center c-12">
                  <div className="list-item">
                    <a href="/websiteDoAn/Shop">
                      <img
                    src={PICTURE.nvidia_interconnect}
                    alt="nvidia-interconnect-evens-3c33-P@2x.jpg"
                    className="d produce-picture"
                  />
                    </a>
                    <div className="item-content text-center">
                      <a href="/websiteDoAn/Shop" className="address-name-item color-black">
                        <h3 className="color-black">Interconnect</h3>
                      </a>
                      <a href="/websiteDoAn/Shop" className="address-shop-item color-green ">
                        Shop Now &nbsp;
                        <i
                          className="icon-content fa fa-angle-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End:Networking */}
        </div>
      </div>
      <div className="outer-promoBanner">
        <div className="row promoBanner">
          <div className="promoContent">
            <div className="promoText">
              <span>
                <h2 className="color-green">
                  NVIDIA Deep Learning <br /> Institute
                </h2>
                <h3 className="color-black">
                  Education and Training Solution to Solve the World's Most
                  Challenging Problem
                </h3>
                <div className="promoTextbtn">
                  <a href="" className="btn brand-green-btn green-success">
                    Get Online Training
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row col col-12  outer-footerSection">
        {/* <span>
          <a href="" className="color-black underline-green">
            Customer Service
          </a>
          <span className="footer-separate">|</span>
          <a href="" className="color-black underline-green">
            Technical Supports
          </a>
          <span className="footer-separate">|</span>
          <a href="" className="color-black underline-green">
            My Account
          </a>
        </span> */}
      </div>
      {/* <div id="footer">
        <div className="container">
          <div className="footerID">
            <img src={PICTURE.nvidia} alt="NVIDIA" className="footerID-logo" />
            <div className="footerOrigin">USA - United States</div>
          </div>
      
          <ul className="footerPolicy ">
            <li className="private-policy">
              <a href="" className="color-black">
                Private-Policy
              </a>
            </li>
            <li className="legal-info">
              <a href="" className="color-black">
                Legal-Info
              </a>
            </li>
            <li className="contact-us">
              <a href="" className="color-black">
                Contact-Us
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>Copyright © 2023 NVIDIA Corporation</p>
          </div>
        </div>
      </div> */}

   
      <Footer></Footer>
   
    </>
  );
}
export default NVDIA_STORE_MAIN;
