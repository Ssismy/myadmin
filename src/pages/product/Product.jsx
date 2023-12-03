import { Link } from "react-router-dom"
import "./product.css";
import Chart from "../../components/chart/Chart";
import {productData} from "../../dummyData"




const Product = () => {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/new-product">
            <button className="productButton">Create</button>
            </Link>
        </div>
        <div className="productInfoTop">
          <div className="productSales">
            <Chart className="productChart" data={productData} dataKey="Sales" title="Sales Performance (last 3 months)" />
          </div>
          <div className="productInfo">
            <div className="productInfoName">
                <img src="https://i.ibb.co/VJKsQhP/taylor-8-Vt2haq8-NSQ-unsplash.jpg" alt="" className="productInfoImage" />
                <span className="productName">Meatball</span>
            </div>
            <div className="productInfoList">
                <div className="productInfoItem">
                    <span className="productNameTitle">id:</span>
                    <span className="productInfoNum">232</span>
                </div>
                <div className="productInfoItem">
                    <span className="productNameTitle">sales:</span>
                    <span className="productInfoNum">2324</span>
                </div>
                <div className="productInfoItem">
                    <span className="productNameTitle">active:</span>
                    <span className="productInfoNum">Yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productNameTitle">in stock:</span>
                    <span className="productInfoNum">No</span>
                </div>
            </div>
          </div>
        </div>
        <div className="productInfoBottom">
            <div className="editProductInfo">
            <div className="editProductItem">
                <h3 className="editProductTitle">Product Name</h3>
                <input type="text" className="editProductInput" placeholder="Product Name" />    
                </div>
                <div className="editProductItem">
                    <span className="editProductItemName">In Stock</span>
                    <select name="" id="" className="editProductInput">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>  
                <div className="editProductItem">
                    <span className="editProductItemName">Active</span>
                    <select name="" id="" className="editProductInput">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>   
            </div>
            <button className="updateProdctInfo">Update</button>
        </div>

    </div>
  )
}

export default Product