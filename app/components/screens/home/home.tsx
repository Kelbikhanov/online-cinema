import { FC } from 'react'

import Heading from '@/components/ui/heading/heading'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'
import { toastr } from 'react-redux-toastr'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading
				title="Watch movies online"
				className="text-gray-200 mb-8 text-xl"
			/>
      <button onClick={() => toastr.success('Auth', 'you have auth') }>show</button>
		</Meta>
	)
}

export default Home
