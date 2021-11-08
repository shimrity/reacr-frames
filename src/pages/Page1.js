import React from "react";
import { Link } from "../react-frames";
import Page2 from "./Page2";

function Page1() {
	return (
		<>
			<h2>Page 1: Look ma, no CSS!</h2>
			<Link target="main" component={Page2}>
				Go to page 2
			</Link>
		</>
	);
}

export default Page1;
