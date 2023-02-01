import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Layout } from "./Components/Layout";
import EditQuiz from "./Pages/EditQuiz";
import ViewQuiz from "./Pages/ViewQuiz";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quiz/",
    element: <Layout />,
    children: [
      {
        path: ":id",
        element: <ViewQuiz />,
      },
      {
        path: ":id/edit",
        element: <EditQuiz />,
      },
    ],
  },
]);
