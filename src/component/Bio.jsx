export const Bio = () => {

    const bioData = [
        { key: 'Based', value: 'Indonesia' },
        { key: 'Instagram', value: 'ahmadluthfia_' },
        { key: 'GitHub', value: 'luthfiahmad12' },
        { key: 'Email', value: 'luthfiafif625@gmail.com' },
    ];

    return (
        <div className="card bg-base-100 shadow-xl rounded-md w-full">
            <div className="justify-start p-6 items-center text-sm text-base-content text-opacity-60">
                <div>
                    {bioData.map((item, index) => (
                        <p className="flex justify-between mb-4" key={index}>
                            <span>{item.key}:</span>
                            <span className="font-mono font-semibold">
                                {item.value}
                            </span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
