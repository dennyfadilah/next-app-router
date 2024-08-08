import { type NextRequest, NextResponse } from "next/server";

const data = [
	{
		id: 1,
		title: "Nike Vaporly 3 Electric",
		price: 3559000,
		image:
			"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7d09109-ca02-4bc9-97b3-3d4c99c3a0c2/vaporfly-3-electric-road-racing-shoes-ZR5Glm.png",
	},
	{
		id: 2,
		title: "Nike Invicible 3 Electric",
		price: 2999000,
		image:
			"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ae14a560-14f7-4dfc-be44-023a518c77c1/invincible-3-electric-road-running-shoes-nhn3wf.png",
	},
	{
		id: 3,
		title: "Air Jordan 1 Low",
		price: 1729000,
		image:
			"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/86991b52-33a2-4e41-aace-c05510832f84/air-jordan-1-low-shoes-6Q1tFM.png",
	},
];

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");

	if (id) {
		const detailProduct = data.find((item) => item.id === Number(id));

		if (detailProduct) {
			return NextResponse.json({
				status: 200,
				message: "Success",
				data: detailProduct,
			});
		}
		return NextResponse.json({ status: 404, message: "Not Found", data: {} });
	}

	return NextResponse.json({ status: 200, message: "Success", data });
}
