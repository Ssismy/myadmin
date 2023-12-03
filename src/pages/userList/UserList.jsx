import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import {Delete} from '@mui/icons-material';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {

    const[data,setData]=useState(userRows);

    const handleDelete =(id)=> {
        setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'userName', headerName: 'UserName', width: 200 },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
          
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 150,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={"/user/"+params.row.id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                    <Delete className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
                    </>
                )
            }
          },
      ];
      
      
  return (
    <div className='userList'>
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

export default UserList