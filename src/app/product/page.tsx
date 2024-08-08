import { getData } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = { params: { slug: string } };
export default async function ProductPage({ params }: ProductPageProps) {
	const products = await getData("http://localhost:3000/api/product");
	// console.log(products);
	return (
		<div className="p-5">
			<h1 className="text-3xl font-bold text-center">
				{params.slug ? "Detail Product Page" : "Product Page"}
			</h1>

			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center my-8">
				{(products.data?.length ?? products.length) > 0 &&
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					(products.data ?? products).map((product: any) => (
						<div
							className="relative  w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
							key={product.id}
						>
							<Link
								href={`/product/detail/${product.id}`}
								className="flex justify-center items-center h-60"
							>
								<Image
									className="object-contain w-full h-60"
									src={product.image}
									alt={product.title}
									width={150}
									height={150}
								/>
							</Link>

							<span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
								Sale
							</span>

							<div className="mt-4 px-5 pb-5">
								<Link href={`/product/detail/${product.id}`}>
									<h5 className="text-xl font-semibold tracking-tight text-slate-900 truncate pb-5">
										{product.title}
									</h5>
								</Link>

								<div className="flex items-center justify-between">
									<p>
										<span className="text-1xl font-bold text-slate-900">
											{product.price.toLocaleString("id-ID", {
												style: "currency",
												currency: "IDR",
												minimumFractionDigits: 0,
												maximumFractionDigits: 0,
											})}
										</span>

										{/* <span className="text-sm text-slate-900 line-through">
  										$299
  									</span> */}
									</p>

									<Link
										href="#"
										className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
									>
										<div className="md:hidden lg:block">
											<svg
												aria-label="Add to cart"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												className="mr-2 h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
												/>
											</svg>
										</div>
										<div className="hidden md:block">Add to cart</div>
									</Link>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
