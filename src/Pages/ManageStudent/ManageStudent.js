import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField, Grid } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';




const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-40%, -40%)',

    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};






export default function ManageStudent() {



    // load all students in clinte
    const url = '  https://poridhan-com-server-soumik825.vercel.app/students';
    const { data: students = [], refetch } = useQuery({
        queryKey: ['students'],
        queryFn: async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();

                return data;
            }
            catch (error) {
                console.log(error);
            }

        }
    })
    //delete user
    const deleteStudentDB = student => {
        fetch(`https://poridhan-com-server-soumik825.vercel.app/studentDelete/${student._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Successfull Delete ');
                    // closeModal(null);
                    refetch();

                }
            })

    }


    const [open, setOpen] = React.useState(false);
    const handleOpen = (details) => setOpen(details, true);
    const handleClose = () => setOpen(false);
    console.log(open)


    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 50 }} aria-label="simple table">
                    <TableHead sx={{ bgcolor: '#F33823' }} >
                        <TableRow>
                            <TableCell >Name</TableCell>
                            <TableCell align="right">Class</TableCell>
                            <TableCell align="right">Roll No.</TableCell>
                            <TableCell align="right">View/Edit/Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students?.map((student) => (
                            <TableRow
                                key={student._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {student.stname}
                                </TableCell>
                                <TableCell align="right">{student.classs}</TableCell>
                                <TableCell align="right">{student.roll}</TableCell>
                                <TableCell align="right" >
                                    <Button onClick={() => handleOpen(student)}><RemoveRedEyeIcon color="primary1" /></Button>
                                    <BorderColorIcon color="primary1" />
                                    <Button onClick={() => deleteStudentDB(student)}><DeleteIcon color="primary1" /></Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



            <div>


                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <h1 className='mb-5 text-2xl text-center bold' style={{}}>Deatails Of {open.stname}</h1>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}><TextField id="outlined-basic" value={open.classs} variant="outlined" /></Grid>
                            <Grid item xs={12} sm={4}><TextField id="outlined-basic" value={open.division} variant="outlined" /></Grid>
                            <Grid item xs={12} sm={4}><TextField id="outlined-basic" value={open.roll} variant="outlined" /></Grid>
                            <Grid item xs={12} sm={4}><TextField id="outlined-basic" value={open.adress1} variant="outlined" /></Grid>
                            <Grid item xs={12} sm={4}><TextField id="outlined-basic" value={open.adress2} variant="outlined" /></Grid>
                            <Grid item xs={12} sm={4}><TextField id="outlined-basic" value={open.landmark} variant="outlined" /></Grid>
                            <Grid item xs={12} sm={4}><TextField id="outlined-basic" value={open.city} variant="outlined" /></Grid>
                            <Grid item xs={12} sm={4}><TextField id="outlined-basic" value={open.pincode} variant="outlined" /></Grid>
                        </Grid>
                        <div className="mt-4 flex items-end w-full">
                            <button onClick={handleClose}><CancelIcon /></button>
                        </div>
                    </Box>
                </Modal>
            </div>




        </div>

    );
}
