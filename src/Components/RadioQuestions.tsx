import { IQuiz } from "../Models/Quiz";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function RadioQuestions(quiz: IQuiz) {
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
                      <FormControlLabel
                        value={answer.text}
                        control={<Radio />}
                        label={`${answer.text}`}
                      />
                    </div>
                  ))}
              </RadioGroup>
            </FormControl>
          </React.Fragment>
        ))}
    </Box>
  );
}
