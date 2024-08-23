export const Bio = () => {

    const bioData = [
        { key: 'Based', value: 'Indonesia' },
        { key: 'Instagram', value: 'ahmadluthfia_' },
        { key: 'GitHub', value: 'luthfiahmad12' },
        { key: 'LinkedIn', value: 'luthfi-afif12' },
        { key: 'Email', value: 'luthfiafif625@gmail.com' },
    ];

    return (
        <div className="w-full rounded-md shadow-lg card bg-base-100">
            <div className="items-center justify-start p-6 text-sm text-blue-500 text-opacity-80">
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