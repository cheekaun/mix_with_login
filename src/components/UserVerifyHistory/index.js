import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";

export default function UserVerifyHistory (){

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return(

        <Grid container rowSpacing={1} columnSpacing={2} columns={16}>
            
            <Grid item xs={16} md={16}>
                <Item style={{ textAlign: 'left'}}>
                <div style={{fontSize: '50px', color: '#7B2CBF'}}>
                ยินดีต้อนรับ คุณ user name !</div>
                <div style={{fontSize: '30px'} }>
                สถานะคำร้อง</div>
                <div style={{ width: '100%', justifyContent: 'center'} }>
                </div>
                
                <Button variant="contained" color="secondary" size="large" >คำร้องขอลงทะเบียนผู้ใช้งาน</Button> 

                <NavLink to={"/home"} >
                <Button variant="outlined" color="secondary" size="large" >คำร้องขอลงทะเบียนสถานีชาร์จ</Button></NavLink>
                <div style={{ height: 5, width: '100%', justifyContent: 'center'} }>
                </div>
                </Item>
            </Grid>

            <Grid item xs={16} md={16}>
                <Item style={{ textAlign: 'left'}}>
                <Button variant="contained" color="grey" size="medium"disabled>รอการยืนยัน</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="grey" size="medium"disabled>ไม่สำเร็จ</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="grey" size="medium"disabled>สำเร็จ</Button>
                </Item>

                <div style={{ height: 100, width: '100%', justifyContent: 'center'} }>

                </div>
                <Item style={{ textAlign: 'center'}}>

                <div style={{fontSize: '50px'} }>
                กรุณากรอกแบบฟอร์มยืนยันตัวตน<br></br>เพื่อทำการลงทะเบียน</div>

                <div>

                </div>
                <Button variant="contained" color="secondary" size="large">คลิกเพื่อลงทะเบียน</Button>

                <div style={{ height: 100, width: '100%', justifyContent: 'center'} }>
                </div>
                </Item>



            </Grid>



        </Grid>
    ); 

}
