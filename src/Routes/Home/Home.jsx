import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../../pages/Books/Books';
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
        <Helmet>
            <title>Book Vibe | Home</title>
        </Helmet>
            <Banner></Banner>
            <Books books={data}></Books>
        </div>
    );
};

export default Home;