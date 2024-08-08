export default function Loading() {
	return (
		<div className="px-5">
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center my-8">
				{Array.from({ length: 3 }).map((_, index) => (
					<div
						className="relative  w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
					>
						<div className="flex justify-center items-center h-60 bg-gray-500 animate-pulse" />

						<span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center px-10 py-2" />

						<div className="mt-4 px-5 pb-5">
							<div className="pb-5">
								<span className=" bg-slate-900 px-28 py-2 animate-pulse" />
							</div>

							<div className="flex items-center justify-between">
								<span className="bg-slate-900 px-10 py-3 animate-pulse" />

								<div className="flex items-center rounded-md bg-slate-900 px-10 py-5 text-center animate-pulse" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
