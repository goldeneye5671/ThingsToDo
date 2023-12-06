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
        <p className="description">{list?.listDescription}</p>
        {
          list?.ThingsToDoListTags?.length ? 
            (
              <div style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "scroll"
              }}>
                {list?.ThingsToDoListTags?.map(tag => {
                  return (
                    <span style={{
                      border: "solid black 1px",
                      borderRadius: "30px",
                      padding: "0px 30px"
                    }} key= {`tag-${tag?.id}`}>
                      <p>{tag?.name}</p>
                    </span>
                  )
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
