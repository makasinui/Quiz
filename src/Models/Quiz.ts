import IAnswer from "../Interfaces/IAnswer";
import IQuizQuestion from "../Interfaces/IQuizQuestion";

export interface IQuiz {
    id: number
    name: string
    link: string
    description: string | undefined
    questions: IQuizQuestion[] | undefined
  }

export class Quiz {
    name: string;
    link: string;
    description?: string;
    questions?: IQuizQuestion[];
    answers?: IAnswer[];

    constructor( name: string, link: string, description?: string, questions?: IQuizQuestion[], answers?: IAnswer[]) {
        this.name = name;
        this.link = link;
        this.questions = questions;
        this.answers = answers;
        this.description = description;
    }
}