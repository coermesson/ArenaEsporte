
import './App.css';

// Componentes
import About from './components/about/About';
import Categories from './components/categories/Categories';
import ClientForm from './components/clientform/ClientForm';
import Differentials from './components/differentials/Differentials';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

// Imagens das modalidades
import beachtenis from './assets/beachtenis.png';
import futvolei from './assets/futvolei.png';
import volei from './assets/volei.png';

// Ícones dos diferenciais
import bemestar from './assets/bemestar.svg';
import convivencia from './assets/convivencia.svg';
import variedade from './assets/variedade.svg';

function App() {

  // Lista de modalidades
  const modalidades = [
    {
      id: 1,
      nome: 'Vôlei de Praia',
      descricao: 'Trabalho em equipe, estratégia e diversão em partidas na areia.',
      imagem: volei,
    },
    {
      id: 2,
      nome: 'Futevôlei',
      descricao: 'Uma combinação de futebol e vôlei que desafia suas habilidades.',
      imagem: futvolei,
    },
    {
      id: 3,
      nome: 'Beach Tennis',
      descricao: 'Movimente-se e divirta-se em partidas dinâmicas com raquete e bola.',
      imagem: beachtenis,
    },
  ];

  // Lista de diferenciais
  const diferenciais = [
    {
      id: 1,
      titulo: 'Variedade',
      descricao: 'Três modalidades esportivas em um só lugar.',
      imagem: variedade,
    },
    {
      id: 2,
      titulo: 'Bem-estar',
      descricao: 'Esporte, lazer e qualidade de vida.',
      imagem: bemestar,
    },
    {
      id: 3,
      titulo: 'Convivência',
      descricao: 'Um espaço para praticar e compartilhar.',
      imagem: convivencia,
    },
  ];

  return (
    <>
      <main>
        <div className="conteudo-principal">

          <Header />

          <Hero
            destaque="ESPORTE • LAZER • DIVERSÃO"
            titulo="ARENA"
            nome="ESPORTE"
            descricao="Um espaço para você viver o melhor do esporte de areia."
          />
          <About/>

          <Categories modalidades={modalidades} />

          <Differentials diferenciais={diferenciais} />

        </div>
          <ClientForm  modalidades ={modalidades} />

      </main>

      <Footer />
    </>
  );
}

export default App;
