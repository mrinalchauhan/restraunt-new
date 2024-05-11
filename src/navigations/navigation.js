import Home from '../pages/home';
import About from '../pages/about';
import Menu from '../pages/menu';
import Contact from '../pages/contact';

const navigation = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/menu',
        element: <Menu />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
]

export default navigation;