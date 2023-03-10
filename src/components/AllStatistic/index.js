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
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'

import axios from 'axios';

export default function AllStatistic() {

    const userid = 3

    const [stationID, setstationID] = useState("");
    const [ChooseMonth, setChooseMonth] = useState("");
    const [ChooseYear, setChooseYear] = useState("");
    const [Allstation, setAllstation] = useState([]);
    

    const handleChangeStation = (e) => {
        console.log(stationID);
        setstationID(e.target.value);
    };

    const handleChangeYear = (e) => {
        console.log(ChooseYear);
        setChooseYear(e.target.value);
    };

    const handleChangeMonth = (e) => {
        console.log(ChooseMonth);
        setChooseMonth(e.target.value);
    };

    useEffect(() => {
        
        axios.get('http://localhost:5000/api/GetAllStation?userid='+userid,             ///////// ใช้ได้อยู่
        )
        .then(respone => {
            setAllstation(respone.data.results)
            console.log("use Effect 1 Called");
            
        })
      },[])

    console.log(Allstation);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        color: '#000000',
        overflowX : 'auto'
    }));

    const num = 70

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
            <div style={{display:'flex', flexDirection:'column'}}>

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
                        onChange={handleChangeStation}
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
                    
                    <div className='flex items-center' style={{fontSize: '20px', color: '#000000' , justifyContent:'left'} }>
                        <div>
                            เลือกปี
                        </div>
                    </div>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-filled-label">เลือกสถานี</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={ChooseYear}
                        onChange={handleChangeYear}
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
                    
                    <div className='flex items-center' style={{fontSize: '20px', color: '#000000' , justifyContent:'left'} }>
                        <div>
                            เลือกเดือน
                        </div>
                    </div>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-filled-label">เลือกสถานี</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={ChooseMonth}
                        onChange={handleChangeMonth}
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

                    </div>
                    

                </Item>
            </Grid>
            
            <Grid item xs = {8}>
                <Item>
                <div  style={{display: 'flex' , flexDirection: 'column', justifyContent:'center', textAlign: 'left'}}>
                            <div className="flex items-center"style={{display: 'flex' , flexDirection: 'row'}}>
                                <div style={{fontSize:50}}><BsCurrencyBitcoin/></div>
                                <div style={{fontSize:50 , fontWeight: 500}}>10268.00</div>
                            </div>
                            <div style={{}}>รายได้รวม</div>

                            <div className="flex items-center"style={{display: 'flex' , flexDirection: 'row'}}>
                                <div style={{fontSize:50}}><FaUserFriends/></div>
                                <div style={{fontSize:50, fontWeight: 500}}>1000</div>
                            </div>
                            <div style={{}}>จำนวนยอดผู้ใช้</div>
                        </div>
                </Item>
            </Grid>
            
            <Grid item xs = {8}>
                <Item>
                <div style={{display: 'flex' , flexDirection: 'column', justifyContent:'center', textAlign: 'left'}}>
                            <div>รายได้เฉลี่ย</div>
                            <div className="flex items-center"style={{display: 'flex' , flexDirection: 'row'}}>
                                <div style={{fontSize:50}}><BsCurrencyBitcoin/></div>
                                <div style={{ fontSize:50,fontWeight: 500}}>{num} / เดือน</div>
                                <div style={{ fontSize:50,fontWeight: 500}}> </div>
                            </div>
                            
                            <div>จำนวนผู้ใช้เพิ่มขึ้นจากปีที่แล้ว</div>
                            <div className="flex items-center"style={{display: 'flex' , flexDirection: 'row'}}>
                                <div style={{fontSize:50}}><FaUserFriends/></div>
                                <div style={{fontSize:50,fontWeight: 500}}>100</div>
                                <div style={{fontSize:50}}> คน </div>
                            </div>
                            
                        </div>
                </Item>
            </Grid>

            <Grid item xs = {8}>
                <Item>
                            <div> Graph 1 is Here</div>
                </Item>
            </Grid>

            <Grid item xs = {8}>
                <Item>
                            <div> Graph 2 is Here</div>
                </Item>
            </Grid>

        </Grid>
        
        
            {/* <div style={{paddingTop:20 }}>
                <div style={{display: 'flex' , flexDirection: 'row', justifyContent:'center'}}>
                    <div className="col-span-6 w-screen truncate">
                        <div  style={{display: 'flex' , flexDirection: 'column', justifyContent:'center'}}>
                            <div className="flex items-center"style={{display: 'flex' , flexDirection: 'row'}}>
                                <div style={{fontSize:50}}><BsCurrencyBitcoin/></div>
                                <div style={{fontSize:50 , fontWeight: 500}}>10268.00</div>
                            </div>
                            <div style={{paddingLeft: 30}}>รายได้รวม</div>

                            <div className="flex items-center"style={{display: 'flex' , flexDirection: 'row'}}>
                                <div style={{fontSize:50}}><FaUserFriends/></div>
                                <div style={{fontSize:50, fontWeight: 500}}>1000</div>
                            </div>
                            <div style={{paddingLeft: 30}}>จำนวนยอดผู้ใช้</div>
                        </div>
                    </div>

                    <div className="col-span-6 w-screen">
                        <div style={{display: 'flex' , flexDirection: 'column', paddingLeft:20, justifyContent:'center'}}>
                            <div>รายได้เฉลี่ย</div>
                            <div className="flex items-center"style={{display: 'flex' , flexDirection: 'row'}}>
                                <div style={{}}><BsCurrencyBitcoin/></div>
                                <div style={{ fontWeight: 500}}>855.67</div>
                                <div> / เดือน</div>
                            </div>
                            
                            <div>จำนวนผู้ใช้เพิ่มขึ้นจากปีที่แล้ว</div>
                            <div className="flex items-center"style={{display: 'flex' , flexDirection: 'row'}}>
                                <div style={{}}><FaUserFriends/></div>
                                <div style={{fontWeight: 500}}>100</div>
                                <div> คน </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> */}
        

    </div>
        
    );

}