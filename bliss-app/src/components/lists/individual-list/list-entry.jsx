import "./list.css"

function ListEntry({
    entryTitle,
    entryAdded
}) {
  return (
    <div className="list-row">
      <input type="checkbox" name="" id="" />
      <span><h3>{entryTitle}</h3></span>
      <span><p>date added: {entryAdded} </p></span>
      <button>remove</button>
    </div>
  );
}

export default ListEntry;
