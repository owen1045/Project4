import { useParams, Link } from "react-router-dom";

export default function NoteDetail({ listNotes }) {
  const { noteId } = useParams();
  const currentNote = listNotes.find((note) => note.id == noteId);
  if (!currentNote) {
    return (
      <div>
        <h1>Note not Found!</h1>
      </div>
    );
  }
  return (
    <div className="note-detail">
      <h1>{currentNote.title}</h1>
      <p>{currentNote.body}</p>
    </div>
  );
}
