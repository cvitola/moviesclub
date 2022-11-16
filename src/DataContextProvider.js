import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
    const [favoritos, setFavoritos] = useState([])
    const [misPuntajes, setMisPuntajes] = useState([]) //ojo
    const valor = {favoritos, setFavoritos, misPuntajes, setMisPuntajes};
    return(
        <DataContext.Provider value={valor}>
            {props.children}
        </DataContext.Provider>
    )
}