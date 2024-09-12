import "./App.css";
import TodoHeading from "./components/TodoHeading";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <main className="todo_container">
        <TodoHeading />
        <TodoInput />
        <TodoList />
      </main>
    </>
  );
}

export default App;