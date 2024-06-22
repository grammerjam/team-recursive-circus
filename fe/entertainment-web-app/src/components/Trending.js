import React, { useState, useEffect } from 'react';

const Trending = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMoreItems = () => {
        if (loading) return;
        setLoading(true);
        // Simulate fetching data
        setTimeout(() => {
            const newItems = items.concat(Array.from({ length: 5 }, (_, i) => `Item ${items.length + i + 1}`));
            setItems(newItems);
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        fetchMoreItems(); 
    }, []);

    const handleScroll = (e) => {
        const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
        if (scrollWidth - scrollLeft === clientWidth) {
            fetchMoreItems();
        }
    };

    return (
        <div className="flex overflow-x-scroll p-4 space-x-4" onScroll={handleScroll}>
            {items.map(item => (
                <div key={item} className="min-w-[200px] h-[300px] bg-gray-300 flex-shrink-0">
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Trending;
