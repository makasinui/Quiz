import IQuizQuestions from "../Interfaces/IQuizQuestions";

export default class Quiz {
    id: number;
    name: string;
    description?: string;
    link: string;
    amountOfQuestions: number;
    questions?: IQuizQuestions[];

    constructor(id: number, name: string, link: string, amountOfQuestions: number, questions?: IQuizQuestions[], description?: string) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.amountOfQuestions = amountOfQuestions;
        this.questions = questions;
        this.description = description;
    }
}