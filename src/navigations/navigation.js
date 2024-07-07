import Home from '../pages/home';
import About from '../pages/about';
import Menu from '../pages/menu';
import Contact from '../pages/contact';
import Admin from '../pages/admin'
import Offer from '../pages/offer'

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
    {
        path: '/admin',
        element: <Admin />,
    },
    {
        path: '/offer',
        element: <Offer />,
    },
]

export default navigation;