function DifferentialCard({ titulo, descricao, imagem }) {
  return (
    <article className="diferencial">
      <img
        src={imagem}
        alt={`Ícone de ${titulo}`}
        className="diferencial-icone"
      />

      <div className="diferencial-conteudo">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </article>
  );
}

export default DifferentialCard;