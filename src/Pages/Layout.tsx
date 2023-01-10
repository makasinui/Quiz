import {Fragment, useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import AddItem from '../Components/AddItem';
import Quizes from '../Components/Quizes';
import Quiz from '../Models/Quiz';
import QuizService from '../Services/QuizService';

export default function Layout () {
    const [quizes, setQuizes] = useState<Quiz[]>();
    const [quizList, setQuizList] = useState<Quiz[]>();
    const quizService = new QuizService();

    const fetchQuizes = async () => {
        setQuizes([...(await quizService.getList())]);
    }

    useEffect(()=>{
        fetchQuizes();
    }, []);

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ height: '100vh', padding: '20px 0' }}> 
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <AddItem fetchList={fetchQuizes} />
                        </Grid>
                        <Grid item xs={8}>
                            <Quizes quizes={quizes} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Fragment>
    )
}