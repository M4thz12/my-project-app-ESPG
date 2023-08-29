export default function Footer(props) {
    return (
      <>
        <footer>

            <ul>
                {props.listaProps}
            </ul>

          <p>%copy; 2021, Vite.js and React.</p>
        </footer> 
      </>
    )
  }