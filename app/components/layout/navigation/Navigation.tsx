import { FC } from 'react'
import Logo from './Logo'
import MenuContainer from './menu-container/MenuContainer'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
