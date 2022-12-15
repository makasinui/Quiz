import '../styles/quiz.scss'
import { useState, useEffect } from 'react'
import QuizService from '../Services/QuizService';
import Quiz from '../Models/Quiz'
import QuizItem from './QuizItem';

export default function Quizes() {
    const [quizes, setQuizes] = useState<Quiz[]>();
    const quizService = new QuizService();
    
    useEffect(() => {
        const getQuizes = async () => {
            setQuizes(await quizService.getList())
        };
        getQuizes();
    }, [])

    return (
        <div className="quiz-wrapper">
            {quizes?.map(quiz => (
            <>
                <QuizItem {...quiz} />
            </> 
            ))}
        </div>
        
    )
}