import React, { useState } from 'react';
import './App.css';
import Header from './container/Header/index';
import Footer from './container/Footer/index';
import List from './container/List/index';

export default function App() {
    function updateTodo(id) {
        const newTodos = todos.map((todoObj) => {
            if (id === todoObj.id) {
                return { ...todoObj, done: !todoObj.done };
            } else {
                return todoObj;
            }
        });
        setTodos(newTodos);
    }
    function addTodo(text) {
        setTodos((preTodos) => {
            const id = preTodos[preTodos.length - 1].id + 1;
            const date = new Date().toLocaleDateString()
            const newTodo = 
            {
                id,
                date,
                text,
                done: false
            }
            return [...preTodos, newTodo];
        })
    }
    function deleteTodo() {
        setTodos((preTodos) => {
            const newTodos = preTodos.filter((todoObj) => {
                return todoObj.done !== true;
            })

            return newTodos;
        })
    }

    const [todos, setTodos] = useState([{ id: 0, text: "This is the best day", date: "June 2023", done: false }])
    return (
        <div>
            <Header />
            <List todos={todos} updateTodo={updateTodo}  />
            <Footer addTodo={addTodo} deleteTodo={deleteTodo}/>
        </div>
    )

}