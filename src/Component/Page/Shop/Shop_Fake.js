import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import PICTURE from "../../Assests/PICTURE";
import "../Shop/Shop.scss";

const Shop_Fake = ({ isGridView, searchItem, categoryFilters }) => {
  const card_gtx_4080 = "card_gtx_4080";
  const card_gtx_4090 = "card_gtx_4090";
  const laptop = "laptop";
  console.log(categoryFilters + "this is it");
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

  const productCategory = [
    {
      id: 1,
      name: 'Screen Viewsonic VA2432-H-W 24" IPS 100Hz viền mỏng',
      picture: PICTURE.laptop,
      ProductCategory: "laptops",
      Manufacturer: "NVIDIA",
      Price: "$0_$20",
      Line1: "GPU: GeForce RTX 4070 Laptop GPU",
      Line2: "Memory: 16 GB DDR5-SDRAM",
      Line3: "Storage: 1 TB SSD",
      Line4: "CPU: Intel Core i9-13980HX",
      Link:"/websiteDoAn/Products",
      Pricey:"$16.199"
    },
    {
      id: 2,
      name: "NVIDIA GeForce RTX 4090",
      picture: PICTURE.GeForce_RTX4090,
      ProductCategory: "graphicsCards",
      GPU: "GTX4090",
      Manufacturer: "ASUS",
      Price: "$0_$20",
      Line1: "Boost Clock Speed: 2.52 GHz",
      Line2: "GPU Memory Size: 24 GB",
      Line3: "Cooling System: Fan",
      Link:"/websiteDoAn/Products_gtx_4090",
      Pricey:"$18.199"
    },
    {
      id: 3,
      name: "NVIDIA GeForce RTX 4080",
      picture: PICTURE.GeForce_RTX4080,
      ProductCategory: "graphicsCards",
      GPU: "GTX4080",
      Manufacturer: "ACER",
      Price: "$0_$20",
      Line1: "Boost Clock Speed: 2535 MHz",
      Line2: "GPU Memory Size: 16 GB",
      Line3: "Cooling System: Active",
      Link:"/websiteDoAn/Products_gtx_4080",
      Pricey:"$17.899"
    },
    {
      id: 4,
      name: "NVIDIA GeForce RTX 4070Ti",
      picture: PICTURE.GeForce_RTX4070Ti,
      ProductCategory: "graphicsCards",
      GPU: "GTX4070Ti",
      Manufacturer: "NVIDIA",
      Price: "$20_$50",
      Line1: "Boost Clock Speed: 2670 MHz",
      Line2: "GPU Memory Size: 12GB",
      Line3: "Cooling System: Active",
      Link:"/websiteDoAn/Products_gtx_4070Ti",
      Pricey:"$17.199"
    },
    {
      id: 5,
      name: "NVIDIA GeForce RTX TiTan",
      picture: PICTURE.nvidia_titan_rtx,
      ProductCategory: "graphicsCards",
      GPU: "GTX_Titan",
      Manufacturer: "NVIDIA",
      Price: "Above$50",
      Line1: "Boost Clock Speed: 3770 MHz",
      Line2: "GPU Memory Size: 24GB",
      Line3: "Cooling System: Advance",
      Link:"/websiteDoAn/Products_gtx_Titan",
      Pricey:"$152.199"
    },
    {
      id: 6,
      name: "NVIDIA GeForce RTX 4060",
      picture: PICTURE.GeForce_RTX4060,
      ProductCategory: "graphicsCards",
      GPU: "GTX4060",
      Manufacturer: "NVIDIA",
      Price: "$0_$20",
      Line1: "Boost Clock Speed: 2.54 GHz",
      Line2: "GPU Memory Size: 8 GB",
      Line3: "Cooling System: Fan",
      Link:"/websiteDoAn/Products_gtx_4060",
      Pricey:"$15.199"
    },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredItems = productCategory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (Object.values(categoryFilters).every((filter) => !filter) ||
        categoryFilters[item.ProductCategory] ||
        categoryFilters[item.GPU] ||
        categoryFilters[item.Manufacturer] ||
        categoryFilters[item.Price])
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
    <div>
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
                    className={`${isGridView ? "load-more-img-lg" : "img-lg"}`}
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
                        <div className="specs p-medium">{item.Line1}</div>
                      </li>
                      <li>
                        <div className="specs p-medium">{item.Line2}</div>
                      </li>
                      <li>
                        <div className="specs p-medium">{item.Line3}</div>
                      </li>

                      {item.Line4 && (
                        <li>
                          <div className="specs p-medium">{item.Line4}</div>
                        </li>
                      )}
                    </ul>
                    {/* <span className="bundle-icon" style={{margin:5 , display:"inline-flex" , alignItems:"center" , justifyContent:"flex-start" ,left:0}}><span ><AiOutlineGift size={30}/></span>Special Offer</span> */}
                  </div>
                </div>
                <div
                  className={`${
                    isGridView ? "load-more-column-buy" : "buy-col-lg"
                  }`}
                >
                  <div className="price">
                    {item.Pricey}<span className="decimal">00</span>
                  </div>
                  <div className="buy-link">
                    <a
                      href={item.Link}
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
