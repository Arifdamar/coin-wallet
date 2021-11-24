import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App bg-gray-200 flex flex-row  w-full h-screen">
      <Sidebar />
      <div className="flex flex-col h-full w-full">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
