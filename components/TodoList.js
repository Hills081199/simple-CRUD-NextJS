import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete}) => {
    if (todos.length === 0) {
        return <p>No tasks available</p>;
    }
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <TodoItem
                        task={todo.task}
                        completed={todo.completed}
                        onToggle={() => onToggle(index)}
                        onDelete={() => onDelete(index)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default TodoList;