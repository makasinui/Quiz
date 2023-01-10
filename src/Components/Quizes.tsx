import '../styles/quiz.scss'
import Quiz from '../Models/Quiz'
import QuizItem from './QuizItem';

export interface IQuizes {
    quizes: Quiz[] | undefined
}

export default function Quizes({quizes}: IQuizes) {
    return (
        <div className="quiz-wrapper">
            {quizes && quizes?.map(quiz => (
                <div key={quiz.id}>
                    <QuizItem key={quiz.id} {...quiz} />
                </div> 
            ))}
        </div>
        
    )
}