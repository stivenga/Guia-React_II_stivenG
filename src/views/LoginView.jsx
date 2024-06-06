import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/auth";

const LoginView = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const autenticado = useSelector((state) => state.auth.autenticado);

  const handleLogin = (evento) => {
    evento.preventDefault();
    dispatch(login(form));
    console.log("Login", form);
  };

  const handleFormChange = (evento) => {
    const inputName = evento.target.name;
    const inputValue = evento.target.value;
    setForm({
      ...form,
      [inputName]: inputValue,
    });
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <p>Ingrese sus datos de usuario a continuación</p>
      <form onSubmit={handleLogin}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleFormChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleFormChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView;
