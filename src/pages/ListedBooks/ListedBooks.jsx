import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getList, READ_KEY, WISHLIST_KEY } from '../../utils/storage.js';
import { Helmet } from 'react-helmet-async';

const ListedBooks = () => {
    const loaderBooks = useLoaderData();
    const books = useMemo(() => loaderBooks ?? [], [loaderBooks]);
    const [activeTab, setActiveTab] = useState('read');
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
        const syncFromStorage = () => {
            const bookMap = new Map((books || []).map(b => [b.bookId, b]));
            const storedRead = getList(READ_KEY).map(item => bookMap.get(item.bookId) || item);
            const storedWishlist = getList(WISHLIST_KEY).map(item => bookMap.get(item.bookId) || item);
            setReadBooks(storedRead);
            setWishlistBooks(storedWishlist);
        };

        syncFromStorage();
        window.addEventListener('storage', syncFromStorage);
        return () => window.removeEventListener('storage', syncFromStorage);
    }, [books]);

    const currentList = activeTab === 'read' ? readBooks : wishlistBooks;

    return (
        <div className="space-y-6 pb-10">
            <Helmet>
                <title>ListedBook | Books</title>
            </Helmet>
            <div className="bg-base-200 rounded-2xl py-8 px-4 text-center">
                <h1 className="text-2xl font-semibold">Books</h1>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="join">
                    <button
                        className={`btn btn-sm join-item ${activeTab === 'read' ? 'bg-base-200 text-gray-800' : 'bg-white text-gray-600'}`}
                        onClick={() => setActiveTab('read')}
                    >
                        Read Books
                    </button>
                    <button
                        className={`btn btn-sm join-item ${activeTab === 'wishlist' ? 'bg-base-200 text-gray-800' : 'bg-white text-gray-600'}`}
                        onClick={() => setActiveTab('wishlist')}
                    >
                        Wishlist Books
                    </button>
                </div>
                <button className="btn btn-sm bg-green-500 hover:bg-green-600 text-white border-0">
                    Sort By
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <div className="space-y-4">
                {currentList.map(book => (
                    <div key={book.bookId} className="flex flex-col md:flex-row gap-4 p-4 border rounded-2xl bg-base-100">
                        <div className="w-full md:w-40 shrink-0 flex justify-center items-start">
                            <div className="bg-base-200 rounded-xl p-4">
                                <img src={book.image} alt={book.bookName} className="h-32 object-contain" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-2">
                            <h2 className="text-lg font-semibold">{book.bookName}</h2>
                            <p className="text-sm text-gray-600">By : {book.author}</p>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-700 items-center">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">Tag</span>
                                    {Array.isArray(book.tags) && book.tags.map(tag => (
                                        <span key={tag} className="badge bg-green-50 text-green-600 border-0 px-3 py-2">{tag}</span>
                                    ))}
                                </div>
                                <span className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"/></svg>
                                    Year of Publishing: {book.yearOfPublishing}
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19h16M4 5h16M7 9h10M7 15h6"/></svg>
                                    Publisher: {book.publisher}
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 4h9l5 5v11a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3v4a1 1 0 001 1h4"/></svg>
                                    Page: {book.totalPages}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-3 items-center text-sm">
                                <span className="badge bg-blue-50 text-blue-600 border-0 flex items-center gap-1">
                                    <span className="text-gray-700">Category:</span> {book.category}
                                </span>
                                <span className="badge bg-amber-50 text-amber-600 border-0 flex items-center gap-1">
                                    Rating: {book.rating}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Link to={`/book/${book.bookId}`} className="btn btn-sm bg-green-500 hover:bg-green-600 text-white border-0">View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListedBooks;
