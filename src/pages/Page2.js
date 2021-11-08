import React from "react";
import { Link } from "../react-frames";
import Page1 from "./Page1";

function Page2() {
	return (
		<>
			<h2>Page 2: Look ma, no router!</h2>
			<Link target="main" component={Page1}>
				Go to page 1
			</Link>
		</>
	);
}

export default Page2;
