

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

function StationInfomation(props) {

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

    const test_utility = [
        {id:"0",name:"ห้องน้ำ"},
        {id:"1",name:"ห้องน้ำ1"}, 
        {id:"2",name:"ห้องน้ำ2"},        
    ]

    const test_security = [
        {id:"0",name:"กล้องวงจรปิด"},
        {id:"1",name:"ยาม"}, 
                
    ]

  return (

    <div >
        

         <Grid container columns={16} columnSpacing={2} rowSpacing={2}>

            <Grid item xs={8} md={8}>
                <Item style={{ textAlign: 'left'}}>
                    <div style={{fontSize: '40px', color:'#000000'} }>
                    สถานีชาร์จของคุณ</div>

                    <div style={{fontSize: '30px', color:'#000000'}} >ชื่อสถานนี</div>
                    <div style={{fontSize: '26px', color:'#000000'}} >หัวปลั้ก</div>


                    {/* <div style={{ height: 400, width: '100%', justifyContent: 'center'} }>
                    <DataGrid
                        rows={data} 
                        columns={columns}
                        rowHeight={150}
                    />
                    </div> */}
                    <div style={{display:'flex', flexDirection:'column'}}>
                        
                        {   

                            data.map( item => (
                                
                                <div key={item.id} style={{display:'flex', flexDirection:'row', alignItems:'center' , paddingTop:10 , paddingBottom:10}}> 
                                    <img src ={item.ChargeTypePicture} width="10%" height="10%" />
                                    <div style={{paddingLeft:10, fontSize:'20px' , color:'black'}}>{item.ChargeTypeName}</div>
                                    <div style={{paddingLeft:10, fontSize:'20px' , color:'black'}}>จำนวน 3 ช่องชาร์จ</div>
                                    <div style={{paddingLeft:10, fontSize:'20px' , color:'black'}}>ราคา xxx บาท</div>
                                </div>
                            ))
                        }
                    </div>
                    
                    <div style={{ color:'#000000',fontSize: '20px',paddingTop:10 , paddingBottom:10}}>ราคาค่าสถานที่ 0 บาท</div>

                    <div style={{ color:'#000000',fontSize: '26px'}}>
                    
                        <div>ประเภทสถานที่ตั้ง</div>
                        {
                            <div style={{fontSize: '20px',paddingTop:10 , paddingBottom:10}}> หมู่บ้าน</div>
                        }
                        
                        <div>เบอร์โทรติดต่อสถานที่ {"xxx-xxxxxxx"}</div>
                        
                        <div>เวลาเปิดทำการ {"XX:XX"}น. ถึง {"XX:XX"}น.</div>

                        <div>สิ่งอำนวยความสะดวก</div>

                        <div style={{ paddingTop:10 , paddingBottom:10}}>
                            {
                                test_utility.map(item => (
                                    <div key={item.id} style={{ color:'#000000',fontSize: '20px'}}>
                                        {item.name}
                                    </div>
                                ))
                            }
                        </div>

                        <div>ความปลอดภัย</div>

                        <div style={{ paddingTop:10 , paddingBottom:10}}>
                            {
                                test_security.map(item => (
                                    <div key={item.id} style={{ color:'#000000',fontSize: '20px'}}>
                                        {item.name}
                                    </div>
                                ))
                            }
                        </div>

                        <div>สถานที่</div>
                        <div style={{ paddingTop:10 , paddingBottom:10, fontSize:"20px"}}>{"214/211 รัชดาพิเษก ซอย8 กรุงเทพ 20000 ประเทศไทย"}</div>
                        
                        <div>ช่องทางการชำระเงิน</div>
                        <div style={{ paddingTop:10 , paddingBottom:10, fontSize:"20px"}}>ธนาคาร {"xxxx"} หมายเลขบัญชี {"xxxx-xxxxxxxx"}</div>

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