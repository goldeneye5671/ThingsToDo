import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneList, selectListById } from "../../../store/listSlice";
import ListEntry from "./list-entry"
import "./list.css"
import Header from "../../shared/Section/headers/Header";
import SearchBox from "../../user/forms/SearchBox";

function IndividualList() {
  const dispatch = useDispatch();
  const params = useParams()
  const list = useSelector(state => state?.list?.lists.find(list => list.id === parseInt(params.id)));
  const listComponents = list?.ThingsToDos?.length ? 
      list.ThingsToDos.map(bliss => <ListEntry key={bliss.id} entryTitle={bliss.thingName} entryAdded={bliss.createdAt}/>) 
    : 
      <h3>Nothing...yet...</h3>
  const title = (
    <>
      <h1>{list?.listName}</h1>
      <h3>by {list?.User.username}</h3>
    </>
  )

  const description = (
    <p>{list?.listDescription}</p>
  )
  
  useEffect(() => {
    if (!list) {
      dispatch(fetchOneList(parseInt(params.id)))
    }
  })

  const handleAdd = (bliss) => {
    console.log(bliss)
  }

  const renderResults = (bliss, visible) => {
    return (
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "5px", borderRadius: "15px"}}>
        <p style={{minWidth: "350px", color: "black"}}>{bliss?.thingName}</p>
        <button onClick={e => {e.preventDefault(); handleAdd(bliss); visible(false)}}>+</button>
      </div>
    )
  }

  return (
    <div className="content">
      <Header 
        title={title}
        description={description}
        searchBar={<SearchBox url={"/api/thingstodo/search"} renderResults={renderResults} />}
      />

      <div className="list-entry-container">
        {listComponents}
      </div>
    </div>
  )
}

export default IndividualList
