import React, { useReducer } from 'react';
import './App.css';
import Header from './container/Header/index';
import Footer from './container/Footer/index';
import List from './container/List/index';

function updateTodo(todos, id) {
    const newTodos = todos.map((todoObj) => {
        if (id === todoObj.id) {
            return { ...todoObj, done: !todoObj.done };
        } else {
            return todoObj;
        }
    });
    return newTodos;
}
function addTodo(todos, text) {
    const id = todos.length !== 0 ? todos[todos.length - 1].id + 1 : 0;
    const date = new Date().toLocaleDateString()
    const newTodo =
    {
        id,
        date,
        text,
        done: false
    }
    return [...todos, newTodo]
}

function deleteTodo(todos) {
    const newTodos = todos.filter((todoObj) => {
        return todoObj.done !== true;
    })
    return newTodos;
}
function selectAll(todos, done) {
    const newTodos = todos.map(todoObj => {
        return done ? {...todoObj, done: true} : {...todoObj, done: false}
    }) 
    return newTodos;
}
function todosReducer(state, action) {
    switch (action.type) {
        default:
            return state;
        case "UPDATE":
            return updateTodo(state, action.payload.id);
        case "ADD":
            return addTodo(state, action.payload.text);
        case "DELETE":
            return deleteTodo(state);
        case "SELECTALL":
            return selectAll(state,action.payload.done);
    }
}

export default function App() {
    const [todos, todosDispatch] = useReducer(todosReducer, [])
    return (
        <div>
            <Header />
            <List todos={todos} dispatch={todosDispatch} />
            <Footer dispatch={todosDispatch} />
        </div>
    )

}