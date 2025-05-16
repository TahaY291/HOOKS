import { createContext, useContext } from "react";
export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Tdo msg",
            completed: false

        },
        
        
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id)=> {}

})

export const useTodo = () => {
    return useContext(ToDoContext)
}
export const ContextProvider = ToDoContext.Provider;
