import "./style.css"
import perfil from "../../imagens/perfil.svg"
import sacola from "../../imagens/sacola.svg"

const icones = [perfil, sacola];

function IconHeader (){
    return (
        <ul className="icones">
            {icones.map( (icone) => (
              <li className="icone"><img src={icone} alt="icone"></img></li>
            ))}
        </ul>
    )
}

export default IconHeader;