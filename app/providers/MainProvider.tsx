import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from '@/components/layout/Layout'
import ReduxToast from './ReduxToast'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import HeadProvider from './head-provider/HeadProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<{children: React.ReactNode}> = ({ children }) => {
	return (
		<HeadProvider>
		<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<ReduxToast />
			<Layout>{children}</Layout>
		</QueryClientProvider>
		</Provider>
		</HeadProvider>
	)
}

export default MainProvider
