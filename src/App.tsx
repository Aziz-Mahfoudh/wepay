import BusinessRegistration from "./pages/views/registration/business-registration";
import { Route, Routes } from "react-router-dom";
import ParticularRegistration from "./pages/views/registration/particular-registration";
import Login from "./pages/views/login/login";
import FrontPage from "./pages/views/front-page/front-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route
        path="registration/business"
        element={<BusinessRegistration />}></Route>
      <Route
        path="registration/particular"
        element={<ParticularRegistration />}></Route>
    </Routes>
  );
}

export default App;
