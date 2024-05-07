import React, { useState } from "react";
import api from "../../ultils/api";

export default function Dados() {
  const [dados, setDados] = useState(undefined);

  React.useEffect(() => {
    api.get("apiv1/users").then(
      (res) => {
      setDados(res.data.findAll);
    });
  }, []);

  console.log(dados);

  return (
    <>
      {Array.isArray(dados) &&
        dados.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <p>{data.name}</p>
              <p>{data.email}</p>
              <p>{data.password}</p>
              <br />
            </React.Fragment>
          );
        })}
    </>
  );
}
