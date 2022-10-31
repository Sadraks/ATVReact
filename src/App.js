
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./App.scss";


function App() {


  const { register, handleSubmit } = useForm();
  const [countrys, setCountrys] = useState([]);
  const [cithys, setCitys] = useState([])



  useEffect(() => {
    axios.get("https://amazon-api.sellead.com/country")
      .then((countrys) => setCountrys(countrys.data));
  }, [])

  useEffect(() => {
    axios.get("https://amazon-api.sellead.com/city")
      .then((cithys) => setCitys(cithys.data));
  }, [])



  function handleAcesso(dados) {
  console.log(`esta recebendo esses dados! ${dados}`)
  }


  return (
    <div className="container">

      <form onSubmit={handleSubmit(handleAcesso)} className="tela-de-acesso">
        <h3>Teste Ally</h3>
        <h4>DESAFIO REACT</h4>
        <div>
          <label>Nome   </label>
          <input
            type="text"
            name="Nome"
            placeholder="Digite seu nome completo"
            {...register('nome', { required: true })}
          />
          <span> Campo obrigatorio ⋆</span>
        </div>
        <div>
          <label>Email   </label>
          <input
            type="text"
            name="Email"
            placeholder="Digite seu E-mail"

            {...register("email", { required: true })} />
          <span> Compo obrigatorio ⋆</span>
        </div>
        <div>
          <label>Telefone  </label>
          <input
            id="phone"
            type="number"
            name="Telefone"
            placeholder="Digite seu telefone. (XX)X XXXX-XXXX"
            {...register("Telefone", { required: true })}
          /> 
          <span> Campo obrigatorio ⋆</span>
        </div>
        <div>
          <label> CPF </label>
          <input

            id="CPF"
            type="number"
            name="cpf"
            placeholder="Digite seu CPF XXX.XXX.XXX-XX"
            min="14"
          
            {...register("cpf", { required: true })}

          />
          <span> Campo obrigatorio ⋆ (XXX.XXX.XXX-XX)</span>
        </div>
        <div>
          <label>Pais  </label>
          <select id="counstry" {...register("Pais", { required: true })}>
            <option value="">Selecione o Pais...</option>
            {countrys.map((counstry) => {
              const { name, name_ptbr } = counstry;


              return (<option value={name}>{name_ptbr}</option>)
            })}

          </select>
          <span>Campo obrigatorio </span>

        </div>
        <div>
          <label> Cidade   </label>
          <select id="City" {...register("Cidade", { required: true })}>
            <option value="">Selecione as cidades...</option>
            {cithys.map((states) => {
              const { name, name_ptbr } = states

              return (<option  value={name}>{name_ptbr}</option>)
            })}
          </select>
          <span>Campo obrigatorio</span>
        </div>
        <button type="submit" >Enviar</button>

      </form>

    </div>
  )
}
export default App;