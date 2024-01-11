import React from "react";
import api from "../api";
export default function Dados() {
  const [dados, setDados] = React.useState(undefined);

  React.useEffect(() => {
    api.get("apiv1/users1").then((res) => {
      setDados(res.data.findAll);
    });
  }, [dados]);
  
  return (
    <>
      {Array.isArray(dados) &&
        dados.map((data) => {
          return (
            <>
              <p>{data.name}</p>
              <p>{data.email}</p>
              <p>{data.password}</p>
              <br/>
            </>
          );
        })}
    </>
  );
}
