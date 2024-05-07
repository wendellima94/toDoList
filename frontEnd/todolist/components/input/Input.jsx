import React, { useState } from "react";
import api from "../../ultils/api";
import Button from "../button/button";

export default function Input() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newUser = {
      name: nome, 
      email: email,
      password: senha,
    };
    api
      .post("apiv1/users", newUser)
      .then((res) => {
        setNome("");
        setEmail("");
        setSenha("");
        console.log("Novo usuário criado:", res.data);
      })
      .catch((error) => {
        console.error("Erro ao criar novo usuário:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <br />
        <input
          type="text"
          id="nome"
          placeholder="Digite seu nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <br />

        <label htmlFor="email">E-mail</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label htmlFor="senha">Senha</label>
        <br />
        <input
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          maxLength={20}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <br />

        <Button type="submit" label="Criar Usuário" />
      </form>
    </div>
  );
}
