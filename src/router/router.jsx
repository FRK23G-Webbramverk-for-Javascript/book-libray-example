import { createBrowserRouter } from 'react-router-dom'

import Books from '../pages/Books'
import BookDetails from '../pages/BookDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Books />,
  },
  {
    path: '/book/:id', //Dynamisk url där :name ersätts med något
    element: <BookDetails />,
  },
])

export default router
