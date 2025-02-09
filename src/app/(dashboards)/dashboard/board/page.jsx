
import Board from '@/components/Dashboards/Board';
import React from 'react';

export const metadata = {
    title: "Board | TeamCraft",
    description: "Board for TeamCraft",
}

const page = () => {
    return (
        <div >
            <Board></Board>
        </div>
    );
};

export default page;