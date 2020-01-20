import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
            <Head>
                <title>Register</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
            </Head>        
                <Container>
                    <Component {...pageProps} />
                </Container>
            </>
        )
    }
}
export default MyApp