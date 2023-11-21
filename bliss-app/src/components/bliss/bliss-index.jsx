import { useState } from "react";
import BlissCreateForm from "./bliss-create-form";
import { useSelector } from "react-redux";
import {
  allBliss,
  blissError,
  blissStatus,
  cleanBliss,
  fetchBliss,
} from "../../store/blissSlice";

import PageNavigation from "../shared/Section/pageNav/PageNavigation";
import ListContainer from "../shared/Section/listContainer/ListContainer";
import Header from "../shared/Section/headers/Header";
import Loading from "../shared/Status/Loading";
import Error from "../shared/Status/Error";
import Card from "../shared/Section/listContainer/card/card";

function BlissPage({ home }) {
  const bliss = useSelector(allBliss);
  const status = useSelector(blissStatus);
  const error = useSelector(blissError);

  const onAddBlissClick = (e) => {
    e.preventDefault();
    setAddBliss(!addBliss);
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
      <button>{"->"}</button>
    </>
  );

  let content =
    status === "fulfilled" &&
    bliss.map((bliss) => (
      <Card
        key={bliss?.id}
        id={bliss?.id}
        to={`/bliss/${bliss?.id}`}
        // image={}
        title={bliss?.thingName}
        content={bliss?.thingDescription}
        showLink={true}
      />
    ));

  return (
    <div className="content">
      {!home ? (
        <Header
          title={title}
          searchBar={searchBar}
          actionButtons={actionButtons}
        />
      ) : (
        <Header title={title} />
      )}
      {status === "fulfilled" && <ListContainer content={content} />}
      {status === "pending" && <Loading />}
      {status === "rejected" && <Error error={error} />}
      {!home && <PageNavigation dispatcher={fetchBliss} home={home} />}
    </div>
  );
}

export default BlissPage;
