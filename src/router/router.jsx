import { createBrowserRouter } from 'react-router-dom';
import FormScreen from '../pages/FormScreen';
import Home from '../pages/Home';
import Songs from '../pages/Songs';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/form/:songId?',
        element: <FormScreen />,
    },
    {
        path: '/songs',
        element: <Songs />,
    }
]);

export default router;
