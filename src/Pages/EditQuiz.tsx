import "../styles/editquiz.scss";

import { useState, useEffect } from "react";
import { IQuiz } from "../Models/Quiz";
import QuizService from "../Services/QuizService";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FormControl, RadioGroup, FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import RadioQuestions from "../Components/RadioQuestions";

export default function EditQuiz() {
  const id: number = parseInt(useParams().id!);

  const quizService = new QuizService();
  const [quiz, setQuiz] = useState<IQuiz>();

  useEffect(() => {
    const getQuiz = async () => {
      setQuiz(await quizService.getQuiz(id));
    };

    getQuiz();
  }, []);
  return quiz ? (
    <Box className="editquiz">
      <section className="top-content">
        <section className="image-wrapper">
          <img className="image-main" alt="Quiz main" src={quiz.link} />
        </section>
      </section>
      <FormControl className="form-wrapper">
        <Typography variant="h4">Редактирование Квиза</Typography>
        <TextField
          required
          className="form-field"
          label={"Имя"}
          value={quiz.name}
        />
        <TextField
          required
          className="form-field"
          label={"Ссылка на обложку"}
          value={quiz.link}
        />
        <TextField
          required
          className="form-field"
          label={"Описание"}
          value={quiz.description}
          multiline
          rows={4}
        />
        <RadioQuestions {...quiz} />
      </FormControl>
    </Box>
  ) : (
    <Box>Quiz Not found!</Box>
  );
}
