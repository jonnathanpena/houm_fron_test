import { lazy } from 'react';

import MainLayout from "../layouts/main";

const HomeView = lazy(() => import('../views/Home/HomeView'));

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