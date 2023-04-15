import React from "react";
import { Events } from "./menus/events";
import { Footer } from "./menus/footer";
import { Header } from "./menus/header";
import { Schedule } from "./menus/schedule";

const CountdownPage = () => {
	return (
		<div>
			<Header />
			<Schedule />
			<Events />
			<Footer />
		</div>
	);
};

export default CountdownPage;
