import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Task from "./pages/Task/Task";
import Calendar from "./pages/Calendar/Calendar";
import Mail from "./pages/Mail/Mail";
import Projects from "./pages/Projects/Projects";
import FileManager from "./pages/FileManager/FileManager";
import social from "./pages/social/social";
import Products from "./pages/Products/Products";
import Orders from "./pages/Orders/Orders";
import Notes from "./pages/Notes/Notes";
import Contacts from "./pages/Contacts/Contacts";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/filemanager" element={<FileManager />} />
        <Route path="/social" element={<social />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/contacts" element={<Contacts />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;