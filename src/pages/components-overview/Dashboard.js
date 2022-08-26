// material-ui
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { ChromeOutlined } from '@ant-design/icons';

// react Hook
import { useEffect } from 'react';

function createData(no, api, total, status, count) {
    return { no, api, total, status, count };
}

const rows = [
    createData(1, 'support@nobest-api.net', 125, 'Accepted', 4),
    createData(2, 'support@nobest-api.net', 200, 'Rejected', 5),
    createData(3, 'support@nobest-api.net', 150, 'Accepted', 3)
];

// ==============================|| MANAGER PAGE ||============================== //

const Dashboard = () => {
    useEffect(() => {
        // GET request using fetch inside useEffect
        fetch('https://nobest-api.net/v1/key/picture')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);

    return (
        <TableContainer component={Paper} sx={{ marginTop: '160px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Tracking No</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Toast Order</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Count</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.no}>
                            <TableCell component="th" scope="row">
                                {row.no}
                            </TableCell>
                            <TableCell>{row.api}</TableCell>
                            <TableCell>{row.total}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Dashboard;
