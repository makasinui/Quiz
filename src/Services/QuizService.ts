import { IQuiz, Quiz } from "../Models/Quiz"
import HttpService from "./HttpService";


export default class QuizService {
    protected httpService = new HttpService();
    protected url = 'http://127.0.0.1:8000/api/quizes';

    getList(): Promise<IQuiz[]> {
        return this.httpService.get(this.url).then(({data}) => data.data);
    }

    getQuiz(id: number): Promise<IQuiz> {
        return this.httpService.get(`${this.url}/${id}`).then(({data}) => data.data);
    }

    createQuiz(quiz: Quiz): Promise<boolean> {
        return this.httpService.post(this.url, quiz);
    }

    updateQuiz(quiz: IQuiz): Promise<boolean> {
        return this.httpService.put(this.url, quiz);
    }

    deleteQuiz(id: number): Promise<boolean> {
        return this.httpService.delete(`${this.url}/${id}`);
    }

}
