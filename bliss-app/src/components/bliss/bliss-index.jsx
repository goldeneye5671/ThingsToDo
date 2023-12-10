import { useEffect, useState, useRef } from "react";
import BlissCreateForm from "./bliss-create-form";
import {
  useGetBlissQuery,
  useCreateBlissMutation,
  useUpdateBlissByIdMutation,
  useDeleteBlissByIdMutation,
  apiSlice,
} from "../../features/api/apiSlice";

import { useParams } from "react-router-dom";

import "./bliss-index.css";
import Header from "../shared/Section/headers/Header";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loading from "../shared/Status/Loading";

function BlissPage({ home }) {
  const params = useParams();
  const [page, setPage] = useState(0);
  const scrollableRef = useRef(null);
  const dispatch = useDispatch();

  const {
    data: bliss,
    isLoading,
    isSuccess,
    isError,
    error,
    isFetching,
  } = useGetBlissQuery(page);

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

  const title = <h1>Bliss</h1>;

  const searchBar = (
    <div>
      <input
        type="text"
        name="bliss-search"
        id="bliss-search"
        placeholder="Search"
      />
    </div>
  );

  let content = bliss?.allThings?.map((bliss) => (
    <div
      className={
        parseInt(params?.id) === bliss?.id
          ? "active bliss-link-container"
          : "bliss-link-container"
      }
      key={`bliss-${bliss?.id}`}
    >
      <Link to={`/bliss/${bliss?.id}`}>
        <h1>{bliss?.thingName}</h1>
      </Link>
    </div>
  ))

  return (

    <div 
    style={{
      display: "flex",
      flexDirection: "row",
      height: "90svh"
    }} className="content">
      <div 
        style={{
        height: "100%",
        width: "30%",
        overflowY: "scroll"
      }}ref={scrollableRef} className="left">
        <Header 
          title={<h1>Bliss</h1>}
          searchBar={<input type="text" placeholder="search"/>}
        />
        {content}
        {isLoading && (<Loading />)}
      </div>
      <div 
      style={{
        width: "70%",
        height: "100%",
        overflowY: "scroll"
      }}className="right">
        {
          params?.id ? (<Outlet />) : (<>
            <h1>Please select content</h1>
            <p>Choose a bliss from the right to see its content</p>
          </>)
        }
      </div>
    </div>
  );
}

export default BlissPage;
