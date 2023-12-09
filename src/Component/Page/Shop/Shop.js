import { useState } from "react";
import PICTURE from "../../Assests/PICTURE";
import "../Shop/Shop.scss";
import Shop_Fake from "./Shop_Fake";
function Shop(){
    const [isGridView, setGridView] = useState(true);
    const [searchItem, setSearchItem] = useState("");
    const [categoryFilters, setCategoryFilters] = useState({
      graphicsCards: false,
      laptops: false,
      studioLaptops: false,
      gamingDesktops: false,
      GTX4090:false,
      GTX4080: false,
      GTX4070Ti: false,
      GTX4070: false,
      GTX4060: false,
      NVIDIA:false,
      ACER:false,
      ASUS:false,
      $0_$20:false,
      $20_$50:false,
      Above$50:false,
      GTX_Titan:false,
    });






    const handleGridViewClick = () => {
      setGridView(true);
      // Additional logic or state changes for grid view
    };
  
    const handleListViewClick = () => {
      setGridView(false);
      // Additional logic or state changes for list view
    };

    //Handle Category checkbox
    const handleCategoryChange = (category) => {
      setCategoryFilters((prevFilters) => ({
        ...prevFilters,
        [category]: !prevFilters[category],
      }));
    };

    const handleResetFilters = () => {
      // Implement the logic to reset filters
      setCategoryFilters({
        graphicsCards: false,
        laptops: false,
        studioLaptops: false,
        gamingDesktops: false,
        GTX4090: false,
        GTX4080: false,
        GTX4070Ti: false,
        GTX4070: false,
        GTX4060: false,
        NVIDIA: false,
        ACER: false,
        ASUS: false,
        $0_$20: false,
        $20_$50: false,
        Above$50: false,
      });
    };



return(

<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Shop GeForce Graphics Cards, Laptops, and Systems</title>
  <div className="Shop">
  <div className="row">
    <div id="content">
      <div className="grid wide">
      <h1 className="shop-header">
        Shop GeForce Graphics Cards, Laptops, and Systems
      </h1>
      {/* <div class="container"> */}
      <div className="container">
        <form className="column grid__column-3  content-product">
          <div className="Reset-Filters">
            <input
             type="button"
             aria-label="Reset-Filters"
             className="gray-button button"
             onClick={handleResetFilters}
             defaultValue="Reset-Filters"
            />
          </div>
          <ul className="Filter-list">
            <fieldset className="filter-item">
              <div>
                <legend htmlFor="" className="filter-title">
                  Product Category
                </legend>
              </div>
              <div className="filter-content">
                <ul className="filter-values">
                <li className="filter-value">
                <div className="c-checkbox">
                  <input
                    type="checkbox"
                    className="small-button"
                    id="laptops"
                    checked={categoryFilters.laptops}
                    onChange={() => handleCategoryChange("laptops")}
                  />
                  <label htmlFor="laptops" className="c-checkbox__label">
                    <span htmlFor="">GeForce Laptops</span>
                  </label>
                </div>
              </li>
                  <li className="filter-value">
                <div className="c-checkbox">
                  <input
                    type="checkbox"
                    className="small-button"
                    id="graphicsCards"
                    checked={categoryFilters.graphicsCards}
                    onChange={() => handleCategoryChange("graphicsCards")}
                  />
                  <label htmlFor="graphicsCards" className="c-checkbox__label">
                    <span htmlFor="">Graphics Cards</span>
                  </label>
                </div>
              </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input 
                     type="checkbox"
                     className="small-button"
                     id="studioLaptops"
                     checked={categoryFilters.studioLaptops}
                     onChange={() => handleCategoryChange("studioLaptops")}
                      />
                      <label htmlFor="studioLaptops" className="c-checkbox__label">
                        <span htmlFor="">NVIDIA Studio Laptops</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input 
                          type="checkbox"
                          className="small-button"
                          id="gamingDesktops"
                          checked={categoryFilters.gamingDesktops}
                          onChange={() => handleCategoryChange("gamingDesktops")}
                      />
                      <label htmlFor="gamingDesktops" className="c-checkbox__label">
                        <span htmlFor="">Gaming Desktops</span>
                      </label>
                    </div>
                  </li>
             
                </ul>
              </div>
            </fieldset>
            <fieldset className="filter-item">
              <div>
                <legend htmlFor="" className="filter-title">
                  GPU
                </legend>
              </div>
              <div className="filter-content">
                <ul className="filter-values">
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input 
                       type="checkbox"
                       className="small-button"
                       id="GTX4090"
                       checked={categoryFilters.GTX4090}
                       onChange={() => handleCategoryChange("GTX4090")}
                      />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">RTX 4090</span>
                      </label>
                    
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input
                          type="checkbox"
                          className="small-button"
                          id="GTX4080"
                          checked={categoryFilters.GTX4080}
                          onChange={() => handleCategoryChange("GTX4080")} 
                      />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">RTX 4080</span>
                      </label>
                      {/* <span className="float-right">(22)</span> */}
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input 
                          type="checkbox"
                          className="small-button"
                          id="RTX4070Ti"
                          checked={categoryFilters.GTX4070Ti}
                          onChange={() => handleCategoryChange("RTX4070Ti")}
                      />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">RTX 4070 Ti</span>
                      </label>
                  
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input 
                        type="checkbox"
                        className="small-button"
                        id="GTX_Titan"
                        checked={categoryFilters.GTX_Titan}
                        onChange={() => handleCategoryChange("GTX_Titan")}
                      />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">GTX Titan</span>
                      </label>
             
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input 
                      type="checkbox"
                      className="small-button"
                      id="GTX4060"
                      checked={categoryFilters.GTX4060}
                      onChange={() => handleCategoryChange("GTX4060")}
                      />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">RTX 4060</span>
                      </label>
             
                    </div>
                  </li>
                </ul>
              </div>
            </fieldset>
            <fieldset className="filter-item">
              <div>
                <legend htmlFor="" className="filter-title">
                  Manufacturer
                </legend>
              </div>
              <div className="filter-content">
                <ul className="filter-values">
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input 
                       type="checkbox"
                       className="small-button"
                       id="NVIDIA"
                       checked={categoryFilters.NVIDIA}
                       onChange={() => handleCategoryChange("NVIDIA")}
                      />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">NVIDIA</span>
                      </label>
      
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input 
                        type="checkbox"
                        className="small-button"
                        id="ACER"
                        checked={categoryFilters.ACER}
                        onChange={() => handleCategoryChange("ACER")}
                      />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">ACER</span>
                      </label>
          
                    </div>
                  </li>
            
          
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input
                       type="checkbox"
                       className="small-button"
                       id="ASUS"
                       checked={categoryFilters.ASUS}
                       onChange={() => handleCategoryChange("ASUS")}
                      />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">ASUS</span>
                      </label>
                     
                    </div>
                  </li>
           
               
               
                  <li className="filter-value">
                    {/* <span className="title">Show More</span> */}
                  </li>
                </ul>
              </div>
            </fieldset>
            <fieldset className="filter-item">
              <div>
                <legend htmlFor="" className="filter-title">
                  Price
                </legend>
              </div>
              <div className="filter-content">
                <ul className="filter-values">
        
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input 
                      type="checkbox"
                      className="small-button"
                      id="$0_$20"
                      checked={categoryFilters.$0_$20}
                      onChange={() => handleCategoryChange("$0_$20")}
                      />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">$0 - $20</span>
                      </label>
    
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input 
                            type="checkbox"
                            className="small-button"
                            id="$20_$50"
                            checked={categoryFilters.$20_$50}
                            onChange={() => handleCategoryChange("$20_$50")}
                      />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">$20 - $50</span>
                      </label>
    
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input
                          type="checkbox"
                          className="small-button"
                          id="Above$50"
                          checked={categoryFilters.Above$50}
                          onChange={() => handleCategoryChange("Above$50")}
                      />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">Above $50</span>
                      </label>
                    </div>
                  </li>
              
                  <li className="filter-value">
                    {/* <span className="title">Show More</span> */}
                  </li>
                </ul>
              </div>
            </fieldset>
          </ul>
        </form>
        <div className="column grid__column-10">
          <div className="main-container">
            <div className="form-row">
            <div className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Example: Geforce RTX"
          spellCheck="false" 
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
                <button type="submit" className="submit-button">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </div>
              {/* <div className="bounding-box">
                <div className="sort-section">
                  <label htmlFor="" className="sort-label">
                    Sort by:
                  </label>
                  <div className="dropdown">
                    <div className="select-btn">
                      <span className="span-content">Featured Products</span>
                      <span className="span-button">
                        <i />
                      </span>
                    </div>
                  </div>
                </div>
          <GridViewToggleButton
           isGridView={isGridView}
           handleGridViewClick={handleGridViewClick}
           searchItem={searchItem}
          />
              </div> */}
              <div className="total-product-list">
                {/* <div className="total-product">221 results found</div> */}
              </div>
              <div className="featured-container">
                <div className="call-out search-label">New Product</div>
                <div className="product-main-container">
                  <div className="img-col-lg">
                    <div className="img-lg">
                      <img  src={PICTURE.GeForce_RTX4080} alt="" />
                    </div>
                  </div>
                  <div className="detail-main-col">
                    <h2 className="product-name">NVIDIA GeForce RTX 4080</h2>
                    <div className="specs-contain">
                      <ul>
                        <li>
                          <div className="specs p-medium">
                            Cooling System: Fan
                          </div>
                        </li>
                        <li>
                          <div className="specs p-medium">
                            Boost Clock Speed:2.52GHz
                          </div>
                        </li>
                        <li>
                          <div className="specs p-medium">
                            Cooling System: Fan
                          </div>
                        </li>
                      </ul>
            
                    </div>
                  </div>
                  <div className="buy-main-col-lg">
                    <div className="price">
                    $17.899
                      <span className="decimal">00</span>
                    </div>
                    <div className="buy-link">
                      <a
                        href="/websiteDoAn/Products_gtx_4090"
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
   
              <Shop_Fake 
              isGridView={isGridView} 
              searchItem={searchItem}   
              categoryFilters={categoryFilters}/>
            </div>
          </div>
        </div>
      </div>
   
    <footer id="footer">
      <div className="footer-wrapper">
        <div className="left-link">
          <div className="footer-item country-link">
            <a href="">USA - United States</a>{" "}
          </div>
          <div className="footer-item">
            {" "}
            <a href="">Privacy</a>
          </div>
          <div className="footer-item">
            <a href="">Legal</a>
          </div>
          <div className="footer-item">
            <a href="">Contact</a>
          </div>
        </div>
        {/* <div className="right-link">
          <button className="compare-btn">Compare 4/4</button>
        </div> */}
      </div>
    </footer>
  </div>
  </div>
  </div>
  </div>
  {/*  */}
</>

)
}

export default Shop;