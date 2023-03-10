

import React from 'react';
import Grid from '@mui/material/Grid';
import { useState,useEffect } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { fontSize } from '@mui/system';

import noimage from '../../Logo/Noimage.png'
import logo from '../../Logo/PlugmoodLOGO.png'

import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflowY: 'hidden',
  }));

  const columns= [
    // { field: 'id', headerName: 'ID', width: 70 ,headerAlign: 'center', align:'center', menubar:'disable'},
    { field: 'ChargeTypePicture', headerName: '1', width: 150 ,renderCell: (params) => <img src={params.value} /> , menubar:'disable'},
    { field: 'ChargeTypeName', headerName: '2', width: 150 , menubar:'disable'},
  ];

    // const rows = [
    //         { id:"1",ChargeTypePicture: "test1", ChargeTypeName: 'test2'},
    // ];

function StationInfomation() {

    const [data, setData] = useState([]);
    const {userid,stationID} = useParams()
    console.log(userid)
    console.log(stationID)
    

    useEffect(() => {
        // axios.get('http://localhost:5000/api/GetStationInfo?userid='+userid ,
        axios.get('http://localhost:5000/api/GetStationInfo?userid='+userid +"&stationID="+stationID,            
        )
        .then(respone => {
            setData(respone.data.results)
        })
      },[])

      console.log(data)

  return (

    

    <div >
        

         <Grid container columns={16} columnSpacing={2} rowSpacing={2}>

            <Grid item xs={8} md={8}>
                <Item style={{ textAlign: 'left'}}>
                    <div style={{fontSize: '40px', color:'#000000'} }>
                    สถานีชาร์จของคุณ</div>

                    <div style={{fontSize: '30px', color:'#000000'}} >ชื่อสถานนี</div>
                    <div style={{fontSize: '26px', color:'#000000'}} >หัวปลั้ก</div>


                    <div style={{ height: 400, width: '100%', justifyContent: 'center'} }>
                    <DataGrid
                        rows={data} 
                        columns={columns}
                        rowHeight={150}
                        
                    />
                    </div>
                    
                    <div style={{ color:'#000000'}}>

                    <div style={{fontSize: '26px'}} >ประเภทสถานที่ตั้ง</div>
                    <div style={{fontSize: '26px'}} >เบอร์โทรติดต่อ</div>
                    <div style={{fontSize: '26px'}} >เวลาเปิดทำการ</div>
                    <div style={{fontSize: '26px'}} >สิ่งอำนวยความสะดวก</div>
                    <div style={{fontSize: '26px'}} >ความปลอดภัย</div>
                    <div style={{fontSize: '26px'}} >สถานที่</div>
                    <div style={{fontSize: '26px'}} >ช่องทางการชำระเงิน</div>

                    </div>

                    

                    
  
                </Item>


            </Grid>

           

            {/* <Grid  item xs={4} md={4}>
                
            <Item >
                <div>
                    <a href={logo} > <img src={logo} alt={noimage} width="100%" height="100%"/> </a>
                </div>
            </Item>
                
            </Grid>

            <Grid  item xs={4} md={4}>

            <Item >
            <div>
                    <img src={logo} alt={noimage} width="40%" height="40%"/>
                </div>
            </Item>

            <Item >
            <div>
                    <img src={logo} alt={noimage} width="40%" height="40%"/>
                </div>
            </Item>

            <Item >
            <div>
                    <img src={logo} alt={noimage} width="40%" height="40%"/>
                </div>
            </Item>

            <Item >
            <div>
                    <img src={noimage} alt={noimage} width="40%" height="40%"/>
                </div>
            </Item>
            
            </Grid> */}

            <Grid  item xs={4} md={4}>
                <Item >
                    <div>
                        <a href={logo} > <img src={logo} alt={noimage} width="100%" height="100%"/> </a>
                    </div>
                </Item>

                <Item >
                    <div>
                        <a href={logo} > <img src={logo} alt={noimage} width="100%" height="100%"/> </a>
                    </div>
                </Item>

                <Item >
                    <div>
                        <a href={logo} > <img src={logo} alt={noimage} width="100%" height="100%"/> </a>
                    </div>
                </Item>
            </Grid>

            <Grid  item xs={4} md={4}>
                <Item >
                    <div>
                        <a href={logo} > <img src={logo} alt={noimage} width="100%" height="100%"/> </a>
                    </div>
                </Item>

                <Item >
                    <div>
                        <a href={logo} > <img src={logo} alt={noimage} width="100%" height="100%"/> </a>
                    </div>
                </Item>
            </Grid>

           


        </Grid> 
        
    </div>
  );
}



export default StationInfomation;