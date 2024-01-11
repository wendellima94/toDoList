import React from "react";
import Button from "../button/button";

export default function Input() {
  return (

    
    <>
      <div>
        <form>
          <label htmlFor="nome">Nome</label><br />
          <input type="text" id="nome" placeholder="Digite seu nome..." required/><br />

          <label htmlFor="email">E-mail</label><br />
          <input type="text" id="email" placeholder="Digite seu e-mail..."  required/><br />

          <label htmlFor="senha">Senha</label><br />
          <input type="password" id="senha" placeholder="Digite sua senha" maxLength={20} required/><br />

          <Button />

        </form>
      </div>
    </>
  );
}
