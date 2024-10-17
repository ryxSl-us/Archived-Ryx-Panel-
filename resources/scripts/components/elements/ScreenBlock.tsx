// million-ignore
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import { ArrowBigRight, DollarSign, ServerCrash } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScreenBlock = ({ title, message }) => {
    return (
        <>
            <div className='w-full h-full flex gap-12 items-center p-8 max-w-3xl mx-auto'>
                <div className='flex flex-col gap-8 max-w-sm text-left'>
                    <h1 className='text-[32px] font-extrabold leading-[98%] tracking-[-0.11rem]'>{title}</h1>
                    <p className=''>{message}</p>
                </div>
            </div>
        </>
    );
};

const ServerError = ({ title, message }) => {
    return (
        <>
            <div className='w-full h-full flex gap-12 items-center p-8 max-w-3xl mx-auto'>
                <div className='flex flex-col gap-8 max-w-sm text-left'>
                    <h1 className='text-[32px] font-extrabold leading-[98%] tracking-[-0.11rem]'>{title}</h1>
                    <p className=''>{message}</p>
                </div>
            </div>
        </>
    );
};

const NotFound = () => {
    return (
        <>
            <div className='w-full h-full flex gap-12 items-center p-8 max-w-3xl mx-auto'>
                <div className='flex flex-col gap-8 max-w-sm text-left'>
                    <h1 className='text-[32px] font-extrabold leading-[98%] tracking-[-0.11rem]'>Page Not Found</h1>
                    <p className=''>
                        We couldn&apos;t find the page you&apos;re looking for. You may have lost access, or the page
                        may have been removed. Here are some helpful links instead:
                    </p>
                    <div className='flex items-center space-x-4'>
                        <button
                            className='flex items-center justify-start bg-zinc-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-stone-700 transition duration-200 transform hover:scale-105 ease-in-out'
                            onClick={() => window.open('https://discord.gg/GYe6wzKrxc', '_blank')}
                        >
                            <DiscordLogoIcon className='w-5 h-5 mr-2 ' />
                            Contact Discord
                        </button>
                        <button
                            className='flex items-center justify-center bg-red-900 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-700 transition duration-200 transform hover:scale-105 ease-in-out'
                            onClick={() => (window.location.href = '/')}
                        >
                            <ServerCrash className='w-5 h-5 mr-2' />
                            Your Servers
                        </button>
                    </div>
                    <div className='flex flex-col gap-2'></div>
                </div>
                <img
                    alt=''
                    className='w-64 rounded-2xl'
                    height='256'
                    src='https://media.tenor.com/scX-kVPwUn8AAAAC/this-is-fine.gif'
                    width='256'
                    loading='lazy'
                    decoding='async'
                />
            </div>
        </>
    );
};

export { ServerError, NotFound };
export default ScreenBlock;

//SERVERS MEANT TO FIX ASAP KUSHIFIXO
