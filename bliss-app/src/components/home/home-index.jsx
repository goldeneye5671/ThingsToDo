import BlissPage from "../bliss/bliss-index";
import BusinessPage from "../business/business-index";
import ListPage from "../lists/lists-index";

function Home() {
  return (
    <div>
      <div>
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

      <div>
        <BlissPage />
        <BusinessPage />
        <ListPage />
      </div>
    </div>
  );
}

export default Home;
