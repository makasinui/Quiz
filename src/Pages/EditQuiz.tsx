import { useState, useEffect } from 'react'
import Quiz from '../Models/Quiz'
import QuizService from '../Services/QuizService';
import { useParams } from 'react-router-dom';

export default function EditQuiz() {
    const id: number = parseInt(useParams().id!);
    
    const quizService = new QuizService();
    const [quiz, setQuiz] = useState<Quiz>();

    useEffect(()=>{
        const getQuiz =  async () => {
            setQuiz(await quizService.getQuiz(id));
        }

        getQuiz();
    }, [])
    return (
        <>
            {quiz?.name}
        </>
    )
}