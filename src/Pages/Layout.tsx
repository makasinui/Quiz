import {Fragment} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import AddItem from '../Components/AddItem';
import Quizes from '../Components/Quizes';
export default function Layout () {
    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ height: '100vh', padding: '20px 0' }}> 
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <AddItem />
                        </Grid>
                        <Grid item xs={8}>
                            <Quizes />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Fragment>
    )
}