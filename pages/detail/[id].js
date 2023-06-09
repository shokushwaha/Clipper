import Head from "next/head";
import React from "react";

import Header from "../../components/Header";
import DetailFeed from "../../components/detailsPage/DetailFeed";

const DetailsPage = () => {
    return (
        <div>
            <Head>
                <title>Clipper</title>
                <meta name="description" content="Clipper - Short video platform" />
                <link
                    rel="icon"
                    href="https://th.bing.com/th/id/R.67bc88bb600a54112e8a669a30121273?rik=vsc22vMfmcSGfg&pid=ImgRaw&r=0"
                />
            </Head>
            {/*  <Header isShow={true} /> */}
            <DetailFeed />
        </div>
    );
};

export default DetailsPage;
