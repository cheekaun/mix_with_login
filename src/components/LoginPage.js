import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import useStyles from './style';
import { inputLabelClasses } from "@mui/material/InputLabel";
import { div, NavLink } from "react-router-dom";
import MainPage from './MainPage';

import axios from 'axios';
import { API_Info } from '../data/API_Info';

// import { useReducer } from 'react';

// const initialLogin = [
//   {
//     Auth: "FALSE"
//   }
// ]

// const reducer = (state, action) => {
//   switch (action.type){
//     case "COMPLETE":
//       return { Auth: "True"}
//     case "LOGOUT":
//       return { Auth: "FALSE"}  
//     default:
//       return state;
//   }
// }

function Copyright(props) {
    return (
        <Typography variant="body2" color="white" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Plug Mood
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function LoginPage() {

    // const [Auth , dispatch] = useReducer(reducer, initialLogin)

//   const handleComplete = () => {
//     dispatch({type: "COMPLETE"})
//   }
    const [userid,setuserid] = React.useState(() => {
        const storedauth = sessionStorage.getItem('id');
        return storedauth;
    });

    const [email,setemail] = React.useState("")
    console.log(email)
    const [password,setpassword] = React.useState("")
    console.log(password)

    const [confirm,setconfirm] = React.useState("False")
    React.useEffect(() => {
        axios.get( API_Info[0].Front + API_Info[0].Middle + '/Auth?email='+email +'&password='+password,            
        )
        .then(respone => {
            console.log(respone.data.results.length)
            if(respone.data.results.length !== 0){
                setconfirm("True")
                sessionStorage.setItem('id', respone.data.results[0].id);
                setuserid(respone.data.results[0].id)
                // console.log(respone.data.results[0].id)
            }else{
                setconfirm("False")
            }
        })
    
    },[email,password])
    console.log(confirm)

    const [auth ,setauth ] = React.useState(() => {
        const storedauth = sessionStorage.getItem('auth');
        return storedauth;
    });
    

    const GetAuth = () => {
        // const check = "True"
        // sessionStorage.setItem('auth', check);
        // setauth(check);
        
        sessionStorage.setItem('auth', confirm);
        setauth(confirm);
    };

    console.log(auth)

    // const classes = useStyles()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    }


    return (
        <>
            {auth !== "True" ? 
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{ backgroundColor: '#5e3195', }}
                    >
                        <Grid item justify="left" alignItems="left" style={{ marginBottom: '15%', marginLeft: '25px', marginTop: '25px' }}>
                            <Typography variant="h3" color={'white'} style={{ textAlign: 'left', }}>
                                Plug Mood
                            </Typography>
                        </Grid>
                        <Grid item justify="center" alignItems="center">
                            <img src={require('../Logo/PlugmoodLOGO.png')} alt="plug mood logo. " style={{ width: '100%', maxWidth: '300px', display: 'block', marginLeft: '30%' }} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} sx={{ backgroundColor: '#6d38ad', }} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                marginTop: '200px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >

                            <Typography component="h1" variant="h5" color={'white'}>
                                Sign in
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    className={{
                                        "& .MuiOutlinedInput-root": {
                                            borderColor: "white",
                                            color: "white",
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white"
                                            },
                                            "& .MuiInputLabel-outlined": {
                                                color: "white"
                                            },
                                            "& .MuiInputBase-input": {
                                                color: "white"
                                            },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: 'white !important',
                                                borderWidth: '2px !important',
                                            },
                                            "& .MuiOutlinedInput-root": {
                                                borderColor: "orange",
                                            },
                                        }
                                    }}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={(e)=>{setemail(e.target.value)}}
                                    InputLabelProps={{
                                        sx: {
                                            color: "white",
                                            [`&.${inputLabelClasses.shrink}`]: {
                                                color: "white"
                                            }
                                        }
                                    }}
                                />
                                <TextField
                                    className={{
                                        "& .MuiOutlinedInput-root": {
                                            borderColor: "white",
                                            color: "white",
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white"
                                            },
                                            "& .MuiInputLabel-outlined": {
                                                color: "white"
                                            },
                                            "& .MuiInputBase-input": {
                                                color: "white"
                                            },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: 'white !important',
                                                borderWidth: '2px !important',
                                            },
                                            "& .MuiOutlinedInput-root": {
                                                borderColor: "orange",
                                            },
                                        }
                                    }}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e)=>{setpassword(e.target.value)}}
                                    InputLabelProps={{
                                        sx: {
                                            color: "white",
                                            [`&.${inputLabelClasses.shrink}`]: {
                                                color: "white"
                                            }
                                        }
                                    }}
                                />
                                <NavLink to={"/"} >
                                <Button
                                    className={{
                                        "&.MuiButton-root": {
                                            border: "1px black solid"
                                        },
                                        "&.MuiButton-text": {
                                            color: "white"
                                        },
                                        ".MuiButton-outlinedPrimary": {
                                            color: 'grey',
                                        },
                                        "&.MuiButton-contained": {
                                            color: "white"
                                        },
                                        "&.MuiButton-outlined": {
                                            color: "white"
                                        }
                                    }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={GetAuth}
                                >
                                    Sign In
                                </Button></NavLink>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to="" variant="body2" style={{ textDecoration: 'none' }}>
                                            <Typography color={'white'}> Forgot password? </Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="" variant="body2" style={{ textDecoration: 'none' }}>
                                            <Typography color={'white'}> Create account </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
             : 
                <MainPage Userid={userid}/>
            
            }
        </>
    );
}