import ProfilePicture from "../ProfilePicture"

export default function HeroSection({ pfpAlt, title, subtitle }: {
  pfpAlt: string,
  title: string,
  subtitle: string
}) {
  return <div id="me" className='w-screen h-screen flex items-center justify-around gap-10 p-10'>
    <ProfilePicture pfpAlt={pfpAlt} />
    <div>
      <h1 className='text-4xl font-bold mb-5'>
        {title}
      </h1>
      <h3>{subtitle}</h3>
    </div>
  </div>
}