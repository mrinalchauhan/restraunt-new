import { BrowserRouter } from "react-router-dom";
import Navigate from './navigations';
import Navbar from './components/navbar';
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="mt-10 md:mt-0">
        <Navigate />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
