import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import Skills from '../pages/Skills/Skills';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: '/',
        index: true,
        Component: Home,
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'skills',
        Component: Skills
      },
      {
        path: 'projects',
        Component: Projects
      },
      {
        path: 'contact',
        Component: Contact
      }
    ]
  },
]);
