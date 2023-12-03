import "./newProduct.css"

const NewProduct = () => {
  return (
    <div className="newProduct">
        <h1 className="newProductTitle">New Product</h1>
        <span className="newProductImage">Image</span>
        <div className="newProductImageFile">
            <button className="newProductFileButton">Choose File</button>
            <span>No file chosen</span>
        </div>
        <div className="newProductItem">
            <span className="newProductItemName">Name</span>
            <input type="text" className="newProductInput" placeholder="Product Name" />
        </div>
        <div className="newProductItem">
            <span className="newProductItemName">Stock</span>
            <input type="text" className="newProductInput" placeholder="Stock" />
        </div>
        <div className="newProductItem">
            <span className="newProductItemName">Active</span>
            <select name="" id="" className="newProductInput">
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>
        <button className="newProductButton">Create</button>
    </div>
  )
}

export default NewProduct