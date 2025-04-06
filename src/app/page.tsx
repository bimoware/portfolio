import ProfilePicture from '@/cpnts/ProfilePicture'
import TopMenu from '@/cpnts/TopMenu'
import { useTranslations } from 'next-intl'

export default function HomePage() {
	const t = useTranslations('HomePage')

	return (
		<>
			<div className='fixed top-0 w-full p-2'>
				<TopMenu />
			</div>
			<div id="me" className='w-screen h-screen flex items-center justify-around gap-10 p-10'>
				<ProfilePicture pfpAlt={t("pfpAlt")} />
				<div>
					<h1 className='text-4xl font-bold mb-5'>
						{t('title')}
					</h1>
					<h3>{t('subtitle')}</h3>
				</div>
			</div>
			<div id="contact" className='w-screen h-screen flex items-center justify-around gap-10 p-10'>
				<ProfilePicture pfpAlt={t("pfpAlt")} />
				<div>
					<h1 className='text-4xl font-bold mb-5'>
						{t('title')}
					</h1>
					<h3>{t('subtitle')}</h3>
				</div>
			</div>
		</>
	)
}
