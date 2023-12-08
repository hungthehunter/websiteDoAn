import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import PICTURE from "../../Assests/PICTURE";
import "../Shop/Shop.scss";

const Shop_Fake = ({ isGridView , searchItem ,categoryFilters}) => {
  const card_gtx_4080="card_gtx_4080";
  const card_gtx_4090="card_gtx_4090";
  const laptop="laptop";
 console.log(categoryFilters+ "this is it");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Số mục hàng hiển thị trên mỗi trang
  const [searchTerm, setSearchTerm] = useState(searchItem);
  const productRefs = {
    item: useRef(null),
    detail: useRef(null),
    buy: useRef(null),
    container: useRef(null),
    picture: useRef(null),
  };

   const productCategory=[
    { id: 1, name: 'Màn hình Viewsonic VA2432-H-W 24" IPS 100Hz viền mỏng',picture:PICTURE.laptop , ProductCategory:"laptops" , Manufacturer:"NVIDIA" , Price:"$0_$20"},
  { id: 2, name: 'NVIDIA GeForce RTX 4090' ,picture:PICTURE.GeForce_RTX4090 , ProductCategory:"graphicsCards" , GPU:"GTX4090" , Manufacturer:"ASUS" , Price:"$0_$20"},
  { id: 3, name: 'NVIDIA GeForce RTX 4080' ,picture:PICTURE.GeForce_RTX4080 , ProductCategory:"graphicsCards", GPU:"GTX4080" , Manufacturer:"ACER" , Price:"$0_$20"},
  { id: 4, name: 'NVIDIA GeForce RTX 4070' ,picture:PICTURE.GeForce_RTX4070 , ProductCategory:"graphicsCards" , GPU:"GTX4070Ti" , Manufacturer:"ACER" , Price:"$20_$50"},
  { id: 5, name: 'NVIDIA GeForce RTX 4070 Ti' ,picture:PICTURE.GeForce_RTX4070 , ProductCategory:"graphicsCards" , GPU:"GTX4070" , Manufacturer:"ACER" , Price:"$20_$50"},
  { id: 6, name: 'NVIDIA GeForce RTX 4060' ,picture:PICTURE.laptop , ProductCategory:"graphicsCards" , GPU:"GTX4060" , Manufacturer:"ACER" , Price:"$20_$50"},
   ]

   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
 
   const filteredItems = productCategory.filter((item) =>
   item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
   (
     Object.values(categoryFilters).every((filter) => !filter) ||
     categoryFilters[item.ProductCategory] ||
     categoryFilters[item.GPU] ||
     categoryFilters[item.Manufacturer] ||
     categoryFilters[item.Price]
   )
 );
 
 

  const currentItems = filteredItems.slice(startIndex, endIndex);


  useEffect(() => {
    // Update filteredItems when searchItem or categoryFilters change
    setSearchTerm(searchItem);
    setCurrentPage(1); // Reset current page to 1 when search or filters change
  }, [searchItem, categoryFilters]);
  

   const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  
  return (
   
    <div >
      <div>
              {currentItems.map((item) => (
        <div
          key={item.id}
          className={`${
            isGridView ? "load-more-container-column" : "load-more-product"
          }`}
        >
          <div className="call-out search-label">Featured</div>
          <div ref={productRefs.container} id="product-container">
            <div
              className={`${
                isGridView ? "load-more-column" : "product-container"
              }`}
              ref={productRefs.item}
              id="product-item"
            >
              <div className="img-col-lg" ref={productRefs.picture}>
                <img
                  src={item.picture}
                  alt=""
                  className={`${
                    isGridView ? "load-more-img-lg" : "img-lg"
                  }`}
                  id="product-img"
                />
              </div>
              <div
                className={`${
                  isGridView ? "load-more-column-product" : "detail-col"
                }`}
                ref={productRefs.detail}
                id="product-detail"
              >
                <h2 className="product-name">{item.name}</h2>
                <div className="specs-contain">
                <ul>
                  <li>
                    <div className="specs p-medium">
                      Boost Clock Speed: 2.52 GHz
                    </div>
                  </li>
                  <li>
                    <div className="specs p-medium">GPU Memory Size: 24 GB</div>
                  </li>
                  <li>
                    <div className="specs p-medium">Cooling System: Fan</div>
                  </li>
                </ul>
                <span className="bundle-icon">Special Offer</span>
              </div>
              </div>
              <div
                className={`${
                  isGridView ? "load-more-column-buy" : "buy-col-lg"
                }`}
              >
                <div className="price">
                  $12,199<span className="decimal">00</span>
                </div>
                <div className="buy-link">
                  <a
                    href="/Products"
                    className="link-btn featured-buy-link brand-green"
                  >
                    Add to Cart
                  </a>
                </div>
                <div className="buy-bfp">
                  <button className="buy-from-partner featured-buy-link no-brand">
                    Buy from Partners
                  </button>
                </div>
                <div>
                  <button className="featured-buy-link compare link-regular">
                    Compare
                  </button>
                </div>
              </div>
            </div>
          </div>
       
        </div>
          ))}
      </div>
        {/* <div
        className={`${
          isGridView ?  "load-more-container-column" : "load-more-product"
        }` }
      >
           <div class="call-out search-label">
                                    Featured
                                </div>
        <div ref={productRefs.container} id="product-container">
          <div
        
            className={`${
                isGridView ?  "load-more-column" : "product-container"
              }`}
            
            ref={productRefs.item}
            id="product-item"
          >
            <div className="img-col-lg" ref={productRefs.picture}>
              <img
                src={PICTURE.laptop}
                alt=""
                className={` ${
                  isGridView ? "load-more-img-lg" : "img-lg"
                }`}
                id="product-img"
              />
            </div>
            <div
              className={`${
                isGridView ? "load-more-column-product" : "detail-col"
              }`}
              ref={productRefs.detail}
              id="product-detail"
            >
              <h2 className="product-name">
                Viewsonic VA2432-H-W 24" IPS 100Hz Thin Bezel Monitor.
              </h2>
              <div className="specs-contain">
                <ul>
                  <li>
                    <div className="specs p-medium">SuperClear® IPS Panel</div>
                  </li>
                  <li>
                    <div className="specs p-medium">
                      Full HD 1080p Resolution
                    </div>
                  </li>
                  <li>
                    <div className="specs p-medium">
                      Scanning Frequency of 100Hz combined with AMD FreeSync™
                    </div>
                  </li>
                  <li>
                    <div className="specs p-medium">
                      1ms (MPRT) Response Time
                    </div>
                  </li>
                  <li>
                    <div className="specs p-medium">
                      Integrated Blue Light Filter
                    </div>
                  </li>
                </ul>
                <span className="bundle-icon">Special Offer</span>
              </div>
            </div>
            <div  className={`${
                isGridView ? "load-more-column-buy": "buy-col-lg"
              }`}>

          
              <div className="price">
                $12,199
                <span className="decimal">00</span>
              </div>
              <div className="buy-link">
                <a href="/Products" className="link-btn featured-buy-link brand-green" >
                  Add to Cart
                 
                </a>
              </div>
              <div className="buy-bfp">
                <button className="buy-from-partner featured-buy-link no-brand">
                  Buy from Partners
                </button>
              </div>
              <div>
                <button className="featured-buy-link compare link-regular">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>  */}
      {/* <div
        className={`${
          isGridView ? "load-more-container-column" : "load-more-product"
        }`}
      >
           <div class="call-out search-label">
                                    Featured
                                </div>
        <div ref={productRefs.container} id="product-container">
          <div
            className={`${
                isGridView ?  "load-more-column" : "product-container"
              }`}
            ref={productRefs.item}
            id="product-item"
          >
            <div className="img-col-lg" ref={productRefs.picture}>
              <img
                src={PICTURE.GeForce_RTX4090}
                alt=""
                className={` ${
                  isGridView ? "load-more-img-lg" : "img-lg"
                }`}
                id="product-img"
              />
            </div>
            <div
             className={`${
                isGridView ? "load-more-column-product": "detail-col" 
              }`}
              ref={productRefs.detail}
              id="product-detail"
            >
              <h2 className="product-name">
                Viewsonic VA2432-H-W 24" IPS 100Hz Thin Bezel Monitor.{" "}
              </h2>
              <div className="specs-contain">
                <ul>
                  <li>
                    <div className="specs p-medium">
                      Boost Clock Speed: 2.52 GHz
                    </div>
                  </li>
                  <li>
                    <div className="specs p-medium">GPU Memory Size: 24 GB</div>
                  </li>
                  <li>
                    <div className="specs p-medium">Cooling System: Fan</div>
                  </li>
                </ul>
                <span className="bundle-icon">Special Offer</span>
              </div>
            </div>
            <div  className={`${
                isGridView ?  "load-more-column-buy": "buy-col-lg"
              }`}>
              <div className="price">
                $3,199
                <span className="decimal">00</span>
              </div>
              <div className="buy-link">
                <a href="/Products_gtx_4090" className="link-btn featured-buy-link brand-green" >
                  Add to Cart
                  
                </a>
              </div>
              <div className="buy-bfp">
                <button className="buy-from-partner featured-buy-link no-brand">
                  Buy from Partners
                </button>
              </div>
              <div>
                <button className="featured-buy-link compare link-regular">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isGridView ? "load-more-container-column" :  "load-more-product"
        }`}
      >
           <div class="call-out search-label">
                                    Featured
                                </div>
        <div ref={productRefs.container} id="product-container">
          <div
            className={`${
                isGridView ?  "load-more-column" : "product-container"
              }`}
            ref={productRefs.item}
            id="product-item"
          >
            <div className="img-col-lg" ref={productRefs.picture}>
              <img
                src={PICTURE.GeForce_RTX4080}
                alt="GeForce-RTX4080-Back.png"
                className={`
                ${
                  isGridView ? "load-more-img-lg" :  "img-lg"
                }`}
                id="product-img"
              />
            </div>
            <div
             className={`${
                isGridView ? "load-more-column-product":  "detail-col"
              }`}
              ref={productRefs.detail}
              id="product-detail"
            >
              <h2 className="product-name">
                Viewsonic VA2432-H-W 24" IPS 100Hz Thin Bezel Monitor.{" "}
              </h2>
              <div className="specs-contain">
                <ul>
                  <li>
                    <div className="specs p-medium">
                      Boost Clock Speed:2.52GHz
                    </div>
                  </li>
                  <li>
                    <div className="specs p-medium">GPU Memory Size: 20 GB</div>
                  </li>
                  <li>
                    <div className="specs p-medium">Cooling System: Fan</div>
                  </li>
                </ul>
                <span className="bundle-icon">Special Offer</span>
              </div>
            </div>
            <div  className={`${
                isGridView ?  "load-more-column-buy": "buy-col-lg"
              }`}>
              <div className="price">
                $1,199
                <span className="decimal">00</span>
              </div>
              <div className="buy-link">
                <a href="/Products_gtx_4080" className="link-btn featured-buy-link brand-green" >
                  Add to Cart
                 
                </a>
              </div>
              <div className="buy-bfp">
                <button className="buy-from-partner featured-buy-link no-brand">
                  Buy from Partners
                </button>
              </div>
              <div>
                <button className="featured-buy-link compare link-regular">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* <div>
        {Array.from({ length: Math.ceil(productCategory.length / itemsPerPage) }).map(
          (_, index) => (
            <button key={index} onClick={() => goToPage(index + 1)} className="pagination_button">
              {index + 1}
            </button>
          )
        )}
      </div> */}
   <ReactPaginate
        pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination custom-pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        activeClassName={"active"}
        previousClassName={"page-item"}
        previousLinkClassName={"prev-next-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"prev-next-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        forcePage={0}
      />

   
    </div>
  );
};

export default Shop_Fake;
