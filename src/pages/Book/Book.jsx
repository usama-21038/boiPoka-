import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    if (!book) return null;
    return (
        <Link to={`/book/${book.bookId}`} className="card bg-base-100 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <figure className="bg-gray-100 rounded-2xl py-8 px-6 mb-6">
                <img src={book.image} alt={book.bookName} className="h-48 object-contain" />
            </figure>
            <div className="flex flex-wrap gap-2 mb-4">
                {Array.isArray(book.tags) && book.tags.map(tag => (
                    <span key={tag} className="badge bg-green-50 text-green-600 border-0 px-4 py-3 font-medium">{tag}</span>
                ))}
            </div>
            <h2 className="text-2xl font-bold mb-4">{book.bookName}</h2>
            <p className="text-gray-600 mb-5 border-b border-dashed pb-5">By : {book.author}</p>
            <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">{book.category}</span>
                <div className="flex items-center gap-2">
                    <span className="font-medium">{book.rating}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>
            </div>
        </Link>
    );
};

export default Book;