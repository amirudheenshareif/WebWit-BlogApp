import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import { BlogPage } from './components/BlogPage'
import { AppLayout } from './layouts/AppLayout'

function App() {

  const router = createBrowserRouter([{
    element: <AppLayout />,
    children: [
      {
      path: '/',
      element:<LandingPage/>, 
      },
      {
      path: '/blog/:id',
      element:<BlogPage/>,
      },
  ]
}]);
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
