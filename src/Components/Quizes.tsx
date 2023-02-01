import "../styles/quiz.scss";
import { IQuiz } from "../Models/Quiz";
import QuizItem from "./QuizItem";

export interface IQuizes {
  quizes: IQuiz[] | undefined;
}

export default function Quizes({ quizes }: IQuizes) {
  return (
    <div className="quiz-wrapper">
      {quizes &&
        quizes?.map((quiz) => (
          <div key={quiz.id}>
            <QuizItem key={quiz.id} {...quiz} />
          </div>
        ))}
    </div>
  );
}
