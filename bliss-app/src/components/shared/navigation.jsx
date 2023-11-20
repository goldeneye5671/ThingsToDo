import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import { useEffect } from "react";

function NavBar() {

	const sessionState = useSelector(state => state.session.user);

	return (
		<nav>
			<NavLink
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
				to={"/"}
			>
				Home
			</NavLink>
			<br></br>
			<NavLink
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
				to={"/bliss"}
			>
				Bliss
			</NavLink>
			<br></br>
			<NavLink
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
				to={"/lists"}
			>
				Lists
			</NavLink>
			<br></br>
			<NavLink
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
				to={"/businesses"}
			>
				Businesses
			</NavLink>
			<br></br>

			{
				sessionState?.user ? (
					<NavLink
					className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""}
					to={`/users/${sessionState?.user?.id}`}>
						{sessionState?.user?.username}
					</NavLink>
				)
				:
				(
					<>
						<NavLink
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
							to={"/sign-in"}
						>
							Sign In
						</NavLink>
						<br></br>
						<NavLink
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
							to={"/sign-up"}
						>
							Sign Up
						</NavLink>
						<br></br>
					</>
				)
			}

		</nav>
	);
}

export default NavBar;
