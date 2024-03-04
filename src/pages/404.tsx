import React, { useEffect } from 'react';
import { useRouter } from 'next/router'

const CustomPage = () => {
    const history = useRouter();

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            history.push('/');
        }, 1400);

        return () => {
            clearTimeout(redirectTimeout);
        };
    }, [history]);

    return (
        <div key="1" className="flex h-screen w-full flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="mt-4 text-6xl font-bold mont-heavy text-[#004AAD]">Hide & Seek Time!</h1>
                <p className="mt-4 text-xl">And you're it!</p>
                <p className="text-xl">(Sorry, we can't find the page, too.)</p>
            </div>
            <div className="mt-10 flex max-w-xs flex-col items-center overflow-hidden">
                <p className="text-lg text-[#004AAD]">Redirecting...</p>
                <div className="mt-4">
                    <img src="/images/spinner.svg" alt="spinner" />
                </div>
            </div>
        </div>
    );
};

export default CustomPage;