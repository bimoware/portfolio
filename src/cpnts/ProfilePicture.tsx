import Image from "next/image";

export default function ProfilePicture({ pfpAlt }: { pfpAlt: string }) {
  return <div className='relative min-w-60 w-1/3 aspect-square group'>
    {[true, false].map((bool) => (
      <Image
        key={String(bool)}
        width='1000'
        height='1000'
        src={bool ? '/pfp.png' : '/pfp2.png'}
        alt={pfpAlt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity
                    rounded-4xl select-none
                    ${!bool && 'opacity-0 group-hover:opacity-100 group-hover:duration-300'}`}
      />
    ))}
  </div>
}