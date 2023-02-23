import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { isTemplateExpression } from 'typescript'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'
import MaterialIcon from '@/components/ui/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				{item.icon && <MaterialIcon name={item.icon} />}
        
        <span>{item.title}</span>
      </Link>
		</li>
	)
}

export default MenuItem
