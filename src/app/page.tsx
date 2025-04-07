import ContactSection from '@/cpnts/sections/ContactSection'
import HeroSection from '@/cpnts/sections/HeroSection'
import ProjectsSection from '@/cpnts/sections/ProjectsSection'
import TopMenu from '@/cpnts/TopMenu'
import { useTranslations } from 'next-intl'

export default function HomePage() {
	const t = useTranslations('HomePage')

	return (
		<>
			<div className='z-50 fixed top-0 w-full p-2'>
				<TopMenu />
			</div>
			<HeroSection pfpAlt={t("pfpAlt")}
				title={t('title')}
				subtitle={t('subtitle')} />
			<ProjectsSection />
			<ContactSection />
		</>
	)
}
