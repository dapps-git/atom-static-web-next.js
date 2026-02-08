"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                videoRef.current.requestFullscreen();
            }
        }
    };

    return (
        <section className="relative w-full h-screen min-h-[500px] bg-black">
            {/* Video Background */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted={isMuted}
                playsInline
                poster="/about-banner.webp"
            >
                <source src="/campus-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Play Button Overlay (when not playing) */}
            {!isPlaying && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center z-10"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={togglePlay}
                        className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 hover:bg-white/30 transition-colors"
                    >
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                    </motion.button>
                </motion.div>
            )}

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                <div className="max-w-[1400px] mx-auto flex items-center gap-4">
                    {/* Play/Pause */}
                    <button
                        onClick={togglePlay}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                    >
                        {isPlaying ? (
                            <Pause className="w-5 h-5 text-white" />
                        ) : (
                            <Play className="w-5 h-5 text-white" />
                        )}
                    </button>

                    {/* Progress Bar */}
                    <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                        <div className="h-full bg-[#EB1414] w-0" />
                    </div>

                    {/* Time */}
                    <span className="text-white text-sm hidden sm:block">0:00 / 5:32</span>

                    {/* Mute */}
                    <button
                        onClick={toggleMute}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                    >
                        {isMuted ? (
                            <VolumeX className="w-5 h-5 text-white" />
                        ) : (
                            <Volume2 className="w-5 h-5 text-white" />
                        )}
                    </button>

                    {/* Fullscreen */}
                    <button
                        onClick={toggleFullscreen}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                    >
                        <Maximize className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
