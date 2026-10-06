'use client';

import Background from '@/components/landing-page/Background';
import ProjectCarousel from '@/components/landing-page/ProjectCarousel';

import BlankTabSection, { BlankTabSectionType } from '@/components/custom/BlankTabSection';

import './page.css'

export default function LandingPage() {
  return (
    <Background>
      <BlankTabSection id="header" sectionType={BlankTabSectionType.BOTTOM}>header stub</BlankTabSection>
      <section id="landing">
        <div className="hero-card title-enter">
          <div id="hero-header">Paul Enrade</div>
          <div id="hero-subheader">Aspiring Game Developer</div>
          <div id="hero-mini-pitch">Bachelor's in CS at Stony Brook University</div>
          <div id="hero-to-about">to about me</div>
        </div>
      </section>
      <BlankTabSection id="about" sectionType={BlankTabSectionType.TOP}>
        <div id="about-content">
          <div>
            <img id="photo-me" src={undefined} />
          </div>
          <div>
            <div id="about-text">
              <div>main stuff (also do background gradient buffer between sections)</div>
              <div>skills and things</div>
              <div>links to github+linkedin</div>
            </div>
          </div>
        </div>
      </BlankTabSection>
      <BlankTabSection id="skills" sectionType={BlankTabSectionType.MIDDLE}>
        <h1>Skills</h1>
        <p className="subtitle">My shiny, ever-evolving collection of tools</p>
      </BlankTabSection>
      <BlankTabSection id="projects" sectionType={BlankTabSectionType.MIDDLE}>
        <div id="project-container">
          <h1>Projects</h1>
          <p className="subtitle">Things I’ve made, or otherwise helped make</p>
          <ProjectCarousel className="mb-15" />
        </div>
      </BlankTabSection>
      <BlankTabSection id="contact" sectionType={BlankTabSectionType.MIDDLE}>
        to contact me
      </BlankTabSection>
      <BlankTabSection id="footer" sectionType={BlankTabSectionType.BOTTOM}>
        footer stub
      </BlankTabSection>
      {/* buffer */}
      <div className="h-[4rem]"></div>
    </ Background>
  )
}