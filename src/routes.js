import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Topic } from "./pages/Topic"

export const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topic/:id" element={<Topic />} />
    </Routes>
  )
}