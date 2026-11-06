import DifferentialCard from "./DifferentialCard";
import "./Differentials.css";

function Differentials({ diferenciais }) {
  return (
    <section className="diferenciais" id="diferenciais">
      <h2>Nossos diferenciais</h2>

      <div className="lista-diferenciais">
        {diferenciais.map((diferencial) => (
          <DifferentialCard
            key={diferencial.id}
            titulo={diferencial.titulo}
            descricao={diferencial.descricao}
            imagem={diferencial.imagem}
          />
        ))}
      </div>
    </section>
  );
}

export default Differentials;