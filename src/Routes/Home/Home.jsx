import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../../pages/Books/Books';
import { useLoaderData } from 'react-router';


const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <Books books={data}></Books>
        </div>
    );
};

export default Home;