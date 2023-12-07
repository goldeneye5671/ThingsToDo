import { useEffect, useState, useRef } from "react";
import BlissCreateForm from "./bliss-create-form";
import {
  useGetBlissQuery,
  useCreateBlissMutation,
  useUpdateBlissByIdMutation,
  useDeleteBlissByIdMutation,
  apiSlice,
} from "../../features/api/apiSlice";

import "./bliss-index.css";
import PageNavigation from "../shared/Section/pageNav/PageNavigation";
import ListContainer from "../shared/Section/listContainer/ListContainer";
import Header from "../shared/Section/headers/Header";
import Loading from "../shared/Status/Loading";
import Error from "../shared/Status/Error";
import Card from "../shared/Section/listContainer/card/card";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

function BlissPage({ home }) {
  const [page, setPage] = useState(0);
  const [active, setActive] = useState("");
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
        console.log(element.scrollHeight, element.scrollTop);
        console.log(element.scrollHeight - element.scrollTop);
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

  const onAddBlissClick = (e) => {
    e.preventDefault();
    // setAddBliss(!addBliss);
  };

  const [addBliss, setAddBliss] = useState(false);

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

  const actionButtons = (
    <>
      {/* <button onClick={onAddBlissClick}>Add Bliss</button> */}
      {/* {addBliss && <BlissCreateForm setVisible={setAddBliss} />} */}
    </>
  );

  let content =bliss?.allThings?.map((bliss) => (
    <div
      onClick={(e) => handleComponentClick(bliss?.id)}
      className={
        active === bliss?.id
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
    // <div className="main-content">
    //   {isSuccess && (
    //     <div style={{ display: "flex", height: "40svh"}}>
    //       {/* <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           minWidth: "35%",
    //           maxHeight: "90svh",
    //         }}
    //       > */}
    //         <div
    //           style={{ overflow: "hidden", maxHeight: "60%", minWidth: "25%" }}
    //           ref={scrollableRef}
    //         >
    //           {content}
    //         </div>
    //       {/* </div> */}
    //       <div
    //         style={{
    //           height: "90svh",
    //           overflowY: "scroll",
    //         }}
    //       >
    //         <Outlet />
    //       </div>
    //     </div>
    //   )}
    //   {isLoading && <Loading />}
    //   {isError && <Error error={error} />}
    // </div>

    <div style={{
      display: "flex",
      flexDirection: "row",
      height: "90svh"
    }} className="content">
      <div style={{
        height: "100%",
        width: "30%",
        overflowY: "scroll"
      }}ref={scrollableRef} className="left">
        <Header 
          title={<h1>Bliss</h1>}
          searchBar={<input type="text" placeholder="search"/>}
        />
        {content}
      </div>
      <div style={{
        width: "70%",
        height: "100%",
        overflowY: "scroll"
      }}className="right">
        <Outlet />
      </div>
    </div>
  );
}

export default BlissPage;
