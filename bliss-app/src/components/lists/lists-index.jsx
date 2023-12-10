import { useState, useEffect, useRef } from "react"

import { useDispatch } from "react-redux";
import { apiSlice } from "../../features/api/apiSlice";

import Card from "../shared/Section/listContainer/card/card";

import PageNavigation from "../shared/Section/pageNav/PageNavigation";
import ListContainer from "../shared/Section/listContainer/ListContainer";
import Header from "../shared/Section/headers/Header";
import Loading from "../shared/Status/Loading";
import Error from "../shared/Status/Error";

import { Link, useParams } from "react-router-dom";
import { useGetListsQuery } from "../../features/api/apiSlice";
import { Outlet } from "react-router-dom";

function ListPage({home}) {

  const [page, setPage] = useState(0)
  const dispatch = useDispatch();
  const params = useParams()
  const scrollableRef = useRef(null)

  const {
    data: lists,
    isLoading,
    isSuccess,
    isError,
    error,
    isFetching
  } = useGetListsQuery(page)
  
  useEffect(() => {
    const handleScroll = () => {
      const element = scrollableRef.current;
      if (element) {
        const scrolledToBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 1;
        if (scrolledToBottom && !isFetching) {
          console.log("fetching more data");
          setPage(page + 1);
        } else {
          console.log("Not at bottom");
        }
      }
    };
    const element = scrollableRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }
    return () => {
      const element = scrollableRef.current;
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
      dispatch(apiSlice.util.invalidateTags(["getBliss"]));
    };
  }, [page, isFetching]);

  const handleComponentClick = (componentId) => {
    setActive(componentId);
  };


  let content = lists?.map((list) => (
    <div
      onClick={e => {}}
      className={
        parseInt(params?.id) === list?.id
          ? "active bliss-link-container"
          : "bliss-link-container"
      }
      key={`list-${list?.id}`}
    >
      <Link to={`/lists/${list?.id}`}>
        <h1>{list?.listName}</h1>
        <div style={
                {
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                  width: "100%",
                  overflow: "scroll",
                  border: "solid red 1px"
                }}>
          {list?.ThingsToDoListTags?.length ? list?.ThingsToDoListTags?.map(tag => (
            <>
              <div
                style={{
                  border: "solid black 1px",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  borderRadius: "30px",
                  width: "fit-content",
                  padding: "0 15px",
                  fontSize: "10px",
                }}
              >
                <p>{tag?.name}</p>
              </div>
            </>
          )) : (<p>none</p>)}
        </div>
      </Link>
    </div>
  ))

  return (
  <>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      height: "90svh"
    }}
  >
    <div
    ref={scrollableRef}
    style={{
        height: "100%",
        width: "30%",
        overflowY: "scroll"
    }}
    >
      <Header 
        title={<h1>Lists</h1>}
        searchBar={<input placeholder="search"/>}
      />
      {content}
    </div>
    <div
    style={{
      width: "70%",
      height: "100%",
      overflowY: "scroll"
    }}
    >
      {params?.id ? (<Outlet />) : (<><h1>Please select content</h1>
            <p>Choose a list from the right to see its content</p></>)}
    </div>
  </div>
  </>
  )
}

export default ListPage
