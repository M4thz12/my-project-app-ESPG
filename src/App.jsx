import Cabecalho from "./components/cabecalho";
import Conteudo from "./components/Conteudo";
import Footer from "./components/footer";
import reactLogo from "./assets/react.svg";

export default function App() {

  let reactLogoAlt = "React Logo";

  //Lista de links redes sociais

  let listaLinks =[<li>Github</li>, <li>X</li>, <li>Reddit</li> ];

  return (
    <>
      <div className="container">

        <Cabecalho/>

        {/* <img src={reactLogo} alt={reactLogoAlt} /> */}

        <Conteudo reactLogoProps={reactLogo} reactLogoAltProps={reactLogoAlt} />

        <Footer listaProps={listaLinks}/>

      </div>
    </>
  )
}
