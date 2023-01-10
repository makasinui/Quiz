import Quiz from "../Models/Quiz"

let data: Quiz[] = [
    new Quiz(1, 'Кто вы из наруто?', 'https://kartinki-srisovki.ru/wp-content/uploads/glavnaya-15.jpg', '', [
        {
            id: 1,
            name: 'Что это?',
        },
        {
            id: 2,
            name: 'Как это?'
        }
    ], 
    [
        {
            id: 1,
            parentID: 1,
            text: 'Как?'
        }, 
        {
            id: 2,
            parentID: 1,
            text: 'Ауе'
        },
        {
            id: 3,
            parentID: 1,
            text: 'ААА'
        }, 
        {
            id: 4,
            parentID: 2,
            text: 'УУ'
        }
    ]
    ),
];

export default class QuizService {
    getList(): Promise<Quiz[]> {
        return new Promise<Quiz[]>((resolve, reject) => {
            resolve(data);
        });
    }

    getQuiz(id: number): Promise<Quiz> {
        return new Promise<Quiz>((resolve, reject) => {
            const quiz: Quiz | undefined = data.find(e => e.id === id);
            return quiz ? resolve(quiz) : reject(new Error('Quiz not found'))
        });
    }

    createQuiz(quiz: Quiz): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            data.push(quiz);
            console.log(data)
            resolve(true);
        })
    }

    updateQuiz(quiz: Quiz): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            data = [...data.filter(e => e.id !== quiz.id), quiz];
            resolve(true);
        })
    }

    deleteQuiz(id: number): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            data = [...data.filter(e => e.id !== id)];
            resolve(true)
        })
    }

    getLastId(): Promise<number> {
        return new Promise<number>((resolve) => {
            const lastId = Math.max(...data.map(e => e.id));
            const newId = lastId + 1;
            resolve(newId);
        })
    }

}
