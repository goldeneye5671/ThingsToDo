import { Route, Routes } from "react-router-dom";
import BusinessPage from "./components/business/business-index";
import BlissPage from "./components/bliss/bliss-index";
import NavBar from "./components/shared/navigation";
import IndividualBliss from "./components/bliss/IndividualBliss/individual-bliss";
import SignUp from "./components/auth/sign-up-form";
import SignIn from "./components/auth/sign-in";
import ListPage from "./components/lists/lists-index";
import IndividualList from "./components/lists/individual-list/list";

function App() {
	return (
		<>
			<NavBar/>
			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/sign-up" element={<SignUp />}/>
				<Route path="/sign-in" element={<SignIn />}/>
				<Route path="/bliss" element={<BlissPage />} />
				<Route path="/bliss/:id" element={<IndividualBliss/>}/>
				<Route path="/businesses" element={<BusinessPage />} />
				<Route path="/lists" element={<ListPage />} />
				<Route path="/lists/:id" element={<IndividualList />}/>
			</Routes>
		</>
	);
}

export default App;