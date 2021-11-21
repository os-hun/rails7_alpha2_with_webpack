import React from 'react'
import {
  BrowserRouter as Router,
  Routes as ReactRouterRoutes,
  Route,
} from 'react-router-dom'
import { App } from './containers/App'
import { LogIn } from './containers/auth/LogIn'

const roots = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/auth/log_in',
    element: <LogIn />,
  },
]

export const Routes = () => (
  <Router>
    <ReactRouterRoutes>
      {roots.map((root) => (
        <Route key={root.path} path={root.path} element={root.element} />
      ))}
    </ReactRouterRoutes>
  </Router>
)
