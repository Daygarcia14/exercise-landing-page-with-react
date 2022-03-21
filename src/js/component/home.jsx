import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";

const Home = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<Navbar />
			</div>
			<div className="container-fluid px-5 ">
				<Jumbotron />
				<div className="row pt-4 m-0 ">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div
				className="container-fluid btn btn-dark p-4 mt-3"
				style={{ color: "white" }}>
				Copyright © Your Website 2018
			</div>
		</>
	);
};

export default Home;
