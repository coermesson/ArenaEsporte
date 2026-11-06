function ModalidadeCard({ nome, imagem, descricao }) {
  return (
    <article className="modalidade">
      <h3>{nome}</h3>
      <img src={imagem} alt={nome} />
      <p>{descricao}</p>
    </article>
  );
}

export default ModalidadeCard;