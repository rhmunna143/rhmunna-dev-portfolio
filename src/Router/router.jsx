import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home/Home';
import AboutPage from '../Pages/About/AboutPage';
import Projects from '../Pages/Projects/Projects';
import Blog from '../Pages/Blog/Blog';
import ContactPage from '../Pages/Contact/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/about",
                element: <AboutPage />
            },

            {
                path: "/projects",
                element: <Projects />
            },

            {
                path: "/blog",
                element: <Blog />
            },

            {
                path: "/contact",
                element: <ContactPage />
            }
        ]
    }
])

export default router;