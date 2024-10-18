//################
//status PAGE PLEASE EDIT THIS
import React from 'react';

const StatusPage: React.FC = () => {
    return (
        <div className='w-full h-screen'>
            <iframe
                src='https://hetrix.astralaxis.tech/'
                title='Astral - Service Status'
                className='w-full h-full border-none'
                loading='lazy'
            />
        </div>
    );
};

export default StatusPage;
