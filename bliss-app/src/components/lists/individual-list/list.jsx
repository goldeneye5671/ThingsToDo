import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneList, selectListById } from "../../../store/listSlice";
import ListEntry from "./list-entry"
import "./list.css"

function IndividualList() {
  const dispatch = useDispatch();
  const params = useParams()
  const list = useSelector(state => state?.list?.lists.find(list => list.id === parseInt(params.id)));
  const listComponents = list?.ThingsToDos?.length ? list.ThingsToDos.map(bliss => <ListEntry key={bliss.id} entryTitle={bliss.thingName} entryAdded={bliss.createdAt}/>) : <h3>Nothing...yet...</h3>
  useEffect(() => {
    if (!list) {
      dispatch(fetchOneList(parseInt(params.id)))
    }
  })

  return (
    <>
    <div className="list-heading">
      <h1>{list?.listName}</h1>
      <h3>by {list?.User.username}</h3>
    </div>
    <div className="list-description">
      <p>{list?.listDescription}</p>
    </div>
    <div className="list-entry-container">
      {listComponents}
    </div>
    </>
  )
}

export default IndividualList
