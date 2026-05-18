import { useState } from "react";
import './TodoApp.css'

const TodoApp = () => {

    const [todos, setTodos] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const Clear = () => {
        setTodos([]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                Text:inputValue
            }

            setTodos((prevTodos) => [...prevTodos, newTodo])
            setInputValue('');
        }


    }

    const handleDelete = (id) => {
        const updateTodos = todos.filter(todo => todo.id !== id);
        setTodos(updateTodos);
    }


    return(
        <div className="container">
            <h1 className="title">TaskCraft</h1>
            <form onSubmit={handleSubmit} className="todo-form">
                <input 
                    type="text" 
                    placeholder="Adicione uma tarefa" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="add-button">
                    Adicionar
                </button>
            </form>
            <div className="container2">
            </div>
            {todos.length === 0 && <p className="empty"> não há tarefas</p>}

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {todo.Text}
                        <button className="delete-button" onClick={() => handleDelete(todo.id)}>Excluir</button>
                    </li>
                ))}
            </ul>

            <button onClick={Clear} className="btn-clear">Limpar tudo</button>
        </div>
    );
}

export default TodoApp;