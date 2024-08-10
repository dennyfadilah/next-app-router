import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	const router = useRouter();
	const { data: session, status }: { data: any; status: string } = useSession();

	return (
		<nav className="flex bg-gray-800 py-2 px-5 justify-between">
			<div className="flex">
				<h1 className="text-white">Navbar</h1>

				<ul className="ml-5 hidden md:flex">
					<Link href="/">
						<li
							className={`mr-3 ${pathname === "/" ? "text-blue-300" : "text-white"} cursor-pointer`}
						>
							Home
						</li>
					</Link>
					<Link href="/about">
						<li
							className={`mr-3 ${pathname === "/about" ? "text-blue-300" : "text-white"} cursor-pointer`}
						>
							About
						</li>
					</Link>
					<Link href="/about/profile">
						<li
							className={`mr-3 ${pathname === "/about/profile" ? "text-blue-300" : "text-white"} cursor-pointer`}
						>
							Profile
						</li>
					</Link>
				</ul>
			</div>

			<div>
				{status === "authenticated" ? (
					<div className="flex items-center gap-2">
						<h4 className="text-white">{session?.user?.fullname}</h4>
						<button
							type="button"
							className="bg-blue-500 text-white rounded-md px-3 text-sm h-7 cursor-pointer"
							onClick={() => signOut()}
						>
							Logout
						</button>
					</div>
				) : (
					<>
						<button
							type="button"
							className="bg-blue-500 text-white rounded-md px-3 text-sm h-7 cursor-pointer"
							onClick={() => signIn()}
						>
							Login
						</button>
					</>
				)}
			</div>
		</nav>
	);
}
