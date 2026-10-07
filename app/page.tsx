'use client';

import Background from '@/components/landing-page/Background';
import ProjectCarousel from '@/components/landing-page/ProjectCarousel';
import {
  BaseChip, //language chips
  JavaChip,
  PythonChip,
  CChip,
  GDScriptChip,
  JSTSChip,
  SwiftChip,
  GodotChip, //gamedev chips
  UnrealChip,
  ProcessingChip,
  PygameChip,
  AsepriteChip,
  HTMLCSSChip, //webdev chips
  TailwindChip,
  ReactChip,
  ElectronChip,
  NodeChip,
  ExpressChip,
  PostmanChip,
  VercelChip,
  MongoChip,
  SupabaseChip,
  PostgreSQLChip,
  VSCChip, //IDE chips
  VSChip,
  EclipseChip,
  VimChip,
  XCodeChip,
  AndroidStudioChip,
  GitChip, //ver ctrl chips
  PerforceChip
} from '@/components/custom/Chips';
import MessageForm from '@/components/landing-page/MessageForm';
import BlankTabSection, { BlankTabSectionType } from '@/components/custom/BlankTabSection';
import ExternalLinkIcon from '@/components/custom/ExternalLinkIcon';

import './page.css'

export default function LandingPage() {

  return (
    <Background>
      <BlankTabSection id="header" sectionType={BlankTabSectionType.BOTTOM}>
        <a className="" href="#landing">Paul Enrade</a>
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
            <h1>About me</h1>
            <div id="about-content">
              <div id="about-text">
                <p>
                  Hello! My name’s <span className="font-bold text-[var(--color-tertiary)]">Paul</span>, and I’m currently an undergraduate student at Stony Brook University pursuing a bachelor’s degree in computer science. I’m also participating in <a className="font-bold underline text-[--color-tertiary]" href="https://www.cs.stonybrook.edu/academics/undergraduate/cs-honor-program.html" target="_blank">Stony Brook’s Computer Science Honors program<ExternalLinkIcon /></a>, where I get to take advanced courses in my major and complete a faculty-advised honors project in my senior year. I’ve got experience making games in Godot, and I’m currently learning how to use Unreal Engine for a 3D game programming course. If there’s something I’m unfamiliar with, I’m willing to take the time to learn it; if I get to collaborate with others on a project, they can rest assured that I’ll be a responsible and reliable teammate.
                </p>
                <p className="subtitle underline">What am I interested in?</p>
                <p>
                  I’m interested in several areas like UI/UX design and web development, but the majority of my passion lies in <span className="font-bold text-[var(--color-tertiary)]">game development</span>. I’ve been playing video games for as long as I can remember — games like Deltarune, Fortnite, Super Mario Galaxy, and Minecraft have all been unforgettable experiences (and still are!). In their own unique ways, they’ve helped shape a more nuanced understanding of myself and of others, which is something I hope to achieve through my own work. I want to create things that challenge the way we think, things that can help others, and things that everyone can enjoy.
                </p>
                <p>
                  Simply put, I’m in the business of making <span className="font-bold text-[var(--color-tertiary)]">cool stuff</span>.
                </p>
                <p className="subtitle underline">
                  Want to see what I've worked on?
                </p>
                <p>
                  <a href="https://github.com/1bucket" target="_blank">GitHub<ExternalLinkIcon /></a>
                </p>
                <p className="subtitle underline">
                  Interested in talking?
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/paul-enrade-8432682b1/" target="_blank">LinkedIn<ExternalLinkIcon /></a>
                </p>
              </div>
              <figure id="fig-photo-me">
                <img id="photo-me" src="me/me.jpeg" />
                <figcaption className="mt-5">I often enjoy exploring parks and nature.</figcaption>
              </figure>
            </div>
          </BlankTabSection>
          <BlankTabSection id="skills" sectionType={BlankTabSectionType.MIDDLE}>
            <h1>Skills</h1>
            <p className="subtitle">My shiny, ever-evolving toolbox</p>
            <div id="skills-content" className="grid grid-cols-5 gap-row-1">
              <p className="skill-category skills-grid-item skills-grid-first-row col-span-1">Languages:</p>
              <div className="skills-grid-item skills-grid-first-row col-span-4 overflow-wrap">
                <JavaChip className="mr-2" />
                <PythonChip className="mr-2" />
                <CChip className="mr-2" />
                <GDScriptChip className="mr-2" />
                <JSTSChip className="mr-2" />
                <SwiftChip className="" />
              </div>
              <p className="skills-grid-item skill-category col-span-1">Game Dev Tools:</p>
              <div className="skills-grid-item col-span-4 overflow-wrap">
                <GodotChip className="mr-2" />
                <UnrealChip className="mr-2" />
                <ProcessingChip className="mr-2" />
                <PygameChip className="mr-2" />
                <AsepriteChip />
              </div>
              <p className="skills-grid-item skill-category col-span-1">Web Dev Tools:</p>
              <div className="skills-grid-item col-span-4">
                <HTMLCSSChip />
                <TailwindChip />
                <ReactChip />
                <ElectronChip />
                <NodeChip />
                <ExpressChip />
                <PostmanChip />
                <VercelChip />
                <MongoChip />
                <SupabaseChip />
                <PostgreSQLChip />
              </div>
              <p className="skills-grid-item skill-category col-span-1">IDEs/Code Editors:</p>
              <div className="skills-grid-item col-span-4 flex items-center">
                <VSCChip />
                <VSChip />
                <EclipseChip />
                <VimChip />
                <XCodeChip />
                <AndroidStudioChip />
              </div>
              <p className="skills-grid-item skill-category col-span-1">Version Control:</p>
              <div className="skills-grid-item col-span-4">
                <GitChip />
                <PerforceChip />
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
            <h1>Send me a message!</h1>
            <p className="subtitle">(I don't bite)</p>
            <div id="contact-content">
              <p className="mb-5">
                Note: "Send Email" will open up your default email app and fill it with what's in the fields below, so you can write your message here or in your actual email app. Whatever you choose!
              </p>
              <MessageForm />
            </div>
          </BlankTabSection>
          <BlankTabSection id="footer" sectionType={BlankTabSectionType.BOTTOM}>
            <div id="footer-content" className="flex flex-row">
              <p className="mr-auto">Paul Enrade, 2026</p>
              <p className="m-auto">Be <span className="font-bold text-[var(--color-tertiary)]">kind</span> 🤍</p>
              <a className="ml-auto" href="#landing">Back to top</a>
            </div>
          </BlankTabSection>

        </div>

      </div>
    </ Background>
  )
}