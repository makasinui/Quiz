import IAnswer from "../Interfaces/IAnswer";
import IQuizQuestion from "../Interfaces/IQuizQuestion";

export default class Quiz {
    id: number;
    name: string;
    description?: string;
    link: string;
    questions?: IQuizQuestion[];
    answers?: IAnswer[];

    constructor(id: number, name: string, link: string, description?: string, questions?: IQuizQuestion[], answers?: IAnswer[]) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.questions = questions;
        this.answers = answers;
        this.description = description;
    }
}