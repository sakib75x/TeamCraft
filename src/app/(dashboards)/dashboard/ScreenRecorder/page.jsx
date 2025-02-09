import ScreenRecorder from '@/components/ScreenRecorder/ScreenRecorder';
import React from 'react';

export const metadata = {
    title: "Screen Recorder | TeamCraft",
    description: "Screen Recorder for TeamCraft",
}

const page = () => {
    return (
        <div>

            <ScreenRecorder></ScreenRecorder>
            
        </div>
    );
};

export default page;