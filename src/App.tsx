import AddItem from "./feature/AddItem";
import List from "./feature/List";

const App = () => {
  return (
    <div className="container">
      <h1 className="fixed top-3">Todo List</h1>
      <AddItem />
      <List />
    </div>
  );
};

export default App;
