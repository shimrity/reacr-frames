import React from "react";

function Home() {
	return (
		<>
			<dl>
				<dt>What is this?</dt>
				<dd>
					An experiment to render a React component inside a HTML{" "}
					<code>&lt;frame&gt;</code> tag.
				</dd>
			</dl>
			<dl>
				<dt>Should I use this?</dt>
				<dd>
					No, because the Internet{" "}
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame"
						target="_blank"
						rel="noopener noreferrer"
					>
						says so
					</a>
					.
				</dd>
			</dl>

			<dl>
				<dt>HTML4.0 is older than I am, what are frames?</dt>
				<dd>
					Frames are an old-school and obsolete part of the HTML spec.
					They are officially no longer supported in HTML5.0, but
					still work in most browsers. Frames were used to divide the
					page into multiple views, each displaying an independent
					window. This was a popular method to have a layout where the
					header and menu were always visible, but the content of the
					main frame would be replaced when the user clicks a link.
				</dd>
			</dl>

			<dl>
				<dt>So why do frames still work?</dt>
				<dd>
					Contrary to most other pieces of software, browsers are
					mostly backwards compatible. However, support may be dropped
					at any point in the near future.
				</dd>
			</dl>

			<dl>
				<dt>Why are frames no longer supported?</dt>
				<dd>
					Frames have{" "}
					<a
						href="https://www.nngroup.com/articles/why-frames-suck-most-of-the-time/"
						target="_blank"
						rel="noopener noreferrer"
					>
						quite some issues
					</a>
					. It's hard to return to exactly the same page that the user
					has bookmarked, printing frames is hard and search engines
					also have trouble with them.
				</dd>
			</dl>

			<dl>
				<dt>Why would anyone do this?</dt>
				<dd>I was bored and curious.</dd>
			</dl>
		</>
	);
}

export default Home;
