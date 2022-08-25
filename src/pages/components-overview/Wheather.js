// material-ui
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { ChromeOutlined } from '@ant-design/icons';

function createData(no, api, status) {
    return { no, api, status };
}

const rows = [
    createData(1, 'support@nobest-api.net', 'on'),
    createData(2, 'support@nobest-api.net', 'on'),
    createData(3, 'support@nobest-api.net', 'on')
];

// ==============================|| MANAGER PAGE ||============================== //

const Wheather = () => (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="caption table">
            <TableHead>
                <TableRow>
                    <TableCell>Tracking No</TableCell>
                    <TableCell>API Key</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.no}>
                        <TableCell component="th" scope="row">
                            {row.no}
                        </TableCell>
                        <TableCell>{row.api}</TableCell>
                        <TableCell>{row.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default Wheather;
