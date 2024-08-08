"use client";

import { useState } from "react";

export default function AdminProductPage() {
	const [status, setStatus] = useState("");

	const revalidate = async () => {
		const res = await fetch(
			"http://localhost:3000/api/revalidate?tag=products&secret=QfQZwqho7x3sTXiSXqvnjg",
			{
				method: "POST",
			},
		);

		if (!res.ok) {
			setStatus("Revalidate Failed");
		} else {
			const response = await res.json();

			if (response.revalidate) {
				setStatus("Revalidate Success");
			}
		}
	};
	return (
		<>
			<div className="flex flex-col place-items-center mt-10 ">
				<h1>{status}</h1>
				<button
					type="button"
					onClick={() => revalidate()}
					className="bg-blue-500 hover:bg-blue-700 w-40 text-white font-bold py-2 px-4 rounded"
				>
					Revalidate
				</button>
			</div>
		</>
	);
}
