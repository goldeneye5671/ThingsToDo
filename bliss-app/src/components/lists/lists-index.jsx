import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { 
  fetchLists,
  allLists,
  listStatus,
  listError
 } from "../../store/listSlice"

import Card from "../shared/Section/listContainer/card/card";

import PageNavigation from "../shared/Section/pageNav/PageNavigation";
import ListContainer from "../shared/Section/listContainer/ListContainer";
import Header from "../shared/Section/headers/Header";
import Loading from "../shared/Status/Loading";
import Error from "../shared/Status/Error";

function ListPage({home}) {
  const status = useSelector(listStatus)
  const error = useSelector(listError)
  const lists= useSelector(allLists)

  
  let content = status === "fulfilled" && lists?.lists?.map((list) => {
    const children = (
      <>
        <p>{list?.listDescription}</p>
        <h3>List Tags</h3>
        {
          list?.ThingsToDoListTags?.length ? 
            (
              <div>
                {list?.ThingsToDoListTags?.map(tag => {
                  return <p>{tag?.name}</p>
                })}
              </div>
            )
          :
            (<p>no tags</p>)
        }
      </>
    )
    return (
      <Card 
        key={list?.id} id={list?.id}
        to={`/lists/${list?.id}`}
        title={list?.listName}
        content={children}
        showLink={true}
      />
    )
    }
  )

  return (
  <>
    <div className="content">
        <Header title={<h1>Lists</h1>}/>
        {status === "fulfilled" && (<ListContainer home={home} content={content} />)}
        {status === "pending" && <Loading />}
        {status === "rejected" && <Error error={error}/>}
        {!home && (<PageNavigation dispatcher={fetchLists} home={home}/>)
        }
    </div>
  </>
  )
}

export default ListPage
