import React, { useState } from "react";
import { BsSlashLg } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import PICTURE from "../../Assests/PICTURE";
import "../Products/Products.scss";
function Products_gtx_4060() {
const [gtx_4090Off,gtx_4090On]=useState(false);
const toggleGtx_4090= () => {
};
  return (
   
      <div className="inner">
        <div className="grid wide">
        <div className="products">
          <div className="row">
            <div className="col l-12">
              <div className="breadcrumb-list">
                <ol>
                  <li>
                    <a href="/">
        < FaHome  style={{color:"blue",paddingRight:4}} size={20} ></ FaHome>
        <span>Home Page           <span><BsSlashLg style={{marginLeft:0,marginRight:0}}></BsSlashLg></span>
              
                    <span style={{color:"black"}}> ASUS PROART GeForce RTX 4060 24GB (PROART-RTX4090-24G)
                    </span></span>

                   
                    </a>
                  </li>
                  
                   
         
                  
                 
                </ol>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="products-content">
              <div className="col l-4">
                <img src={PICTURE.GeForce_RTX4060} className="products-picture"></img>
              </div>
              <div className="col l-8">
                <div className="products-title-heading">
                <h2>ASUS PROART GeForce RTX 4060 24GB (PROART-RTX4090-24G)</h2>
                </div>
                <div className="products-price">
                  <span className="products-price-new">5.550.000₫</span>
                  <span className="products-price-old">6.990.000₫</span>
                  <span className="products-discount">-25%</span>
                </div>

                <div className="action-buys">
                  <button className="button btn-buynow" onClick={toggleGtx_4090}>
      
                    <span className="maintext">BUY NOW</span>
                    <span className="subtext">
                      Delivery to your door or pick up from the store
                    </span>
    
                  </button>
                </div>

                <div className="products-desc-short">
                  <p className="products-desc">
                    <strong>
                      <span style={{ fontSize: 20, marginBottom: 10 }}>
                        General infomation:
                      </span>
                    </strong>
                  </p>
                  <p className="products-desc">
                    <strong>
                      <span style={{ fontSize: 20, marginBottom: 10 }}>
                        - Hỗ trợ đổi mới trong 7 ngày.
                      </span>
                    </strong>
                  </p>
                  <p className="products-desc">
                    <strong>
                      <span style={{ fontSize: 20, marginBottom: 10 }}>
                        - Giảm thêm 100k khi mua kèm PC/Laptop
                      </span>
                    </strong>
                  </p>
                </div>

                <div className="products-discount-promo-box">
                  <div className="products-box-header">
                    <h2>Khuyến mãi</h2>
                  </div>
                  <div className="products-box-content">
                    <div className="products-discount-promo--content">
                      <div className="products-discount-promo--list">
                        <ul>
                          <li>
                            <div className="line-discount">
                              <span>
                                Giảm ngay 8.000.000Đ khi mua kèm màn hình với PC
                                GVN x ASUS EVANGELION 2
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="line-discount">
                              <span>
                                Giảm ngay 7.000.000đ khi mua Màn hình cùng PC
                                GVN Gaming Intel i7-13700F/ VGA RTX 4070.{" "}
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="line-discount">
                              <span>
                                Giảm ngay 2.000.000đ khi mua Màn hình cùng PC
                                GVN Gaming Intel i5-13600KF/ VGA RTX 3060.{" "}
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="line-discount">
                              <span>
                                Giảm 41% khi mua kèm giá treo màn hình North
                                Bayou NB-F80 với màn hình giá chỉ 290.000đ.{" "}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              <div className="row">
                <div className="products-desc-content">
              <div className="col l-7 products-desc">
                <div className="products-heading">
                  <h2>Product Description</h2>
                </div>
                <div className="products-wrap">
                  <div className="products-desc--content expand--toggle ">
                    <div
                      className="desc-content"
                      style={{ marginTop: 10, marginBottom: 10 }}
                    >
                      <span style={{ fontSize: 22 }}>
                        <strong style={{ color: "black" }}>
                          Technology specifications
                        </strong>
                      </span>
                    </div>
                    <div className="scroll-panel">
                      <table className="table table-bordered">
                        <tbody>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Graphics Core</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}>NVIDIA® GeForce RTX® 4080</span>
                            </td>
                          </tr>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Standard Bus</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}>  PCI Express 4.0</span>
                            </td>
                          </tr>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Clock Speed</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}>OC Mode: 2535 MHz</span>
                            </td>
                          </tr>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Default Mode</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}> 2505 MHz (Boost Clock)</span>
                            </td>
                          </tr>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>CUDA Cores</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}>
                                
                                9728
                              </span>
                            </td>
                          </tr>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Memory Speed</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}>22.4 Gbps</span>
                            </td>
                          </tr>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>OpenGL</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}>OpenGL® 4.6</span>
                            </td>
                          </tr>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Video Memory</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}>16 GB GDDR6X</span>
                            </td>
                          </tr>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Memory Bus</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}>256-bit</span>
                            </td>
                          </tr>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Resolution</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}>
                              Maximum Resolution 7680 x 4320
                              </span>
                            </td>
                          </tr>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Connectors</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <ul>
                                <li>
                                  <span style={{ fontSize: 18 }}>1 x Native HDMI 2.1</span>
                                </li>
                                <li>
                                  <span style={{ fontSize: 18 }}>
                                  3 x Native DisplayPort 1.4a
                                  </span>
                                </li>
                                <li>
                                  <span style={{ fontSize: 18 }}>
                                  HDCP Support: Yes (2.3)
                                  </span>
                                </li>
                                <li>
                                  <span style={{ fontSize: 18 }}>
                                  Maximum Supported Displays: 4
                                  </span>
                                </li>
                                <li>
                                  <span style={{ fontSize: 18 }}>
                                  NVLink/Crossfire Support: No
                                  </span>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Accessories</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <ul>
                                <li>
                                  <span style={{ fontSize: 18 }}>
                                  1 x Collectible Card
                                  </span>
                                </li>
                                <li>
                                  <span style={{ fontSize: 18 }}>
                                  1 x Quick Guide
                                  </span>
                                </li>
                                <li>
                                  <span style={{ fontSize: 18 }}>
                                  1 x Conversion Cable (1 to 3)
                                  </span>
                                </li>
                                <li>
                                  <span style={{ fontSize: 18 }}>
                                  1 x PROART Graphics Card Holder
                                  </span>
                                </li>
                                <li>
                                  <span style={{ fontSize: 18 }}>
                                  1 x ASUS Velcro Strap & Hook
                                  </span>
                                </li>
                                <li>
                                  <span style={{ fontSize: 18 }}>
                                  1 x Thank You Card
                                  </span>
                                </li>
                              
                              </ul>
                              
                            </td>
                            
                          </tr>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Software</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}>ASUS GPU Tweak III & GeForce Game Ready Driver & Studio Driver: Please download all software from the support website.</span>
                            </td>
                          </tr>

                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Dimensions</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}>300 x 120 x 50 mm</span>
                            </td>
                          </tr>

                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Recommended PSU</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}> 750W</span>
                            </td>
                          </tr>

                          <tr style={{ boxSizing: "border-box" }}>
                            <td className="col-info">
                              <span style={{ fontSize: 18 }}>
                                <strong>
                                  <strong>Power Connectors</strong>
                                </strong>
                              </span>
                            </td>
                            <td className="col-info-long">
                              <span style={{ fontSize: 18 }}>1 x 16-pin</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-5">
                <div className="products-block">
                  <div className="products-heading">
                    <h2>News about products</h2>
                  </div>
                  <div className="products-wrap">
                    <ul className="list-post">
                      <li className="item-post fade-box">
                        <div className="img-post">
                          <a
                            className="aspect-ratio"
                            href="https://gvn360.com/cong-nghe/galax-rtx 4060-la-gpu-dau-tien-co-hdmi-retimer-de-truyen-du-lieu-duong-dai/"
                          >
                            <img
                              src={PICTURE.cardnew}
                              alt="Galax RTX 4060 là GPU đầu tiên có HDMI Retimer để truyền dữ liệu đường dài"
                            ></img>
                          </a>
                        </div>
                        <div className="info-post">
                          <h3>
                          <a href="https://gvn360.com/cong-nghe/galax-rtx 4060-la-gpu-dau-tien-co-hdmi-retimer-de-truyen-du-lieu-duong-dai/">Galax RTX 4060 là GPU đầu tiên có HDMI Retimer để truyền dữ liệu đường dài</a>
                          </h3>
                        </div>
                      </li>
                      <li className="item-post fade-box">
                        <div className="img-post">
                          <a
                            className="aspect-ratio"
                            href="https://www.bing.com/search?pglt=41&q=CPU-Z+kh%C3%B4ng+c%C3%B2n+l%C3%A0+c%C3%B4ng+c%E1%BB%A5+benchmark+CPU+l%C3%BD+t%C6%B0%E1%BB%9Fng+n%E1%BB%AFa&cvid=93dbdc53dcf0417ab0bbc272dd8a0ab0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg80gEIMTAxMmowajGoAgCwAgA&FORM=ANAB01&PC=CNNDDB"
                          >
                            <img
                              src={PICTURE.cpu}
                              alt="CPU-Z không còn là công cụ benchmark CPU lý tưởng nữa"
                            ></img>
                          </a>
                        </div>
                        <div className="info-post">
                          <h3>
                          <a href="https://www.bing.com/search?pglt=41&q=CPU-Z+kh%C3%B4ng+c%C3%B2n+l%C3%A0+c%C3%B4ng+c%E1%BB%A5+benchmark+CPU+l%C3%BD+t%C6%B0%E1%BB%9Fng+n%E1%BB%AFa&cvid=93dbdc53dcf0417ab0bbc272dd8a0ab0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg80gEIMTAxMmowajGoAgCwAgA&FORM=ANAB01&PC=CNNDDB">CPU-Z không còn là công cụ benchmark CPU lý tưởng nữa</a>
                          </h3>
                        </div>
                      </li>
                      <li className="item-post fade-box">
                        <div className="img-post">
                          <a
                            className="aspect-ratio"
                            href="https://gearvn.com/blogs/cong-nghe/elon-musk-ra-mat-chatbot-ai-grok-biet-tau-hai-y-nhu-chu-cua-no"
                          >
                            <img
                              src={PICTURE.ai}
                              alt="Elon Musk ra mắt chatbot AI Grok biết tấu hài y như chủ của nó"
                            ></img>
                          </a>
                        </div>
                        <div className="info-post">
                          <h3>
                          <a href="https://gearvn.com/blogs/cong-nghe/elon-musk-ra-mat-chatbot-ai-grok-biet-tau-hai-y-nhu-chu-cua-no">Elon Musk ra mắt chatbot AI Grok biết tấu hài y như chủ của nó</a>
                          </h3>
                        </div>
                      </li>
                      <li className="item-post fade-box">
                        <div className="img-post">
                          <a
                            className="aspect-ratio"
                            href="https://gvn360.com/cong-nghe/galax-rtx 4060-la-gpu-dau-tien-co-hdmi-retimer-de-truyen-du-lieu-duong-dai/"
                          >
                            <img
                              src={PICTURE.flag}
                              alt="
                              Việt Nam đặt mục tiêu trở thành quốc gia sản xuất bóng bán dẫn"
                            ></img>
                          </a>
                        </div>
                        <div className="info-post">
                          <h3>
                          <a href="https://gearvn.com/blogs/cong-nghe/viet-nam-dat-muc-tieu-tro-thanh-quoc-gia-san-xuat-bong-ban-dan">Galax RTX 4060 là GPU đầu tiên có HDMI Retimer để truyền dữ liệu đường dài</a>
                          </h3>
                        </div>
                      </li>
                   
                    
                    </ul>
                  </div>
                </div>
              </div>
              </div>
          </div>
          </div>
        </div>
      </div>
 
  );
}

export default Products_gtx_4060;

