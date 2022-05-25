import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { AppRoutes } from "./routes"
import { Wrapper } from "./styles/global"

export const App = () => {



  return(
    <BrowserRouter>
      <Header />
      <Wrapper>
        <AppRoutes />
      </Wrapper>
    </BrowserRouter>
  )
}