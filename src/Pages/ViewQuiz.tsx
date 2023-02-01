import React, { useState, useEffect } from "react";
import { IQuiz } from "../Models/Quiz";
import QuizService from "../Services/QuizService";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function ViewQuiz() {
  const id: number = parseInt(useParams().id!);

  const quizService = new QuizService();
  const [quiz, setQuiz] = useState<IQuiz>();

  useEffect(() => {
    const getQuiz = async () => {
      setQuiz(await quizService.getQuiz(id));
    };

    getQuiz();
  }, []);
  return (
    <Box>
      {quiz?.questions &&
        quiz.questions.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.name}</div>
            <div>{item?.description}</div>
            <FormControl>
              <RadioGroup>
                {item?.answers &&
                  item.answers.map((answer) => (
                    <div key={answer.id}>
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
          </React.Fragment>
        ))}
    </Box>
  );
}
