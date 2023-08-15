import "./App.css";
import { Route, Routes } from "react-router-dom";
import BusinessPage from "./components/business/business-index";
import BlissPage from "./components/bliss/bliss-index";
import NavBar from "./components/shared/navigation";
import IndividualBliss from "./components/bliss/IndividualBliss/individual-bliss";

function App() {
	return (
		<>
			<NavBar/>
			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/bliss" element={<BlissPage />} />
				<Route path="/bliss/:id" element={<IndividualBliss/>}/>
				<Route path="/businesses" element={<BusinessPage />} />
			</Routes>
		</>
	);
}

export default App;
