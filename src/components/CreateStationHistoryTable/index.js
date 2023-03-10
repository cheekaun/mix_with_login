import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import Chip from "@mui/material/Chip";

import { useRef } from 'react';


export default function CreateStationHistoryTable (){

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  //const columns: GridColDef[] = [
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 ,headerAlign: 'center', align:'center', menubar:'disable'},
    { field: 'Name', headerName: 'ชื่อสถานนีชาร์จ', width: 200 ,headerAlign: 'center', align:'center'},
    { field: 'Status', headerName: 'สถานะ', width: 150 ,headerAlign: 'center', align:'center',
    renderCell: (params) => (
      <Chip label={params.value} style={{backgroundColor: params.value === 'รอการยืนยัน' ? ('#F8D315') : params.value === 'ไม่สำเร็จ' ? ('#FF3E3E') : ('#2BB169') , color: '#ffff'}} />
    ),
    },
    { field: 'SendDate', headerName: 'วันที่ยื่นคำร้อง', width: 200 , headerAlign: 'center', align:'center', sortable: false,},
    { field: 'UpdateDate', headerName: 'วันที่อัปเดต', width: 200 , headerAlign: 'center', align:'center',sortable: false,},
    /*{
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },*/
    /*{
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.Name || ''} ${params.row.lastName || ''}`,
    },*/
  ];
  
  const rows = [
    
   { id: '1', Name: 'สถานี Ev', Status: 'รอการยืนยัน', SendDate: '10 Jan 2565 BE 21:12', UpdateDate: ''},
   { id: '2', Name: 'Ev Center', Status: 'รอการยืนยัน', SendDate: '9 Jan 2565 BE 15:05', UpdateDate: ''},
   { id: '3', Name: 'ขับรถevชนตู้', Status: 'สำเร็จ', SendDate: '7 Jan 2565 BE 20:47', UpdateDate: '10 Jan 2565 BE 21:12'},
   { id: '4', Name: 'สถานี Ev 2', Status: 'สำเร็จ', SendDate: '11 Jan 2565 BE 21:12', UpdateDate: '10 Jan 2565 BE 21:12'},
   { id: '5', Name: 'สถานี Ev 3', Status: 'สำเร็จ', SendDate: '12 Jan 2565 BE 21:12', UpdateDate: '10 Jan 2565 BE 21:12'},
   { id: '6', Name: 'สถานี Ev 4', Status: 'ไม่สำเร็จ', SendDate: '13 Jan 2565 BE 21:12', UpdateDate: '10 Jan 2565 BE 21:12'},
   { id: '7', Name: 'สถานี Ev 5', Status: 'ไม่สำเร็จ', SendDate: '14 Jan 2565 BE 21:12', UpdateDate: '10 Jan 2565 BE 21:12'},
   
  ];

    return(
      // <Grid columns={16}>
        
      //   <div style={{fontSize: '40px', color: '#7B2CBF'} }>ยินดีต้อนรับ คุณ ...</div>
        
      //   <div style={{fontSize: '30px'} } >สถานะคำร้อง</div>
      //   <Grid itemxs={4} spacing={2}>
      //   <Button variant="contained" color="secondary" size="large">คำร้องขอลงทะเบียน</Button>
      //   <Button variant="contained" color="secondary" size="large">คำร้องขอสร้างสถานีชาร์จ</Button>
      //   </Grid>

      //   <div style={{ height: 400, width: '100%', justifyContent: 'center'} }>
      //   <DataGrid
      //     rows={rows}
      //     columns={columns}
      //     //pageSize={5}
      //     rowsPerPageOptions={[5]}
      //     //checkboxSelection
      //     isRowSelectable={(params) => false}
      //     disableColumnMenu    ///// ปืดเมนู สามจุเที่ column header                   
      //   />
      // </div>
      

      // </Grid>

      <Grid container rowSpacing={1} columnSpacing={2} columns={16}>
          {/* <Grid item xs={16} md={16}>
          <div style={{fontSize: '50px', color: '#7B2CBF'} }>ยินดีต้อนรับ คุณ ...</div>
          </Grid>

          <Grid item xs={16} md={16}>
          <div style={{fontSize: '30px'} } >สถานะคำร้อง</div>
          </Grid> */}

          <Grid item xs={16}>

          
          
          
            <Item style={{ textAlign: 'left'}}>
            <div style={{fontSize: '50px', color: '#7B2CBF'} }>ยินดีต้อนรับ คุณ ...</div>
            <div style={{fontSize: '30px'} } >สถานะคำร้อง</div>
            <div style={{ width: '100%', justifyContent: 'center'} }>
            <NavLink to={"/home/UserVerifyHistory"} >
            {/* <NavLink to={ "/list/StationInfo/"+3} > */}
            <Button variant="outlined" color="secondary" size="large">
              คำร้องขอลงทะเบียน</Button> 
            </NavLink>
            
            
            <NavLink to={"/home"} >
              <Button variant="contained" color="secondary" size="large">
              คำร้องขอสร้างสถานีชาร์จ</Button>
              </NavLink>
              </div> 
              </Item>   
                     
            
          </Grid>

          <Grid item xs={16} md={16}>
          <div style={{ height: 400, width: '100%', justifyContent: 'center'} }>
          <DataGrid
          rows={rows}
          columns={columns}
          //pageSize={5}
          rowsPerPageOptions={[5]}
          //checkboxSelection
          isRowSelectable={(params) => false}
          disableColumnMenu    ///// ปืดเมนู สามจุเที่ column header                   
            />
          </div>
          </Grid>

          


      </Grid>

    );
}




  
  