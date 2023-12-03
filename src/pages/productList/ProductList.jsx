import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import {Delete} from '@mui/icons-material';
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const[data,setData]=useState(productRows);

    const handleDelete =(id)=> {
        setData(data.filter((item) => item.id !== id));
    };
  const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'product', headerName: 'Product', width: 200 },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 150,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell:(params)=>{
            return(
                <>
                <Link to={"/product/"+params.row.id}>
                <button className="productListEdit">Edit</button>
                </Link>
                <Delete className="productListDelete" onClick={()=>handleDelete(params.row.id)} />
                </>
            )
        }
      },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={data} disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList