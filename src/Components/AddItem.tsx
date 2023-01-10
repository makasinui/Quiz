import { useState } from "react";
import Quiz from "../Models/Quiz";
import QuizService from "../Services/QuizService";
import "../styles/additem.scss";
import FormField from "./FormField";

export interface IAddItem {
  fetchList: () => void
}

export default function AddItem({fetchList}: IAddItem) {
  const quizService = new QuizService();

  const [name, setName] = useState<Quiz['name']>();
  const [description, setDescription] = useState<Quiz['description']>();
  const [link, setLink] = useState<Quiz['link']>();
  const [id, setID] = useState<Quiz['id']>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setID(await quizService.getLastId());
    
    if(name && description && link && id){
      await quizService.createQuiz(new Quiz(id, name, link, description ));
      await fetchList();
    }
  }


  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Быстрое добавление квиза</h2>
        <FormField handleSubmit={(e) => setName(e.target.value)} required={true} placeholder={"Введите название квиза"}>
          Название квиза
        </FormField>
        <FormField handleSubmit={(e) => setDescription(e.target.value)} placeholder={"Введите описание квиза"}>
          Описание
        </FormField>
        <FormField handleSubmit={(e) => setLink(e.target.value)} placeholder={"Введите ссылку"}>
          Ссылка на обложку квиза
        </FormField>
        <button className="add-item" type="submit">Добавить опросник</button>
      </form>
    </section>
  );
}
