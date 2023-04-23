import React from "react";
import { Events } from "./menus/events";
import { Footer } from "./menus/footer";
import { Gallery } from "./menus/gallery";
import { Header } from "./menus/header";
import { Schedule } from "./menus/schedule";

const CountdownPage = () => {
	return (
		<div>
			<Header />
			<Schedule />
			<Events />
			<Gallery />
			<Footer />
		</div>
	);
};

export default CountdownPage;
