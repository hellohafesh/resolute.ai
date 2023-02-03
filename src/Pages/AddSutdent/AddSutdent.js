import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const AddSutdent = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/managestudent';



    const handleAddStudent = (data) => {
        console.log(data)
        const stname = `${data.firstName} ${data.middleName} ${data.lastName}`
        addStudent(stname, data.selectClass, data.selectDivition, data.roll, data.adress1, data.adress2, data.landmark, data.city, data.pincode)
    }

    const addStudent = (stname, classs, division, roll, adress1, adress2, landmark, city, pincode) => {
        const product = { stname, classs, division, roll, adress1, adress2, landmark, city, pincode };
        fetch('http://localhost:7000/addstudent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {

                // console.log('save user', data);

                if (data.acknowledged === true) {
                    toast.success('Student Upload Successfully.');
                    navigate(from, { replace: true });
                    // navigate('/dashboard/myproducts');
                    // setLoading(false);
                }

            })
    }

    // }
    const handleChange = data2 => {
        // console.log(data2.target.value)
        // return data2 = data2.target.value;
    }
    const handleChangedivition = data1 => {
        // console.log(data1.target.value)
        // return data1 = data1.target.value;

    }

    return (
        <div>
            <div className="flex justify-between mb-4" >
                <h1 className='text-xl'>Add Student</h1>
                <h1 className='text-xl'>03-Feb-2023 12:00</h1>
            </div>



            <form className=" " onSubmit={handleSubmit(handleAddStudent)} >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            {...register("firstName",
                                { required: "First Name  is required" })}
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            variant="outlined"
                        />{errors.firstName && <p role='alert' className='text-red-400 '>{errors.firstName?.message}</p>}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            {...register("middleName",
                                { required: "Middle Name  is required" })}
                            label="Middle Name"
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="outlined"
                        />{errors.middleName && <p role='alert' className='text-red-400 '>{errors.middleName?.message}</p>}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            {...register("lastName",
                                { required: "Last Name  is required" })}
                            label="Last name"
                            fullWidth
                            variant="outlined"
                        />{errors.lastName && <p role='alert' className='text-red-400 '>{errors.lastName?.message}</p>}
                    </Grid>
                    {/* select class */}
                    <Grid item xs={12} sm={4}>

                        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label">Select Class</InputLabel>
                            <Select
                                {...register("selectClass",
                                    { required: "Select Class  is required" })}

                                label="Select Class"
                                onChange={handleChange}
                                fullWidth
                                required
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"i"}>One</MenuItem>
                                <MenuItem value={"ii"}>Two</MenuItem>
                                <MenuItem value={"iii"}>Three</MenuItem>
                                <MenuItem value={"iv"}>Four</MenuItem>
                                <MenuItem value={"v"}>Five</MenuItem>
                                <MenuItem value={"vi"}>Six</MenuItem>
                                <MenuItem value={"vii"}>Seven</MenuItem>
                                <MenuItem value={"viii"}>Eight</MenuItem>
                                <MenuItem value={"ix"}>Nine</MenuItem>
                                <MenuItem value={"x"}>Ten</MenuItem>
                                <MenuItem value={"xi"}>Eleven</MenuItem>
                                <MenuItem value={"xii"}>Twelve</MenuItem>
                            </Select>

                        </FormControl>

                        {errors.selectClass && <p role='alert' className='text-red-400 '>{errors.selectClass?.message}</p>}
                    </Grid>
                    <Grid item xs={12} sm={4}>

                        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label">Select Division</InputLabel>
                            <Select
                                {...register("selectDivition",
                                    { required: "Select Divition  is required" })}

                                label="Select Divition"
                                onChange={handleChangedivition}
                                fullWidth
                                required
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"A"}>A</MenuItem>
                                <MenuItem value={"B"}>B</MenuItem>
                                <MenuItem value={"C"}>C</MenuItem>
                                <MenuItem value={"D"}>D</MenuItem>
                                <MenuItem value={"E"}>E</MenuItem>
                            </Select>

                        </FormControl>

                        {errors.selectDivition && <p role='alert' className='text-red-400 '>{errors.selectDivition?.message}</p>}
                    </Grid>


                    <Grid item xs={12} sm={4}>
                        <TextField
                            {...register("roll",
                                { required: "Roll  is required" })}
                            label="Enter Roll In Digit"
                            fullWidth
                            variant="outlined"
                        />{errors.roll && <p role='alert' className='text-red-400 '>{errors.roll?.message}</p>}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("adress1",
                                { required: "Adress Line 1 is required" })}
                            label="Adress Line 1"
                            fullWidth
                            variant="outlined"
                        />{errors.adress1 && <p role='alert' className='text-red-400 '>{errors.adress1?.message}</p>}
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("adress2",
                                { required: "Adress Line 2 is required" })}
                            label="Adress Line 2"
                            fullWidth
                            variant="outlined"
                        /> {errors.adress2 && <p role='alert' className='text-red-400 '>{errors.adress2?.message}</p>}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            {...register("landmark",
                                { required: "Landmark  is required" })}
                            label="LAnd Mark"
                            fullWidth
                            variant="outlined"
                        />{errors.landmark && <p role='alert' className='text-red-400 '>{errors.landmark?.message}</p>}
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            {...register("city",
                                { required: "Email  is required" })}
                            label="City"
                            fullWidth
                            autoComplete=" City"
                            variant="outlined"
                        /> {errors.city && <p role='alert' className='text-red-400 '>{errors.city?.message}</p>}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            {...register("pincode",
                                { required: "pincode  is required" })}
                            label="Pin Code"
                            fullWidth
                            autoComplete="shipping country"
                            variant="outlined"
                        />{errors.pincode && <p role='alert' className='text-red-400 '>{errors.pincode?.message}</p>}
                    </Grid>


                    <Grid item xs={12} sm={4}>
                        <Button type="submit" variant="contained" sx={{ width: "100%", height: "50px" }}>Add Student</Button>
                    </Grid>

                </Grid>


            </form>
        </div >
    );
};

export default AddSutdent;