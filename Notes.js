import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Notes({ adder }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = uuidv4();
    const note = {
      title: noteTitle,
      body: noteBody,
      id: newId,
    };
    adder(note);
    setNoteTitle("");
    setNoteBody("");
  };
  return (
    <div>
      <h1>New Notes</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          className="title-input"
          required
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
          type="text"
          className="body-input"
          required
          value={noteBody}
          onChange={(e) => setNoteBody(e.target.value)}
        />
        <button>Add Note</button>
      </form>
    </div>
  );
}
