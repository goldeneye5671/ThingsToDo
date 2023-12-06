import { useEffect, useState, useRef } from "react";
import BlissCreateForm from "./bliss-create-form";
import {
  useGetBlissQuery,
  useCreateBlissMutation,
  useUpdateBlissByIdMutation,
  useDeleteBlissByIdMutation,
} from "../../features/api/apiSlice";

import "./bliss-index.css";
import PageNavigation from "../shared/Section/pageNav/PageNavigation";
import ListContainer from "../shared/Section/listContainer/ListContainer";
import Header from "../shared/Section/headers/Header";
import Loading from "../shared/Status/Loading";
import Error from "../shared/Status/Error";
import Card from "../shared/Section/listContainer/card/card";
import { Link, Outlet } from "react-router-dom";

function BlissPage({ home }) {
  const [page, setPage] =  useState(0);
  const [active, setActive] = useState("");
  const scrollableRef = useRef(null);

  const {
    data: bliss,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch, 
    isFetching,
  } = useGetBlissQuery(page);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollableRef.current;
      if(element) {
        const scrolledToBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (scrolledToBottom && !isFetching) {
          console.log("fetching more data")
          setPage(page + 1)
        }
      }
    }
    const element = scrollableRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
    }
    return () => {
      const element = scrollableRef.current;
      if(element) {
        element.removeEventListener('scroll', handleScroll)
      }
    }
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
      <button onClick={onAddBlissClick}>Add Bliss</button>
      {addBliss && <BlissCreateForm setVisible={setAddBliss} />}
    </>
  );

  let content = bliss?.allThings?.map((bliss) => (
    <Card
      key={bliss?.id}
      id={bliss?.id}
      to={`/bliss/${bliss?.id}`}
      title={bliss?.thingName}
      content={<p className="description">{bliss?.thingDescription}</p>}
      showLink={true}
    />
  ));

  return (
    <div className="content">
      {isSuccess && (
        <div style={{ display: "flex" }}>
          <div
            style={{ overflowY: "scroll", maxHeight: "70vh", minWidth: "25%" }}
            ref={scrollableRef}
          >
            {!home ? (
              <Header
                title={title}
                searchBar={searchBar}
                actionButtons={actionButtons}
              />
            ) : (
              <Header title={title} />
            )}
            {bliss?.allThings?.map((bliss) => (
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
            ))}
          </div>
          <div
            style={{
              height: "80vh",
              overflowY: "scroll",
            }}
          >
            <Outlet />
          </div>
        </div>
      )}
      {isLoading && <Loading />}
      {isError && <Error error={error} />}
    </div>
  );
}

export default BlissPage;
