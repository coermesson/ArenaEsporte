
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-conteudo">

        <div className="footer-marca">
          <h2>ArenaEsporte<span>.</span></h2>

          <p>
            Esporte, lazer e diversão em um só lugar.
            Viva a experiência dos esportes de areia!
          </p>
        </div>

        <nav className="footer-navegacao">
          <h3>Navegação</h3>

          <div className="footer-links">
            <a href="#modalidades">Modalidades</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#cadastro">Cadastro</a>
          </div>
        </nav>

      </div>

      <div className="footer-inferior">
        <p>
          © {new Date().getFullYear()} ArenaEsporte.
          Todos os direitos reservados.
        </p>

        <p>Feito para quem vive o esporte.</p>
      </div>
    </footer>
  );
}

export default Footer;
