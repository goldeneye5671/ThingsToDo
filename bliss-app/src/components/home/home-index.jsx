import { useEffect, useState } from "react";
import BlissPage from "../bliss/bliss-index";
import BusinessPage from "../business/business-index";
import ListPage from "../lists/lists-index";
import Gallery from "./gallery/Gallery";
import Card from "../shared/Section/listContainer/card/card";

function Home() {

  const styling = {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    overflowX: "scroll",
    margin: "0 auto",
    gap: "15px"
  }

  return (
    <main>
      <div className="showcase">
        <Gallery />
      </div>
      <div className="bliss">
        <h2>Bliss</h2>
        <p>Some popular bliss' people are searching for</p>
        <div
          style={styling}
        >
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
        </div>
      </div>
      <div className="experiences">
      <h2>Experiences</h2>
        <p>Here are some popular experiences</p>
        <div style={styling}>
        <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
        </div>
      </div>
      <div className="lists">
      <h2>Lists</h2>
        <p>Here are some lists to get you started</p>
        <div style={styling}>
        <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
          <Card 
            title={"Bliss Card"}
            content={"Lorem ipsum testing abc 123 yes"}
          />
        </div>
      </div>

    </main>
  );
}

export default Home;
