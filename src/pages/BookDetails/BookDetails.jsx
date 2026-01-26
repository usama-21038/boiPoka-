import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { isInList, toggleBookInList, READ_KEY, WISHLIST_KEY } from '../../utils/storage.js';

const BookDetails = () => {
    const book = useLoaderData();
    const [inRead, setInRead] = useState(false);
    const [inWishlist, setInWishlist] = useState(false);

    useEffect(() => {
        setInRead(isInList(READ_KEY, book.bookId));
        setInWishlist(isInList(WISHLIST_KEY, book.bookId));
    }, [book]);

    const handleRead = () => {
        const { added } = toggleBookInList(READ_KEY, book);
        setInRead(added);
    };

    const handleWishlist = () => {
        const { added } = toggleBookInList(WISHLIST_KEY, book);
        setInWishlist(added);
    };

    return (
        <div className="py-12">
            <div className="bg-gray-100 rounded-2xl p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Book Image */}
                    <div className="flex justify-center items-center bg-gray-100">
                        <img 
                            src={book.image} 
                            alt={book.bookName} 
                            className="max-w-md rounded-2xl shadow-lg object-contain"
                        />
                    </div>

                    {/* Book Details */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{book.bookName}</h1>
                        <p className="text-lg text-gray-600 mb-6 pb-6 border-b">By : {book.author}</p>
                        
                        <p className="text-lg mb-6 pb-6 border-b">{book.category}</p>
                        
                        <div className="mb-6">
                            <p className="font-semibold mb-3">Review :</p>
                            <p className="text-gray-700 leading-relaxed">{book.review}</p>
                        </div>

                        <div className="flex flex-wrap gap-4 items-center mb-6 pb-6 border-b">
                            <span className="font-semibold">Tag</span>
                            {Array.isArray(book.tags) && book.tags.map(tag => (
                                <span key={tag} className="badge bg-green-50 text-green-600 border-0 px-4 py-3 font-medium">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="space-y-3 mb-8">
                            <div className="flex gap-16">
                                <span className="text-gray-600">Number of Pages:</span>
                                <span className="font-semibold">{book.totalPages}</span>
                            </div>
                            <div className="flex gap-16">
                                <span className="text-gray-600">Publisher:</span>
                                <span className="font-semibold">{book.publisher}</span>
                            </div>
                            <div className="flex gap-16">
                                <span className="text-gray-600">Year of Publishing:</span>
                                <span className="font-semibold">{book.yearOfPublishing}</span>
                            </div>
                            <div className="flex gap-16">
                                <span className="text-gray-600">Rating:</span>
                                <span className="font-semibold">{book.rating}</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button onClick={handleRead} className="btn bg-white border-gray-300 hover:bg-gray-50 px-8">
                                {inRead ? 'Remove from Read' : 'Read'}
                            </button>
                            <button onClick={handleWishlist} className="btn bg-cyan-400 hover:bg-cyan-500 text-white border-0 px-8">
                                {inWishlist ? 'Remove from Wishlist' : 'Wishlist'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
