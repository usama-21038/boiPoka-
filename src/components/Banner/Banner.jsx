import React from 'react';

const Banner = () => {
    return (
      <div className="hero bg-base-200 rounded-3xl py-20 px-8 mb-16">
  <div className="hero-content flex-col lg:flex-row-reverse gap-16 max-w-6xl">
    <img
      src="https://i.ibb.co/khHN7Pk/9780143454212.jpg"
      className="max-w-xs lg:max-w-sm rounded-lg"
      alt="Book cover"
    />
    <div>
      <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-12">Books to freshen up<br />your bookshelf</h1>
      <button className="btn bg-green-500 hover:bg-green-600 text-white border-0 px-8">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;