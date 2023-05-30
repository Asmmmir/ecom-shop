import "../styles/globals.scss";
import Head from 'next/head'
import { Provider } from "react-redux";
import store from "../store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";


let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>E-commerce shop</title>
        <meta name='description' content="E-commerce shop" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
