import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import MinimalLayout from "./layouts/MinimalLayout"
import NavigationPanel from "./pages/NavigationPanel"
import Controller from "./pages/Controller"
import Overlay from "./pages/Overlay"
import Ingame from "./pages/Ingame"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MinimalLayout />,
    errorElement: <div>Naliligaw ka yata?</div>,
    children: [
      {
        index: true,
        element: <NavigationPanel />
      },
      {
        path: "overlay",
        element: <Overlay />
      },
      {
        path: "controller",
        element: <Controller />
      },
      {
        path: "ingame",
        element: <Ingame />
      }
    ]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
