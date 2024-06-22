const Recommended = () => {
    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            {Array.from({ length: 8 }, (_, i) => `Card ${i + 1}`).map(card => (
                <div key={card} className="bg-gray-200 p-2">
                    {card}
                </div>
            ))}
        </div>
    );
};

export default Recommended;
