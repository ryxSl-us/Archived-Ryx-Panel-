// million-ignore

import { useState } from 'react';
import clsx from 'clsx';
import { ServerContext } from '@/state/server';
import { CheckCircle, Loader2, X } from 'lucide-react';
import { DiscordLogoIcon } from '@radix-ui/react-icons';

export const StatusPill = () => {
    const status = ServerContext.useStoreState((state) => state.status.value);
    const activeStates = ['starting', 'running', 'stopping'];
    const isInactive = !activeStates.includes(status);
    const [showModal, setShowModal] = useState(isInactive);

    const closeModal = () => setShowModal(false);

    return (
        <>
            <div
                className={clsx(
                    'relative transition rounded-full pl-3 pr-3 py-2 flex items-center gap-1',
                    status === 'offline' ? 'bg-red-400/25' : status === 'running' ? 'bg-green-400/25' : 'bg-yellow-400/25',
                )}
            >
                <div
                    className={clsx(
                        'transition rounded-full h-4 w-4',
                        status === 'offline' ? 'bg-red-500' : status === 'running' ? 'bg-green-500' : 'bg-yellow-500',
                    )}
                ></div>
                <div
                    className={clsx(
                        'transition rounded-full h-4 w-4 animate-ping absolute top-2.5 opacity-45',
                        status === 'offline' ? 'bg-red-500' : status === 'running' ? 'bg-green-500' : 'bg-yellow-500',
                    )}
                ></div>
                <div className='text-sm font-bold'>
                    {status === 'offline'
                        ? 'Offline'
                        : status === 'running'
                          ? 'Online'
                          : status === 'stopping'
                            ? 'Stopping'
                            : status === 'starting'
                              ? 'Starting'
                              : 'Fetching'}
                </div>
            </div>

            {isInactive && showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-zinc-900 p-6 rounded-lg shadow-xl flex flex-col items-center relative">
                        <button 
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-zinc-400 hover:text-white transition-colors duration-200"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <Loader2 className="w-12 h-12 text-zinc-400 animate-spin mb-4" />
                        <p className="text-lg font-semibold text-white">Did this take too long?..</p>
                        <div className="flex flex-col gap-4 mt-4">
                            <button className="flex items-center justify-center bg-zinc-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-stone-700 transition duration-200 transform hover:scale-105 ease-in-out " onClick={() => window.open('https://discord.gg/GYe6wzKrxc', '_blank')}>
                                <DiscordLogoIcon className="w-5 h-5 mr-2" />
                                Join the Discord Server
                            </button>
                            <button className="flex items-center justify-center bg-red-900 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-700 transition duration-200 transform hover:scale-105 ease-in-out" onClick={() => window.open('https://hetrix.astralaxis.tech/', '_blank')}>
                                <CheckCircle className="w-5 h-5 mr-2" />
                                Check Status
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};