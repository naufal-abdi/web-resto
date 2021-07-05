import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import PageNotFound from '../views/pages/pageNotFound';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

const notFound = PageNotFound;

export { routes, notFound };
