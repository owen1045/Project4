import { Link } from "react-router-dom";

export default function ListNotes({ data, deleteNote }) {
  return (
    <div className="notelist">
      {data.map((note) => (
        <div className="notePreview" key={note.id}>
          <Link to={`/note/${note.id}`}>
            <h2>{note.title}</h2>
          </Link>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
