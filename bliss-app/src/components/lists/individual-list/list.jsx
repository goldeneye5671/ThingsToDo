import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneList, selectListById } from "../../../store/listSlice";

function IndividualList() {
  const dispatch = useDispatch();
  const params = useParams()
  const list = useSelector(state => state.list.lists.find(list => list.id === parseInt(params.id)));
  const listComponents = list.ThingsToDos.length ? list.ThingsToDos.map(bliss => <li>{bliss.thingName}</li>) : <h3>Nothing...yet...</h3>
  useEffect(() => {
    if (!list) {
      dispatch(fetchOneList(parseInt(params.id)))
    }
  })

  return (
    <>
    <div>
      <h1>{list.listName}</h1>
      <h3>by {list.User.username}</h3>
    </div>
    <div>
      <p>{list.listDescription}</p>
      <ul>
        {listComponents}
    </ul>
    </div>
    </>
  )
}

export default IndividualList
