import Logo from "../Logo"
import OpcoesHeader from "../OpcoesHeader"
import IconHeader from "../IconHeader";
import "./style.css"

function Header (){
    return (
        <header className="App-header">
            <Logo/>
            <OpcoesHeader/>
            <IconHeader/>
        </header>
    )
}

export default Header;