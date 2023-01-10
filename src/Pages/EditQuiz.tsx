import { useState, useEffect } from "react";
import Quiz from "../Models/Quiz";
import QuizService from "../Services/QuizService";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function EditQuiz() {
  const id: number = parseInt(useParams().id!);

  const quizService = new QuizService();
  const [quiz, setQuiz] = useState<Quiz>();

  useEffect(() => {
    const getQuiz = async () => {
      setQuiz(await quizService.getQuiz(id));
    };

    getQuiz();
  }, []);
  return (
    <Container maxWidth="xl">
      <Box sx={{ height: "100vh", padding: "20px 0" }}>
        {quiz?.questions &&
          quiz.questions.map((item) => (
            <>
              <div>{item.name}</div>
              <div>{item?.description}</div>
              <FormControl>
                <RadioGroup>
                  {quiz?.answers &&
                    quiz.answers.map((answer) => (
                      <div>
                        {answer.parentID === item.id && (
                          <FormControlLabel
                            value={answer.text}
                            control={<Radio />}
                            label={`${answer.text}`}
                          />
                        )}
                      </div>
                    ))}
                </RadioGroup>
              </FormControl>
            </>
          ))}
      </Box>
    </Container>
  );
}
