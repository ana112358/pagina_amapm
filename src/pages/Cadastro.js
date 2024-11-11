import React from 'react';

const Cadastro = () => {
  return (
    <section id="cadastro">
      <h2>Cadastro</h2>
      <p>Aqui vai o formulário de cadastro para os associados. Solicite dados como nome, e-mail, etc.</p>
      <form>
        <label htmlFor="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br />

        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" required /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
};

export default Cadastro;
