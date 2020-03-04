import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../src/redux/store';
import { Provider } from 'react-redux';

class MyApp extends App {
    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <>
            <Head>
                <title>Register</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
            </Head>        
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
            </>
        )
    }
}
export default withRedux(initializeStore)(MyApp);


