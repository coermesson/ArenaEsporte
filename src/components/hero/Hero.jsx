
import hero from '../../assets/hero.png';
import './Hero.css';

function Hero({ destaque, titulo, nome, descricao }) {
  return (
    <section
      className="hero"
      id="inicio"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="hero-conteudo">
        <span className="hero-destaque">
          {destaque}
        </span>

        <h1 className="hero-title">
          {titulo} <span>{nome}</span>
        </h1>

        <div className="hero-description">
          <p>{descricao}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
