import "./Categories.css";
import ModalidadeCard from "./ModalidadeCard"; // Importa o card separado

function Categories({ modalidades }) {
  return (
    <section className="categorias" id="modalidades">
      <h2 className="categorias-titulo">
        Modalidades oferecidas
      </h2>

      <div className="lista-modalidades">
        {modalidades.map((modalidade) => (
          <ModalidadeCard
            key={modalidade.id}
            nome={modalidade.nome}
            imagem={modalidade.imagem}
            descricao={modalidade.descricao}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;