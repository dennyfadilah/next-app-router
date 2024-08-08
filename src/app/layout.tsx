"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [state, setState] = useState(0);
	const pathname = usePathname();

	const disableNavbar = ["/login", "/register"];

	return (
		<html lang="en">
			<body className={inter.className}>
				{!disableNavbar.includes(pathname) && <Navbar />}
				{/* <div>Layout {state}</div>
				<button type="button" onClick={()=> setState(state+1)}>Klik</button> */}
				{children}
			</body>
		</html>
	);
}
