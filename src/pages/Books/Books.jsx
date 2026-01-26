import React, { Suspense } from 'react';
import Book from '../Book/Book.jsx';


const Books = ({ books }) => {
    return (
        <div className="mb-16">
            <h1 className='text-4xl font-bold text-center mb-10'>Books</h1>
            <Suspense fallback={<div className="text-center">Loading books...</div>}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        (books || []).map(book => (
                            <Book key={book.bookId} book={book} />
                        ))
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;