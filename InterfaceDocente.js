import React from 'react';
import './InterfaceDocente.css'; // Arquivo CSS separado

const InterfaceDocente = () => {
  return (
    <div className="container">
      {/* Cabeçalho */}
      <div className="header">
        <h2>Olá, Docente Fulano!</h2>
        <p>Ano Letivo de 2024</p>
        <span>ADELINA DE CASTRO BOCCATO EMEI</span>
      </div>

      {/* Filtro */}
      <div className="filter-container">
        <fieldset>
          <legend>Filtro</legend>
          <div className="select-group">
            <div>
              <label htmlFor="turma">Turma</label>
              <select id="turma">
                <option value="">Selecione</option>
                <option>Turma</option>
                <option>Turma A Vespertino</option>
                <option>Turma A Matutino</option>
                <option>Turma B Vespertino</option>
                <option>Turma B Matutino</option>
                <option>Turma C Vespertino</option>
                <option>Turma C Matutino</option>
                <option>Turma D Vespertino</option>
                <option>Turma D Matutino</option>
              </select>
            </div>
            <div>
              <label htmlFor="momento">Mom. Avaliativo</label>
              <select id="momento">
                <option value="">Selecione</option>
                <option>1° Bimestre</option>
                <option>2° Bimestre</option>
                <option>3° Bimestre</option>
                <option>4° Bimestre</option>
              </select>
            </div>
            <div>
              <label htmlFor="disciplina">Disciplina</label>
              <select id="disciplina">
                <option value="">Selecione</option>
                <option>Portugues</option>
                <option>Geografia</option>
                <option>Ingles</option>
                <option>Historia</option>
                <option>Quimica</option>
                <option>Fisica</option>
              </select>
            </div>
          </div>
          <button type="button">Pesquisar</button>
        </fieldset>
      </div>
    </div>
  );
};

export default InterfaceDocente;
