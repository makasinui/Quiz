import { IQuiz } from "../Models/Quiz";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function QuizItem(quiz: IQuiz) {
  const { id, name, description, link } = quiz;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={link} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description ?? ""}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className="link" to={`/quiz/${id}`}>
          <Button size="small">Пройти тест</Button>
        </Link>
        <Link className="link" to={`/quiz/${id}/edit`}>
          <Button size="small">Редактировать</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
