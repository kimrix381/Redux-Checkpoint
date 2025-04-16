import AddTask from "./components/addtask.jsx";
import ListTask from "./components/listtask.jsx";

function App() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-gray-50 rounded shadow">
      <h1 className="text-3xl font-semibold mb-6 text-center text-blue-700">
        ToDo App
      </h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
