import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import style from "./style.module.css"

const columns = [
  { field: 'nama', headerName: 'Nama', width: 200 },
  {
    field: 'tanggal',
    headerName: 'Tanggal',
    width: 150,
    editable: true,headerAlign : "center",
    align : "center"
  },
  {
    field: 'teknisi',
    headerName: 'Teknisi',
    width: 150,
    editable: true,
    headerAlign : "center",
    align : "center"
  },
  {
    field: 'jumlah',
    headerName: 'Jumlah',
    type: 'number',
    width: 110,
    editable: true,
    headerAlign : "center",
    headerAlign : "center",
    align : "center"
  },
  {
    field: 'status',
    headerName: 'Status',
    align : "center",
    headerAlign : "center",
    width: 200,
    renderCell: (params) =>{
        if (params.row.status == "Proses") {
            <p className={style.proses}>{params.row.status}</p>
        } else {
            <div style="color: rgb(5, 226, 5);
            font-weight: 700;"      className="selesai" dangerouslySetInnerHTML={{__html: params.row.status}}/>
        }

    }
    

 
  },
];

const rows = [
    {   id : 1 ,
        nama:"Copping station L1BCD",
        tanggal:"20/04/2022",
        teknisi:"BP Surabaya",
        jumlah : 8,
        status : "Proses"
    },
    {id : 2,
        nama:"Copping station L1BCD",
        tanggal:"21/04/2022",
        teknisi:"BP Surabaya",
        jumlah : 4,
        status : "Proses"
    },{id : 3,
        nama:"Baut L M4X25",
        tanggal:"22/04/2022",
        teknisi:"BP Surabaya",
        jumlah : 7,
        status : "Selesai"
    },{id : 4,
        nama:"Baut L M4X25",
        tanggal:"23/04/2022",
        teknisi:"BP Surabaya",
        jumlah : 5,
        status : "Selesai"
    },{id : 5,
        nama:"Baut L M4X25",
        tanggal:"24/04/2022",
        teknisi:"BP Surabaya",
        jumlah : 3,
        status : "Selesai"
    }
];

export default function Table() {
  return (
    <Box sx={{ height: 350, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}