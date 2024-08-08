"use client";

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: { error: Error; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<>
			<div>
				<h2>Somethin went wrong!</h2>
                <button type="button" onClick={()=> reset()}>Try Again</button>
			</div>
		</>
	);
}
