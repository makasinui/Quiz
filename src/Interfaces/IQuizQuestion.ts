import IAnswer from "./IAnswer"

export default interface IQuizQuestion {
    id: number
    name: string
    answers: IAnswer[]
    description?: string
};