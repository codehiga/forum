import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { AppRoutes } from "./routes"

export const App = () => {
  return(
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}