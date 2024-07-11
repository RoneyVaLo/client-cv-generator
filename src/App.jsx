import { createBrowserRouter, RouterProvider, NavLink } from 'react-router-dom'

// Pages
import CustomizeCV from './pages/CustomizeCV'
import DownloadCV from './pages/DownloadCV'
import { UserProvider } from './context/UserContext'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Generador de CV</h1>
          <NavLink to={"customize-cv"}>Personalizar CV</NavLink>
          <NavLink to={"download-cv"}>Descargar CV</NavLink>
        </div>)
    },
    {
      path: "customize-cv",
      element: <CustomizeCV />
    },
    {
      path: "download-cv",
      element: <DownloadCV />
    }
  ])

  return (
    <UserProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </UserProvider>
  )
}

export default App
