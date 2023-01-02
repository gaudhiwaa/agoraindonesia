import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import LogoDark from '@/data/agoraDarkMode.png'
import LogoLight from '@/data/agoraLightMode.png'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState } from 'react'

const LayoutWrapper = ({ children }) => {
  // const [theme, setTheme] = useState("light")
  const { theme, setTheme, resolvedTheme } = useTheme()
  return (
    <SectionContainer>
      <div className="-mt-14 flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between ">
                <div className="mr-3 ">
                  {/* <Logo /> */}
                  {theme === 'dark' ? (
                    <Image
                      alt={'Agora Indonesia'}
                      src={LogoLight}
                      // className="object-cover object-center md:h-36 lg:h-48"
                      width={125}
                      height={125}
                    />
                  ) : (
                    <Image
                      alt={'Agora Indonesia'}
                      src={LogoDark}
                      // className="object-cover object-center md:h-36 lg:h-48"
                      width={125}
                      height={125}
                    />
                  )}
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {/* {siteMetadata.headerTitle} */}
                  </div>
                ) : // siteMetadata.headerTitle
                null}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 "
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
