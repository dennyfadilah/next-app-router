"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
	const { push } = useRouter();
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	const handleRegister = async (e: any) => {
		e.preventDefault();

		setError("");
		setLoading(true);
		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					fullname: e.target.fullname.value,
					email: e.target.email.value,
					password: e.target.password.value,
				}),
			});

			const data = await res.json();

			if (res.status === 200) {
				e.target.reset();
				push("/login");
			} else {
				setError(data.message);
				setLoading(false);
			}
		} catch (err) {
			setError("Something went wrong");
			setLoading(false);
		}
	};
	return (
		<>
			<div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
				<div className="container mx-auto">
					<div className="max-w-md mx-auto my-10">
						<div className="text-center">
							<h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
								Sign up
							</h1>
						</div>
						<div className="m-7">
							{error && (
								<div
									className="w-full p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
									role="alert"
								>
									<span className="font-medium">Error! </span>
									{error}
								</div>
							)}
							<form onSubmit={(e) => handleRegister(e)}>
								<div className="mb-6">
									<label
										htmlFor="fullname"
										className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
									>
										Fullname
									</label>
									<input
										type="text"
										name="fullname"
										id="fullname"
										placeholder="Your Fullname"
										className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
									/>
								</div>
								<div className="mb-6">
									<label
										htmlFor="email"
										className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
									>
										Email Address
									</label>
									<input
										type="email"
										name="email"
										id="email"
										placeholder="example@mail.com"
										className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
									/>
								</div>
								<div className="mb-6">
									<label
										htmlFor="password"
										className="text-sm text-gray-600 dark:text-gray-400"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="Your Password"
										className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
									/>
								</div>
								<div className="mb-6">
									<button
										type="submit"
										disabled={isLoading}
										className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
									>
										{isLoading ? "Loading..." : "Sign up"}
									</button>
								</div>
								<p className="text-sm text-center text-gray-400">
									Have an account?{" "}
									<Link
										href="/login"
										className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
									>
										Sign in
									</Link>
									.
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
