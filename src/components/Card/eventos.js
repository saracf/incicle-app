import React from "react";

const Evento = () => {
    return (
      <section>
          <section>
            <h1>Endomarketing</h1>
            <span className="conjunto-topo">
              <select>
                <option value="tananan">TIPO</option>
                <option value="teste">teste</option>
                <option value="valore">valore</option>  
              </select>
              <input type="button" value="Criar" id="newCard"
              onClick={handleCreateNewCardButton} />
            </span>
            <div className="container">
              <div className="conteudo">
                <img src="/assets/sumauma.png" alt="" srcSet="" />
                <div className="interno">
                  <h3 className="titulo">
                    Geral dispensado para curtir o feriado
                  </h3>
                  <h4 className="data"></h4>

                  <span className="spec">
                    <span className="tipo">comunicado</span>
                    <span className="data">13 de</span>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt...
                    </p>
                  </span>
                </div>
              </div>
              <div className="conteudo">
                <img src="/assets/sumauma.png" alt="" srcSet="" />
                <div className="interno">
                  <h3 className="titulo">Almoco do dia do desenvolvedor</h3>
                  <h4 className="data"></h4>

                  <span className="spec">
                    <span className="tipo">Evento</span>
                    <span className="data">12 de out</span>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt...{" "}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </section>
    )
}
 
export default Evento;