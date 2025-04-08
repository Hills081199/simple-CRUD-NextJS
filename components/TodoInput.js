import { useState } from "react";

const TodoInput = ({ onAddTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        onAddTodo(text.trim());
        setText("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoInput;