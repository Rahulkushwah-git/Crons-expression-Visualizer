import Canvas from "./canvas/index.jsx";
import Customizer from "./pages/Customizer.jsx";
import Home from "./pages/Home.jsx";
import CustomizerForm from './pages/CustomizerForm';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
       <CustomizerForm />
    </main>
  );
}

export default App;
