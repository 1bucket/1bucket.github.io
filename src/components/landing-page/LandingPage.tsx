import ProjectCarousel from './ProjectCarousel';

import './LandingPage.css'

export default function LandingPage() {
    return (
        <>
            <section id="landing">
                <div className="hero fade-in-from-right">
                    <div id="hero-header">Paul Enrade</div>
                    <div id="hero-subheader">Aspiring Game Developer Studying at Stony Brook University</div>
                    <div id="hero-mini-pitch">pitch</div>
                    <div id="hero-to-about">to about me</div>
                </div>
            </section>
            <div id="gradient-buffer1"></div>
            <section id="about">
                <div id="about-content">
                    <div id="about-text">
                        <div>main stuff (also do background gradient buffer between sections)</div>
                        <div>skills and things</div>
                        <div>links to github+linkedin</div>
                    </div>
                    <img id="photo-me" src={undefined} />
                </div>
            </section>
            <div id="gradient-buffer2"></div>
            <section id="projects">
                <ProjectCarousel />
            </section>
            <div id="gradient-buffer3"></div>
            <section id="contact">
                to contact me
            </section>
        </>
    )
}