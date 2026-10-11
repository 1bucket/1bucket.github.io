'use client';

import { cn } from 'cn';
import {
    BaseChip, //language chips
    JavaChip,
    PythonChip,
    CChip,
    GDScriptChip,
    JSTSChip, JSChip, TSChip,
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
    NextChip,
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
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ExternalLinkIcon from '@/components/custom/ExternalLinkIcon';

import './ProjectCarousel.css'

export default function ProjectCarousel({ className, ...props }: React.ComponentProps<"div">) {
    const carouselItemClass = "carousel-item pl-[var(--padding)] sm:basis-1/1 md:basis-1/2 lg:basis-1/3";
    const carouselCardBaseClass = "card-base";
    const carouselCardHeaderBaseClass = "card-header-base";
    const carouselCardImageBaseClass = "card-image-base";
    const carouselCardDescBaseClass = "card-description-base";
    const carouselCardToolsListBaseClass = "card-tool-list-base";
    const carouselCardFooterBaseClass = "card-footer-base";
    return (
        <div {...props} className={cn("carousel-container", className)}>
            <Carousel className="carousel">
                <CarouselContent className="-ml-[var(--padding)]">
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card id="project-card-stay-bouncy" className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}>
                                <h5>Stay Bouncy</h5>
                            </CardHeader>
                            <CardContent className={`${carouselCardDescBaseClass}`}>
                                <p>
                                    A small (for now) arcade style game — bounce against surfaces to gain score, but be wary of the energy gauge and stay within a stable range! I got to apply some newly-acquired knowledge about component-based programming and software design in general.
                                </p>
                                <img className={`${carouselCardImageBaseClass} card-image-border-sideless mt-auto mb-auto`} src="/project/stay-bouncy/sb-placeholder.png" />
                                <div className="card-tool-list-base">
                                    <p>Prototyped with: </p>
                                    <GodotChip className="chip-small mt-2 mr-2" />
                                    <GDScriptChip className="chip-small" />
                                </div>
                            </CardContent>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}>
                                <a href="https://github.com/1bucket/stay-bouncy" target="_blank">Github<ExternalLinkIcon /></a>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card id="project-card-weschedule" className={`${carouselCardBaseClass}`}>
                            <CardHeader id="project-card-weschedule-header" className={`${carouselCardHeaderBaseClass}`}><h5>Weschedule</h5></CardHeader>
                            <CardContent className={`${carouselCardDescBaseClass} project-card-weschedule-content`}>
                                <p>
                                    Event planning web app which was developed over two semesters by a team of six (including myself) under the mentorship of another computer science student.
                                </p>
                                <img className={`${carouselCardImageBaseClass} card-image-border-sideless mt-auto mb-auto`} src="/project/weschedule/weschedule-landing.png" />
                                <div className="card-tool-list-base">
                                    <p>Built with:</p>
                                    <NextChip className="chip-small mt-2 mr-2" />
                                    <VercelChip className="chip-small mr-2 mt-2" />
                                    <ReactChip className="chip-small mt-2 mr-2" />
                                    <TSChip className="chip-small mt-2 mr-2" />
                                    <TailwindChip className="chip-small mr-2 mt-2" />
                                    <SupabaseChip className="chip-small mr-2 mt-2" />
                                </div>
                            </CardContent>
                            <CardFooter id="project-card-weschedule-footer" className={`${carouselCardFooterBaseClass}`}>
                                <a href="https://github.com/SidmoGoesBrrr/weschedule" target="_blank">
                                    Github
                                    <ExternalLinkIcon />
                                </a>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card id="project-card-moonwalk-the-plank" className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>Moonwalk the Plank</h5></CardHeader>
                            <CardContent className={`${carouselCardDescBaseClass} project-card-moonwalk-the-plank-content`}>
                                <p>
                                    Mobile game developed in a team of four (including myself) for a university-hosted hackathon. This was my first hackathon experience, which was both nerve-wracking and exciting at the same time. But I had a lot of fun and I learned a lot, both about using Godot effectively and efficiently working in a team.
                                </p>
                                <img className={`${carouselCardImageBaseClass} card-image-border mt-[1rem] mb-[1rem]`} src="/project/moonwalk-the-plank/moonwalk-home.png" />
                                <div className="card-tool-list-base">
                                    <div>Built with: </div>
                                    <GodotChip className="chip-small mt-2 mr-2" />
                                    <GDScriptChip className="chip-small" />
                                </div>
                            </CardContent>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}>
                                <a href="https://github.com/LoistCloist/hopper_hacks_x_project " target="_blank">Github<ExternalLinkIcon /></a>
                                <a className="ml-[0.75rem]" href="https://devpost.com/software/moonwalk-on-the-plank" target="_blank">Devpost<ExternalLinkIcon /></a>
                                <a className="ml-[0.75rem]" href="https://www.youtube.com/watch?v=e-jx3kdZMe4" target="_blank">Demo<ExternalLinkIcon /></a>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card id="project-card-audio-visualizer" className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>Audio Visualizer</h5></CardHeader>
                            <CardContent className={`${carouselCardDescBaseClass}`}>
                                <p>
                                    A simple app that analyzes microphone input and makes a pretty animation by using a Fast Fourier transform to extract amplitude values for specific frequency ranges. It includes simple tap and swipe controls to cycle through animation styles and a settings menu to configure the app’s appearance.
                                </p>
                                <img className={`${carouselCardImageBaseClass} mt-auto mb-auto`} src="/project/audio-visualizer-mobile/audio-visualizer-demo.jpeg" />
                                <div className="card-tool-list-base">
                                    <div>Built with:</div>
                                    <SwiftChip className="chip-small mt-2" />
                                </div>
                            </CardContent>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}>
                                <a href="https://github.com/1bucket/Audio-Visualizer-Mobile" target="_blank">Github<ExternalLinkIcon /></a>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card id="project-card-minesweeper-clone" className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>Minesweeper Clone</h5></CardHeader>
                            <CardContent className={`${carouselCardDescBaseClass}`}>
                                <p>
                                    As the name suggests, it’s a Minesweeper clone. ‘Nuff said. But also, it was a good opportunity for me to practice handling assets (and creating them — I drew everything in Aseprite, which I’m quite proud of). It was also a good way for me to exercise my Python skills and get me comfortable with the pygame libraries.
                                </p>
                                <img className={`${carouselCardImageBaseClass} mt-auto mb-auto`} src="/project/minesweeper-clone/minesweeper-clone-sample.png" />
                                <div className="card-tool-list-base">
                                    <div>Built with:</div>
                                    <PygameChip className="chip-small mt-2" />
                                    <PythonChip className="chip-small mt-2 ml-2" />
                                    <AsepriteChip className="chip-small mt-2 ml-2" />
                                </div>
                            </CardContent>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}>
                                <a href="https://github.com/1bucket/Minesweeper" target="_blank">Github<ExternalLinkIcon /></a>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card id="project-card-battlecode-2024" className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>Battlecode 2024</h5></CardHeader>
                            <CardContent className={`${carouselCardDescBaseClass} project-card-battlecode-2024-content`}>
                                <p>
                                    I participated in MIT's <a href="https://battlecode.org/past.html#battlecode-2024-breadwars" target="_blank">Battlecode 2024<ExternalLinkIcon /></a> in a team of two as part of the Brooklyn Public Library’s Teen Techies program. This competition taught me important lessons in how to think smarter with respect to game strategy, code design, implementation, and debugging.
                                </p>
                                <img className={`${carouselCardImageBaseClass} card-image-border mt-auto mb-auto`} src="/project/battlecode-2024/battlecode-2024-empty.png" />
                                <div className="card-tool-list-base">
                                    <div>Tools used:</div>
                                    <JavaChip className="chip-small mt-2" />
                                </div>
                            </CardContent>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}>
                                <a id="battlecode-github-link" href="https://github.com/1bucket/Battlecode24" target="_blank">Github<ExternalLinkIcon /></a>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem id="project-card-quatience" className={`${carouselItemClass}`}>
                        <Card className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>Quatience</h5></CardHeader>
                            <CardContent className={`${carouselCardDescBaseClass} project-crad-quatience-content`}>
                                <p>
                                    A high school assignment turned impromptu passion project, this game aims to combine elements of Geometry Dash and the Google Chrome dinosaur game to create a more engaging side-scroller experience.
                                </p>
                                <img className={`${carouselCardImageBaseClass} card-image-border mt-auto mb-auto`} src="/project/quatience/quatience-gameplay-1.png" />
                                <div className="card-tool-list-base">
                                    <div>Built with:</div>
                                    <ProcessingChip className="chip-small mt-2" />
                                </div>
                            </CardContent>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}>
                                <a href="https://github.com/1bucket/Quatience" target="_blank">Github<ExternalLinkIcon /></a>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="carousel-button" />
                <CarouselNext className="carousel-button" />
            </Carousel>
        </div>
    )

}