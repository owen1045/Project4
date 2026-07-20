import ListNotes from "./ListNotes";

export default function AllNotes({ data, deleteNote }) {
  return (
    <div className="allNotes">
      {<ListNotes data={data} deleteNote={deleteNote} />}
    </div>
  );
}
