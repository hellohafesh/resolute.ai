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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];











export default function ManageStudent() {



    // load all students in clinte
    const url = '  http://localhost:7000/students';
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
        fetch(`http://localhost:7000/studentDelete/${student._id}`, {
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





    return (
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
                                <RemoveRedEyeIcon color="primary1" />
                                <BorderColorIcon color="primary1" />
                                <Button onClick={() => deleteStudentDB(student)}><DeleteIcon color="primary1" /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
