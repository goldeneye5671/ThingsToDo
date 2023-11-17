import { useState, useEffect } from "react"
import { usePagination } from "../../utils/pageHelper"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom";
import { 
  fetchLists,
  allLists,
  listStatus,
  listError
 } from "../../store/listSlice"
import ListList from "./list-list";
import PageNavigation from "../shared/Section/pageNav/PageNavigation";

function ListPage({home}) {
  const dispatch = useDispatch();
  const status = useSelector(listStatus)
  const error = useSelector(listError)
  const list = useSelector(allLists)
  
  
  let content;

  if (status === "pending") {
    content = (
      <div>
        <h2>Loading</h2>
        <p>Please Wait...</p>
      </div>
    )
  } else if (status === "fulfilled") {
    content = (
      <ListList home={home}/> 
    )
  } else if (status === "rejected") {
    content=(
      <div>
        <h2>error</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="content">
      <div className="home-main-header">
        <h1>Lists</h1>
      </div>
      {content}
      {
        !home && (
          <PageNavigation dispatcher={fetchLists} home={home}/>
        )
      }
    </div>
  )
}

export default ListPage
