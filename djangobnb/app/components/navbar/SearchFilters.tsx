'use client';

import useSearchModal from "@/app/hooks/useSearchModal";

const SearchFilters = () => {
    const searchModal = useSearchModal();

    return (
        <div 
            onClick={() => searchModal.open('location')}
            className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full dark:border-gray-600 bg-white dark:bg-gray-800"
        >
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    {/* Where */}
                    <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">Where</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Wanted location</p>
                    </div>

                    {/* Check in */}
                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">Check in</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Add dates</p>
                    </div>

                    {/* Check out */}
                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">Check out</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Add dates</p>
                    </div>

                    {/* Who */}
                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">Who</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Add guests</p>
                    </div>
                </div>
            </div>

            {/* Search button */}
            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark transition rounded-full text-white">
                    <svg 
                        viewBox="0 0 32 32" 
                        style={{display:'block', fill:'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth:4, overflow:'visible'}} 
                        aria-hidden="true" role="presentation" focusable="false"
                    >
                        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default SearchFilters;
