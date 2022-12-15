import Quiz from "../Models/Quiz"

let data: Quiz[] = [
    new Quiz(1, 'Сколько вам лет?', 'https://i.ytimg.com/vi/4zfY9L4245w/hqdefault.jpg', 1, [
        {
            id: 1,
            name: 'Введите ваш возраст',
            type: 'input'
        }
    ]),
    new Quiz(2, 'Какого вы пола?', 'https://soulexpert.ru/wp-content/uploads/2021/04/muzhchiny-i-zhenshhiny-takie-raznye-budto-s-raznyh-planet.png', 2, [
        {
            id: 1,
            name: 'Мужской',
            type: 'radio'
        },
        {
            id: 2,
            name: 'Женский',
            type: 'radio'
        }
    ]),
    new Quiz(3, 'Кто вы по профессии?', 'https://luckclub.ru/images/luckclub/2021/02/jns4sua1.jpg', 1, [
        {
            id: 1,
            name: 'Введите вашу профессию',
            type: 'input'
        }
    ])
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
            const lastId = Math.max(...data.map(e => e.id));
            const newId = lastId + 1;
            quiz.id = newId;
            data.push(quiz);
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

}
