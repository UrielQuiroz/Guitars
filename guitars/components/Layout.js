import React from 'react';
import Head from 'next/head';
import Link from 'next/link'

const Layout = ({children, pagina}) => {
    return (
        <div> 
            <Head>
                <title>GuitarLA - {pagina}</title>
                <meta name="description" content="Sitio Web de Venta de Guitarras" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {children}
        </div>
    )
}

export default Layout
