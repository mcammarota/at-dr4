import React, { useEffect, useState } from "react";

export default function Tarefas() {
    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    useEffect(() => {
        setLista(["Exemplo 1", "Exemplo 2"]);
    }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
    }

    return (
        <div className='container'>
            <h1>Tarefas - React</h1>
            <form onSubmit={handleSubmit}>
                <input value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" placeholder='Digite alguma tarefa'/>
                <button className="adicionar" onClick={() => addNovoItem()}>Adicionar</button>
            </form>       
            <ul className='tarefa-list'>
                {lista.map((item, index) => (
                <li key={index} className='tarefa-item'>
                    {item}
                    <button className="excluir" onClick={() => deletarItem(index)}>
                    Deletar
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )

    function addNovoItem() {

        if(novoItem.length <= 0) {
            alert("Digite alguma tarefa!");
            return;
        }
        
        setLista([...lista, novoItem]);
        setNovoItem("");
        }
        
    function deletarItem(index) {
        let tempArray = [...lista];
        tempArray.splice(index, 1);
        
        setLista(tempArray);
        }
}