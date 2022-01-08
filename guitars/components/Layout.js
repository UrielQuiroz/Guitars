import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import Header from './Header';
import Footer from './Footer';

const Layout = ({children, pagina}) => {
    return (
        <div> 
            <Head>
                <title>GuitarLA - {pagina}</title>
                <meta name="description" content="Sitio Web de Venta de Guitarras" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Header />
            {children}

            <Footer/>
        </div>
    )
}

export default Layout
