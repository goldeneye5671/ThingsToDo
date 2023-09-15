import "./list.css"

function ListEntry({
    entryTitle,
    entryAdded
}) {
  return (
    <div className="list-row">
      <button>check</button>
      <span><h2>{entryTitle}</h2></span>
      <span><p>date added: {entryAdded} </p></span>
      <button>remove</button>
    </div>
  );
}

export default ListEntry;
