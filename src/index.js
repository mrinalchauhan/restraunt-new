
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Menuu from './components/menu2';
import 'tailwindcss/tailwind.css';


// Declare the App function only once
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="menu" element={<Menuu />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
