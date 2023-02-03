import React, { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
// import app from '../../Firebase/firebase.config.js';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [signUpError, setSignUpError] = useState('');
    const { createUser, } = useContext(AuthContext);

    // console.log(app, "aaaaaa")



    const handleSignup = (data) => {
        console.log(data);
        // createUser(data.email, data.password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         setSignUpError(error.message);
        //     })

    }

    return (
        <div>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <form onSubmit={handleSubmit(handleSignup)} noValidate sx={{ mt: 1 }}>
                            <TextField
                                {...register("email",
                                    { required: "Email  is required" })}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />{errors.email && <p role='alert' className='text-red-400 '>{errors.email?.message}</p>}


                            <TextField {...register("password",
                                { required: "Password  is required", minLength: { value: 6, message: "Password must be 6 charecter " } })}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {errors.password && <p role='alert' className='text-red-400 '>{errors.password?.message}</p>}
                            {signUpError && <p className='text-red-400 '>{signUpError} </p>}

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Log In
                            </Button>
                            <Grid container>

                                <Grid item>
                                    <Link to="/login">
                                        Have an account? Login
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default SignUp;


