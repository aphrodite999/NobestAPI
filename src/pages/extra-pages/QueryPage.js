// material-ui
import { Typography, Link, Box } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const QueryPage = () => (
    <MainCard sx={{ padding: '30px' }}>
        <Box>
            <Typography variant="link" color="black" component={Link} href="#" target="_blank" fontSize="16px" underline="hover">
                support@nobest-api.net
            </Typography>
        </Box>
        <Box>
            <Typography variant="link" color="black" component={Link} href="#" target="_blank" fontSize="16px" underline="none">
                こちら1こお問い合わせください
            </Typography>
        </Box>
    </MainCard>
);

export default QueryPage;
