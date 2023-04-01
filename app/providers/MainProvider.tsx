import ReduxToast from "./ReduxToast";
import AuthProvider from "./auth-provider/AuthProvider";
import HeadProvider from "./head-provider/HeadProvider";
import Layout from "@/components/layout/Layout";
import { store } from "@/store/store";
import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { TypeComponentAuthFields } from "@/shared/types/auth.types";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

type MainProviderProps = {
	children: React.ReactNode;
}

type TypeAppProps = MainProviderProps & TypeComponentAuthFields

const MainProvider: FC<TypeAppProps> = ({ children, Component }: TypeAppProps) => {
  return (
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReduxToast />
          <AuthProvider Component={Component}>
            <Layout>{children}</Layout>
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  );
};

export default MainProvider;
