// call direct without creating a type
type SearchProps = {
    loadUser: (userName: string) => Promise<void>
};

import { useState, KeyboardEvent } from "react"; //import of KeyboardEvent 
import {BsSearch} from "react-icons/bs";

//import the module css

import classes from './Search.module.css'

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");//sera preenchida pelo usuário digitando

    // event to enter

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") { //verificar se a tecla pressionada é igual a Enter
            loadUser(userName)
        }
    };

    return (
        
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>

            <div className={classes.search_container}>
                <input type="text" placeholder="Digite o nome do usuário"onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown} />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
};

export default Search;