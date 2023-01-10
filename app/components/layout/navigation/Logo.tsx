import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import LogoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link className="px-layout mb-10 block" href="/">
			<Image
				alt="logo"
				src={LogoImage}
				width={247}
				height={34}
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
