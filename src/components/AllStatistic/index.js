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
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useRef } from 'react';

import { API_Info } from "../../data/API_Info";

export default function AllStatistic(props) {

    // const userid = 3
    const userid = props.userid
    console.log(userid)

    const [stationID, setstationID] = useState("");
    const [ChooseMonth, setChooseMonth] = useState("");
    const [ChooseYear, setChooseYear] = useState("");
    
    
    const [Allstation, setAllstation] = useState([]);

    /// กรณีทำกรอกแบบแยกทุกตัวไม่ได้
    const [AllMonth, setAllMonth] = useState([]);
    const [AllYear, setAllYear] = useState([]);
    useEffect(() => {
        
        axios.get(API_Info[0].Front + API_Info[0].Middle +'/GetAllYear?userid='+userid,             
        )
        .then(respone => {
            setAllYear(respone.data.results)
            
            
        })
    },[])
    console.log(AllYear)

    useEffect(() => {
        
        axios.get(API_Info[0].Front + API_Info[0].Middle +'/GetAllMonth?userid='+userid,            
        )
        .then(respone => {
            setAllMonth(respone.data.results)
            
            
        })
    },[])
    console.log(AllMonth)
    
    const [Data, setData] = useState([]);

    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        
        axios.get(API_Info[0].Front + API_Info[0].Middle +'/MakeGraph?userid='+userid+'&stationID='+stationID+'&Year='+ChooseYear+'&Month='+ChooseMonth,
        )
        .then(respone => {
          setData(respone.data.results)
            
        })
      },[stationID,ChooseMonth,ChooseYear])
      console.log(Data);
    

    const handleChangeStation = (e) => {
        console.log(stationID);
        setstationID(e.target.value);
        if(e.target.value === ""){
            console.log("if")
            setChooseYear("")
            setChooseMonth("")
        }
    };

    const handleChangeYear = (e) => {
        console.log(ChooseYear);
        setChooseYear(e.target.value);
        if(stationID === ""){
            setChooseYear("")
        }

        if(e.target.value === ""){
            setChooseMonth("")
        }
    };

    const handleChangeMonth = (e) => {
        console.log(ChooseMonth);
        setChooseMonth(e.target.value);
        if(stationID === "" || ChooseYear===""){
            setChooseMonth("")
        }
    };

    const DefaultState = () => {
        setstationID("")
    }

    useEffect(() => {
        
        axios.get(API_Info[0].Front + API_Info[0].Middle +'/GetAllStation?userid='+userid          ///////// ใช้ได้อยู่
        )
        .then(respone => {
            setAllstation(respone.data.results)
            
        })
    },[])

    // const [Image,setImage] = useState([])
    // useEffect(() => {
        
    //     axios.get('http://localhost:5000/api/test_image',            
    //     )
    //     .then(respone => {
    //         setImage(respone)
    //     })
    // },[])
    // console.log(Image)


        const [img, setImg] = useState();

        const fetchImage = async () => {
            const res = await fetch(API_Info[0].Front + API_Info[0].Middle +'/test_image');
            const imageBlob = await res.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
        };

        useEffect(() => {
            fetchImage();
        }, []);
    
    console.log(Allstation);

    const [Statisdata,SetStatisdata] = useState([
        {
          "Sun_Income": 0,
          "Sum_user": 0,
          "count_day": 0
        }
      ])

    useEffect(() => {
        console.log()
        axios.get(API_Info[0].Front + API_Info[0].Middle +'/SumIncomeAndUser?userID='+userid+'&StationID='+stationID+'&ChooseYear='+ChooseYear,
        )
        .then(respone => {
          SetStatisdata(respone.data.results)
            
        })
      },[stationID,ChooseYear])
    console.log(Statisdata)

    useEffect(() => {
        if(Statisdata[0].Sun_Income === null || Statisdata[0].Sum_user === null || Statisdata[0].count_day === null){
            setsumincome(0)
            setsumuser(0)
            setcountday(0)
        }else{
            setsumincome(Statisdata[0].Sun_Income)
            setsumuser(Statisdata[0].Sum_user)
            setcountday(Statisdata[0].count_day)
        }
        
      },[Statisdata])

    const [sumincome,setsumincome] = useState(1)
    const [sumuser,setsumuser] = useState(1)
    const [countday,setcountday] = useState(1)
    

    // SetStatisdata( [{
    //     "Sun_Income": 2325159.78,
    //     "Sum_user": 15202,
    //     "count_day": 1461
    //   }])
   


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        color: '#000000',
        overflowX : 'auto'
    }));

    
    console.log((sumincome/countday*30).toFixed(2))
    const num = 70

    return(
        
    <div>
        
        {/* <img src={img} alt="icons" /> */}
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
                    
                    {/* {
                        stationID !== "" ? (
                    <>
                        <div className='flex items-center' style={{fontSize: '20px', color: '#000000' , justifyContent:'left'} }>
                            <div>
                                เลือกปี
                            </div>
                        </div>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-filled-label">เลือกปี</InputLabel>
                            <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={ChooseYear}
                            onChange={handleChangeYear}
                        >
                            

                                <MenuItem value="">
                                    <em>ทุกปี</em>
                                </MenuItem>
                                
                                {
                                    AllYear.map (content =>(
                                        
                                        <MenuItem value={content.Year} key={content.id} > {content.Year}</MenuItem>
                                        
                                    ))
                                }

                            </Select>
                        </FormControl>
                    </>
                        ) : (
                            
                            setChooseYear("")
                           
                        )
                    } */}

                    <div className='flex items-center' style={{fontSize: '20px', color: '#000000' , justifyContent:'left'} }>
                        <div>
                            เลือกปี
                        </div>
                    </div>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-filled-label">เลือกปี</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={ChooseYear}
                        onChange={handleChangeYear}
                    >
                        

                            <MenuItem value="">
                                <em>ทุกปี</em>
                            </MenuItem>
                            
                            {
                                AllYear.map (content =>(
                                    
                                    <MenuItem value={content.Year} key={content.id} > {content.Year}</MenuItem>
                                    
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
                    <InputLabel id="demo-simple-select-filled-label">เลือกเดือน</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={ChooseMonth}
                        onChange={handleChangeMonth}
                        >
                        
                            <MenuItem value="">
                                <em>ทุกเดือน</em>
                            </MenuItem>
                            
                            {
                                AllMonth.map (content =>(
                                    
                                    <MenuItem value={content.Month} key={content.id} > {content.Month}</MenuItem>
                                    
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
                                <div style={{fontSize:50 , fontWeight: 500}}>{sumincome}</div>
                            </div>
                            <div style={{}}>รายได้รวม</div>

                            <div className="flex items-center"style={{display: 'flex' , flexDirection: 'row'}}>
                                <div style={{fontSize:50}}><FaUserFriends/></div>
                                <div style={{fontSize:50, fontWeight: 500}}>{sumuser}</div>
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
                                <div style={{ fontSize:50,fontWeight: 500}}>{(sumincome/countday*30).toFixed(2) === 'NaN'? 0 : (sumincome/countday*30).toFixed(2)} / เดือน</div>
                                <div style={{ fontSize:50,fontWeight: 500}}> </div>
                            </div>
                            
                            <div>จำนวนผู้ใช้เพิ่มขึ้นจากปีที่แล้ว</div>
                            <div className="flex items-center"style={{display: 'flex' , flexDirection: 'row'}}>
                                <div style={{fontSize:50}}><FaUserFriends/></div>
                                <div style={{fontSize:50,fontWeight: 500}}>100 คน</div>
                            </div>
                            
                        </div>
                </Item>
            </Grid>

            <Grid item xs = {8}>
                <Item >
                    {/* <div> Graph 1 is Here</div> */}
                        <div>

                            {/* <LineChart width={500} height={300} data={Data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <Line type="monotone" dataKey="S_Income" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="0 0" />
                                <XAxis dataKey={"Day"} />
                                <YAxis />
                                <Tooltip />
                            </LineChart> */}

                            <LineChart width={windowSize.current[0]/3+windowSize.current[0]/20} height={windowSize.current[1]/3} data={Data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <Line type="monotone" dataKey="S_Income" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                {/* <XAxis dataKey={"Day"} /> */}
                                <XAxis dataKey={ChooseMonth !== "" ? "Day" : ChooseYear !== "" ? "Month" : "Year"} />
                                <YAxis />
                                <Tooltip />
                            </LineChart>



                        </div>

                        <div style={{ height: 10, width: '100%', justifyContent: 'center'} }>

                        </div>

                        <div>กราฟเปรียบเทียบรายได้</div>
                </Item>
            </Grid>

            <Grid item xs = {8}>
                
                <Item>
                    {/* <div> Graph 2 is Here</div> */}
                        <div>

                            <LineChart width={windowSize.current[0]/3+windowSize.current[0]/20} height={windowSize.current[1]/3} data={Data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <Line type="monotone" dataKey="usetime" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis dataKey={ChooseMonth !== "" ? "Day" : ChooseYear !== "" ? "Month" : "Year"} />
                                <YAxis />
                                <Tooltip label={"รายได้"}/>
                            </LineChart>

                        </div>

                        <div style={{ height: 10, width: '100%', justifyContent: 'center'} }>

                        </div>

                        <div>กราฟเปรียบเทียบผู้ใช้</div>
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