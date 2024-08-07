"use client";

import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
	const [state, setState] = useState(0);

	return (
		<>
			{/* <h1>Template {state}</h1>
            <button type="button" onClick={()=> setState(state+1)}>Klik</button> */}
			<div>{children}</div>
		</>
	);
}
