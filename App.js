import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Notes from "./Notes";
import AllNotes from "./AllNotes";
import NoteDetail from "./NoteDetail";

export default function App() {
  const [data, setData] = useState([]);

  const deleteNote = function (id) {
    setData((data) => data.filter((note) => note.id != id));
  };
  const addNote = function (note) {
    setData((data) => [...data, note]);
    console.log(data);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Notes App</h1>
        <Navbar />
        <Routes>
          <Route index element={<Notes adder={addNote} />} />
          <Route
            path="allNotes"
            element={<AllNotes data={data} deleteNote={deleteNote} />}
          />
          <Route
            path="note/:noteId"
            element={<NoteDetail listNotes={data} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
