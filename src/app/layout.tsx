import { Outfit } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import './globals.css'

const outfit = Outfit({
	subsets: ['latin']
})

// or Dynamic metadata
// Define LayoutProps type
type LayoutProps = {
	params: Promise<{
		locale: string;
	}>;
};

export async function generateMetadata({ params }: LayoutProps) {

	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'Metadata' });

	return {
		title: t("title"),
		description: t("description"),
		icons: 'code.svg'
	}
}
export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getLocale()

	return (
		<html lang={locale} className={outfit.className}>
			<body>
				<NextIntlClientProvider>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
