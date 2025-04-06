import Image from "next/image";

export default function Home() {
	return <>
		<div className="w-screen h-screen flex items-center justify-center gap-10 p-10">
			<div className="relative w-1/3 aspect-square group">
				{
					[true, false]
						.map(bool => <Image
							key={String(bool)}
							width="1000"
							height="1000"
							src={bool ? "/pfp.png" : "/pfp2.png"}
							alt="Profile"
							className={`absolute inset-0 w-full h-full object-cover transition-opacity
								rounded-4xl
								${bool ? "opacity-100" : "opacity-0 group-hover:opacity-100 duration-300"}`}
						/>)
				}
			</div>
			<h1 className="text-4xl sm:text-5xl font-bold leading-snug">
				If you're just looking for basic websites...
				Wrong dev :/
			</h1>

		</div>
	</>
}


