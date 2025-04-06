import Redacted from "@/cpnts/Redacted";
import ScrollBottomArrow from "@/cpnts/ScrollBottomArrow";
import Image from "next/image";

export default function Home() {
	return <>
		<div className="w-screen h-screen flex items-center justify-around gap-10 p-10">
			<div className="relative min-w-60 w-1/3 aspect-square group">
				{
					[true, false]
						.map(bool => <Image
							key={String(bool)}
							width="1000"
							height="1000"
							src={bool ? "/pfp.png" : "/pfp2.png"}
							alt="Profile"
							className={`absolute inset-0 w-full h-full object-cover transition-opacity
								rounded-4xl select-none
								${!bool && "opacity-0 group-hover:opacity-100 group-hover:duration-300"}`}
						/>
						)
				}
			</div>
			<div>
				<h1 className="text-4xl font-bold mb-5">
					If you don't like basic websites, me neither.
				</h1>
				<h3>
					Hi! My name is <Redacted>Bimo</Redacted>, I'm 18 and a passionate web dev freelancer from Morocco. I enjoy making websites using Next.js
				</h3>
			</div>
		</div>
		<div className="absolute bottom-2 flex justify-center items-end w-screen h-screen">
			<ScrollBottomArrow />
		</div>
	</>
}