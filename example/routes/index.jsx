import React from 'react';
import { Redirect } from 'react-router-dom';
import { Layout } from '@/index.jsx';
import BaseFormDemo from '../pages/BaseFormDemo/index.jsx';

const routes = [{
  path: '/',
  component: Layout,
  routes: [{
    path: '/BaseFormDemo',
    component: BaseFormDemo
  }]
}];

export default routes;