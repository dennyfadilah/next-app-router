"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	const disableNavbar = ["/login", "/register"];

	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider>
				{!disableNavbar.includes(pathname) && <Navbar />}
				{children}
				</SessionProvider>
			</body>
		</html>
	);
}
