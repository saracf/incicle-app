import React, { useState } from "react";
//import {data} from './data.json';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
//import Endomarketing from "./components/Endomarketing";
//import Events from "./components/Card/eventos"

const App = () => {
  // Inicializa o estado de eventos com um array com 1 evento
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Almoco do dia do desenvolvedor",
      type: "Evento",
      date: "12 de out",
      desc: "O presidente chinês, Xi Jinping, está participando da cerimônia de encerramento dos Jogos Paralímpicos de Inverno de Beijing 2022, que acontece no Estádio Nacional na capital chinesa na noite deste domingo.",
    },
  ]);

  //Adicionar mais evento no array de eventos
  const handleCreateNewCardButton = (clickEvent) => {
    setEvents([
      ...events,
      {
        id: events[events.length] + 1,
        title: "Almoco do dia do desenvolvedor",
        type: "Evento",
        date: "12 de out",
        desc: "O presidente chinês, Xi Jinping, está participando da cerimônia de encerramento dos Jogos Paralímpicos de Inverno de Beijing 2022, que acontece no Estádio Nacional na capital chinesa na noite deste domingo.",
      },
    ]);
  };

  return (
    <>
      <Navbar/>
      <main>
        <section className="section1">
          <section>
            <h1>Endomarketing</h1>
            <span className="conjunto-topo">
              <select>
                <option value="tananan">TIPO</option>
                <option value="teste">teste</option>
                <option value="valore">valore</option>
              </select>
              <input
                type="button"
                value="Criar"
                id="newCard"
                onClick={handleCreateNewCardButton}
              />
            </span>
            <div className="container">
              {events.map((event) => (
                <div className="conteudo" key={event.id}>
                  <img src="/assets/sumauma.png" alt="" srcSet="" />
                  <div className="interno">
                    <h3 className="titulo">{event.title}</h3>
                    <h4 className="data"></h4>

                    <span className="spec">
                      <span className="tipo">{event.type}</span>
                      <span className="data">{event.date}</span>

                      <p>{event.desc}</p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
        <aside>
          <div className="endomarketing">
            <p>
              O presidente chinês, Xi Jinping, está participando da cerimônia de
              encerramento dos Jogos Paralímpicos de Inverno de Beijing 2022,
              que acontece no Estádio Nacional na capital chinesa na noite deste
              domingo.{" "}
            </p>
            <input type="button" value="dispensar" />
          </div>
          <div className="quadros">
            <div className="conteudo-quadros">
              <p>
                Rotas a Oriente. Revista de estudos sino-portugueses é
                co-editada pela Universidade de Aveiro, através do seu Instituto
                Confúcio, e pela Universidade de Línguas Estrangeiras de Dalian
                (R. P. China), com o objetivo de promover a publicação de
                investigação científica, no âmbito dos estudos sexuais.
              </p>
            </div>
            <div className="conteudo-quadros">
              <p>
                Rotas a Oriente. Revista de estudos sino-portugueses é
                co-editada pela Universidade de Aveiro, através do seu Instituto
                Confúcio, e pela Universidade de Línguas Estrangeiras de Dalian
                (R. P. China), com o objetivo de promover a publicação de
                investigação científica, no âmbito dos estudos sino-portugueses.
              </p>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default App;
