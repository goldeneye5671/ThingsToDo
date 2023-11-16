import { useEffect, useState } from "react";
import BlissPage from "../bliss/bliss-index";
import BusinessPage from "../business/business-index";
import ListPage from "../lists/lists-index";
import "./home.css"

function Home() {

  const [whichVisible, setWhichVisible] = useState(1);

  useEffect(() => {
    console.log(whichVisible)
  })

  const onAddClicked = () => {
    if(whichVisible === 3) {
      setWhichVisible( whichVisible => 1)
    } else {
      setWhichVisible(whichVisible => whichVisible + 1)
    }
  }

  const onSubClicked = () => {
    if (whichVisible === 1) {
      setWhichVisible(() => 3)
    } else {
      setWhichVisible(whichVisible => whichVisible - 1)
    }
  }

  return (
    <div className="HomeMainContainer">
      <div className="HomeCallToAction">
        <img src="" alt="" />
        <h2>Find your next bliss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          qui non possimus sint officia, nostrum voluptatem id sapiente. Quidem
          blanditiis consequuntur accusantium aliquid incidunt? Quod repudiandae
          fuga architecto temporibus animi?
        </p>
      </div>

      <div></div>

      <button onClick={onSubClicked}>-</button>
      <div className="HomeContent">
        {whichVisible === 1 && <BlissPage home={true} />}
        {whichVisible === 2 && <ListPage home={true} />}
        {whichVisible === 3 && <BusinessPage home={true} />}
      </div>
      <button onClick={onAddClicked}>+</button>
    </div>
  );
}

export default Home;
