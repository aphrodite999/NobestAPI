// material-ui
import {
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Button,
    Modal,
    Box,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { LineChartOutlined } from '@ant-design/icons';

//react module
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0)
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2
};

const ButtonStyled = styled(Button, { shouldForwardProp: (prop) => prop !== 'open' })(() => ({
    padding: 0,
    color: '#000000',
    fontSize: '30px'
}));

//initial Data for ApexChart

const series = [
    {
        name: 'Page Views',
        data: [0, 86, 28, 115, 48, 210, 136]
    },
    {
        name: 'Sessions',
        data: [0, 43, 14, 56, 24, 105, 68]
    }
];

const areaChartOptions = {
    chart: {
        height: 450,
        type: 'area',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    grid: {
        strokeDashArray: 0
    }
};

// ==============================|| MANAGER PAGE ||============================== //

const ManagerWheather = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>市町村</TableCell>
                        <TableCell align="right">8/11</TableCell>
                        <TableCell align="right">8/12</TableCell>
                        <TableCell align="right">8/13</TableCell>
                        <TableCell align="right">8/14</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            <TableCell align="right">
                                {/* <IconButton size="large" component={ChromeOutlined} /> */}
                                <ButtonStyled
                                    size="large"
                                    onClick={() => {
                                        handleOpen();
                                    }}
                                >
                                    <LineChartOutlined />
                                </ButtonStyled>
                                <Modal
                                    open={open}
                                    onClose={() => {
                                        handleClose();
                                    }}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Text in a modal
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                        </Typography> */}
                                        <ReactApexChart options={areaChartOptions} series={series} type="area" height={450} />
                                    </Box>
                                </Modal>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManagerWheather;
