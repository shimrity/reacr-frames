import React from "react";
import Link from "../react-frames/Link";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { useStyle } from "../react-frames";

function Menu() {
	useStyle("menu.css");

	return (
		<ul>
			<li>
				<Link target="main" component={Home}>
					Home
				</Link>
			</li>
			<li>
				<Link target="main" component={Page1}>
					Page 1
				</Link>
			</li>
			<li>
				<Link target="main" component={Page2}>
					Page 2
				</Link>
			</li>
		</ul>
	);
}

export default Menu;
