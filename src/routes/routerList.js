import MainLayout from "../layouts/main";

import HomeView from '../views/Home/HomeView';

const routes = [
  {
    path: '/',
    component: HomeView,
    exact: true,
    layout: MainLayout
  }, {
    component: HomeView,
    layout: MainLayout
  }
];

export default routes;