import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {

  return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-up" element={<SignUp />}/>
				<Route path="/sign-in" element={<SignIn />}/>
				<Route path="/bliss" element={<BlissPage />}>
					<Route path="/bliss/:id" element={<IndividualBliss/>}/>
				</Route>
				<Route path="/businesses" element={<BusinessPage />}></Route>
				<Route path="/lists" element={<ListPage />}>
					<Route path={"/lists/:id"} element={<IndividualList />} />
				</Route>
				<Route path="/users/:id" element={<UserPage />}/>
			</Routes>
		</>
	);
}

export default App
