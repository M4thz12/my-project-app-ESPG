import Cabecalho from "./components/cabecalho";
import Section from "./components/section";
import Footer from "./components/footer";
import Conteudo from "./components/Conteudo";

export default function App() {
  return (
    <>
      <div className="container">

        <Cabecalho/>

        <Conteudo/>
        <Section/>
        
        <Footer/>

      </div>
    </>
  )
}
