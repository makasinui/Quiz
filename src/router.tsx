import {
    createBrowserRouter,
} from 'react-router-dom';
import App from './App';
import EditQuiz from './Pages/EditQuiz';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/quiz/:id',
        element: <EditQuiz />
    }
])
