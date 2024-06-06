import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./components/Layout";
import Home from "./views/Home";
import LoginView from "./views/LoginView";
import Perfil from "./views/Perfil";
import NotFound from "./views/NotFound";

const appOptions = [
  {
    title: "Home",
    to: "",
  },
  {
    title: "Login",
    to: "login",
  },
  {
    title: "Perfil",
    to: "perfil",
  },
];

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout options={appOptions} />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginView />} />
            <Route path="perfil" element={<Perfil />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

