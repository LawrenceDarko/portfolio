'use client'

import React , {useRef} from 'react';

const Music = () => {

    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    const handlePlayPause = () => {
    if (audioRef.current) {
        if (isPlaying) {
        audioRef.current.pause();
        } else {
        audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
    };
    return (
        <div className='button-52'>
            <audio ref={audioRef} loop src="/music/sound.mp3" />
            <p className='' onClick={handlePlayPause}>{isPlaying ? 'Sound On' : 'Sound Off'}</p>
        </div>
        // <div className=''>
        //     <button onClick={handlePlayPause} className="sound-button md:w-[165px] md:h-[50px]">
        //         <audio ref={audioRef} loop src="/music/sound.mp3" />
        //         <span className="sound-icon"></span>
        //         <span className="sound-text">{isPlaying ? 'Sound On' : 'Sound Off'}</span>
        //     </button>
        // </div>
    );
};

export default Music;
