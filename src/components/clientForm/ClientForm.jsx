import { useState } from 'react';
import Button from '../button/Button';
import './ClientForm.css';

function CadastroForm({ modalidades }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [modalidade, setModalidade] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('');

  function handleTelefoneChange(event) {
    const valor = event.target.value;
    const apenasNumeros = valor.replace(/[^0-9]/g, '');

    setTelefone(apenasNumeros.slice(0, 11));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !nome.trim() ||
      !email.trim() ||
      !telefone.trim() ||
      !modalidade
    ) {
      setMensagem('Preencha todos os campos obrigatórios.');
      setTipoMensagem('erro');
      return;
    }

    const cadastro = {
      nome,
      email,
      telefone,
      modalidade,
    };

    console.log('Cadastro realizado:', cadastro);

    setMensagem('Cadastro realizado com sucesso!');
    setTipoMensagem('sucesso');

    setNome('');
    setEmail('');
    setTelefone('');
    setModalidade('');
  }

  return (
    <section className="cadastro" id="cadastro">

      {/* Chamada para ação */}
      <div className="cadastro-cta">
        <h2>VIVA O ESPORTE!</h2>
        <h3>Faça parte da ArenaEsporte.</h3>
        <p>
          Escolha sua modalidade e venha viver essa
          experiência com a gente.
        </p>
      </div>

      {/* Formulário */}
      <div className="cadastro-container">
        <div className="cadastro-card">
          <h2 className="cadastro-titulo">
            Preencha as informações para realizar o seu cadastro
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="campo">
              <label htmlFor="nome">Nome completo</label>
              <input
                id="nome"
                type="text"
                placeholder="Ex.: João da Silva"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="Ex.: joao@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="telefone">Telefone</label>
              <input
                id="telefone"
                name="telefone"
                type="text"
                inputMode="numeric"
                placeholder="Ex.: 88999999999"
                value={telefone}
                onChange={handleTelefoneChange}
                maxLength={11}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="modalidade">
                Modalidade de interesse
              </label>

              <select
                id="modalidade"
                value={modalidade}
                onChange={(event) => setModalidade(event.target.value)}
                required
              >
                <option value="">Selecione uma modalidade</option>

                {modalidades.map((item) => (
                  <option key={item.id} value={item.nome}>
                    {item.nome}
                  </option>
                ))}
              </select>
            </div>

            <Button text="Cadastrar" type="submit" />
          </form>

          {mensagem && (
            <p
              className={`mensagem ${tipoMensagem}`}
              role="status"
            >
              {mensagem}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default CadastroForm;