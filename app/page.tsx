'use client';

import Background from '@/components/landing-page/Background';
import ProjectCarousel from '@/components/landing-page/ProjectCarousel';
import { BaseChip } from '@/components/custom/Chips';

import BlankTabSection, { BlankTabSectionType } from '@/components/custom/BlankTabSection';

import './page.css'

export default function LandingPage() {
  return (
    <Background>
      <BlankTabSection id="header" sectionType={BlankTabSectionType.BOTTOM}>
        <a className="text-[var(--color-primary)]" href="#landing">Paul Enrade</a>
        <a className="ml-[auto]" href="#about">About</a>
        <a className="ml-7" href="#skills">Skills</a>
        <a className="ml-7" href="#projects">Projects</a>
        <a className="ml-7" href="#contact">Contact</a>
      </BlankTabSection>
      <div className="w-[100%] flex grow-1 justify-center align-center">
        <div className="max-w-[var(--max-section-width)]">
          <section id="landing">
            <div className="hero-card title-enter">
              <div id="hero-header" className="hero-text">Paul Enrade</div>
              <div id="hero-subheader" className="hero-text">Aspiring Game Developer</div>
              <div className="hero-text">Bachelor's in CS at Stony Brook University</div>
              <div className="hero-text"><a href="#about">Who am I?</a></div>
            </div>
          </section>
          <BlankTabSection id="about" sectionType={BlankTabSectionType.TOP}>
            <h1>Who am I?</h1>
            <div id="about-content">
              <div className="max-w-[30rem]">
                <p>Hello! My name’s Paul, and I’m currently an undergraduate student at Stony Brook University pursuing a bachelor’s in computer science. I’m also participating in Stony Brook’s Computer Science Honors program. My passion is game development, but that doesn’t stop me from diving into other areas in my field like UI/UX design and web development. I love creating things that challenge me to think differently, things that can help others, and things that everyone can enjoy.</p>
                <p>Simply put, I like making cool stuff.</p>
                <p>Here's my <a href="https://github.com/1bucket" target="_blank">GitHub</a>.</p>
                <p>And here's my <a href="https://www.linkedin.com/in/paul-enrade-8432682b1/" target="_blank">LinkedIn</a>.</p>
              </div>
              <img id="photo-me" src={undefined} />
            </div>
          </BlankTabSection>
          <BlankTabSection id="skills" sectionType={BlankTabSectionType.MIDDLE}>
            <h1>Skills</h1>
            <p className="subtitle">My shiny, ever-evolving collection of tools</p>
            <div id="skills-content" className="grid grid-cols-5 gap-5">
              <p className="skill-category col-span-1">Languages:</p>
              <div className="col-span-4">
                <BaseChip />
              </div>
              <p className="skill-category col-span-1">Game Engines:</p>
              <div className="col-span-4">
                chips stub
              </div>
              <p className="skill-category col-span-1">Web Dev Tools:</p>
              <div className="col-span-4">
                chips stub
              </div>
              <p className="skill-category col-span-1">More Tools:</p>
              <div className="col-span-4">
                chips stub
              </div>
            </div>
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
            <a href="#landing">Back to top</a>
          </BlankTabSection>

        </div>

      </div>
    </ Background>
  )
}