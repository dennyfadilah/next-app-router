import { getData } from "@/services/products";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default async function DetailProductPage(props: any) {
	const { params } = props;

	const product = await getData(
		`http://localhost:3000/api/product?id=${params.id}`,
	);


	return (
		<div className="container mx-auto my-10">
			<div className="w-1/2 mx-auto border border-green-700">
				<img
					src={product.data.image}
					alt=""
					className="w-full object-cover aspect-square col-span-2"
				/>
				<div className="bg-white p-4 px-6">
					<h3>{product.data.title}</h3>
					<p>{product.data.price}</p>
				</div>
			</div>
		</div>
	);
}
