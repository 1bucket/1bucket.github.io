'use client';

import { useState } from 'react';

import './Background.css'

export default function Background(props: React.ComponentProps<"div">) {
    let { children } = props;
    const [videoLoaded, setVideoLoaded] = useState(false);

    const loadVideo = () => {
        setVideoLoaded(true);
    }

    return (
        <div
            id="bg-container"
            style={{
                maxHeight: "100dvh",
            }}
        >
            <div className="bg-graphic bg-filter">
                <video className={`${videoLoaded ? "video-fade-in" : "hidden"}`} autoPlay muted loop playsInline onPlay={loadVideo}>
                    <source src="/debug/debug-trimmed.mp4" type="video/mp4" />
                </video>
            </div>
            <div
                className="content"
                style={{
                    maxHeight: "100dvh",
                    overflowY: "auto",
                    overflowX: "clip",
                    background: "rgba(0, 0, 0, 0)",
                }}{...props}>
                {children}
            </div>
        </div>
    )
}