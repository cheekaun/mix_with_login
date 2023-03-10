import React from "react";
import { Grid, Menu } from '@mui/material';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import { MdAccessTime } from 'react-icons/md'
import { useState,useEffect } from 'react';

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Maximize } from "@mui/icons-material";

import axios from 'axios';
import Rating from '@mui/material/Rating';
import { Avatar } from '@mui/material';

export default function UsageHistory (){


    const userid = 3

    const [stationID, setstationID] = useState("");
    const [Allstation, setAllstation] = useState([]);
    const [ReviewData, setReviewData] = useState([]);


    const handleChange = (e) => {
        console.log(stationID);
        setstationID(e.target.value);
        console.log("onChange Called");
    };

    useEffect(() => {
        
        axios.get('http://localhost:5000/api/GetAllStation?userid='+userid, 
        )
        .then(respone => {
            setAllstation(respone.data.results)
            
        })
      },[])

      console.log(Allstation);


    useEffect(() => {
        
        
        axios.get('http://localhost:5000/api/ChooseStationReview?userid='+userid +"&stationID="+stationID,
        )
        .then(respone => {
            setReviewData(respone.data.results)
        })
      },[stationID])

      console.log(ReviewData);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


    return(
    <div>
        <Grid container rowSpacing={1} columnSpacing={2} columns={16}>

            <Grid item xs={16}>
                
                <Item style={{ textAlign: 'left'}}>
                    <div className='flex items-center' style={{fontSize: '50px', color: '#000000' , justifyContent:'left'} }>
                    <div>
                        <MdAccessTime />
                    </div>
                    
                    <div>
                        ประวัติการเข้าใช้งาน
                    </div>
                    
                    </div>
                    
                    <NavLink to={"/history/UseHistory"} >
                        <Button variant="contained" color="secondary" size="large">การใช้งาน</Button>
                    </NavLink>
                    
                    <NavLink to={"/history"} >
                        <Button variant="contained" color="secondary" size="large">รายได้ที่ได้รับ</Button>
                    </NavLink>

                    <NavLink to={"/history/UserReview"} >
                        <Button variant="contained" color="secondary" size="large">รีวิว</Button>
                    </NavLink>

                    
                </Item>

                
            </Grid>

            <Grid item xs={16}>
                <Item style={{ textAlign: 'left'}}>
                    <div className='flex items-center' style={{fontSize: '20px', color: '#000000' , justifyContent:'left'} }>
                        <div>
                            เลือกสถานีชาร์จของคุณ
                        </div>
                    </div>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-filled-label">เลือกสถานี</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={stationID}
                        onChange={handleChange}
                        
                        >
                        

                            <MenuItem value="">
                                <em>ทุกสถานี</em>
                            </MenuItem>
                            
                            {
                                Allstation.map (content =>(
                                    
                                    <MenuItem value={content.id} key={content.id} > {content.stationName}</MenuItem>
                                    
                                ))
                            }
                  

                        </Select>

                    </FormControl>

                </Item>

            </Grid>

            
            {/* <Grid item xs={15} style={{overflowY:'scroll'}}>
                {
                    ReviewData.map((item, index) => {
                        
                                return(
                                    
                                        
                                            <Item xs={5}>
                                        <div key={index}>
                                            <div style={{display:'flex' , flexDirection:'row'}}>
                                                <div style={{fontSize: '20px', color: '#000000' , justifyContent:'left',textAlign: 'left',} }>
                                                <div>{item.id}</div>
                                                <div>{item.reviewer_name}</div>
                                                <div>{item.score}</div>
                                                <Rating value={item.score} precision={0.5} readOnly />
                                                <div>{item.comment}</div>
                                                <div>{item.date_time}</div>
                                                <div>================================</div>
                                                </div>
                                            </div>
                                        </div>
                                            </Item>
                                        
                                        
                                    
                                )      
                    })
                }
            </Grid> */}

        </Grid>
        
        <div style={{paddingTop:10 , height:500}}>
            <div style={{display:'flex', flexDirection:'column', padding:10, overflowY:'scroll',height:700}}>
                    <div style={{fontSize: '20px'}}>คะแนนรีวิว</div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <Rating value={3.5} precision={0.5} sx={{'& .MuiRating-iconFilled': {color: '#9D4EDD', }}} readOnly />
                        <div style={{paddingLeft:15,color: '#9D4EDD'}}> 3.5/5 </div>
                        <div style={{paddingLeft:20}}> (123 รีวิว) </div>
                    </div>
                    
                    <div style={{ height:20 }} > </div>
                    {
                        ReviewData.map((y, index) => {
                            console.log(index);
                                    return(
                                    <div key={index}>
                                    
                                        <div style={{display:'flex', flexDirection:'row'}}>
                                            
                                                <Avatar alt={y.reviewer_name} src="/static/images/avatar/1.jpg" />
                                                
                                                <div style={{display:'flex', flexDirection:'column', paddingLeft:10}}>

                                                    <div>{y.reviewer_name}</div>
                                                    <Rating value={y.score} precision={0.5} sx={{'& .MuiRating-iconFilled': {color: '#9D4EDD', }}} readOnly />
                                                    
                                                    <div>{y.comment}</div>
                                                    <div>{y.date_time}</div>
                                                    <div className="flex items-center">
                                                    </div>
                                                    
                                                <div style={{ height:20 }}> </div>
                                                </div>
                                            </div>
                                        
                                    
                                    </div>
                                    )
                        
                        })
                    } 
                    
                    </div> 
            </div>

    </div>
    );
}