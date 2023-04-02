import { FC } from 'react'

import styles from '../admin.module.scss'

import CountUsers from './count-user'
import PopularMovie from './popular-movie'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularMovie />
		</div>
	)
}

export default Statistics
