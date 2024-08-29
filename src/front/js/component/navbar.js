import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark text-light">
			<div className="container">
				<Link to="/">
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-outline-success">LOGIN</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};