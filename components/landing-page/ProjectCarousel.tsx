'use client';

import { cn } from 'cn';
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
                            <CardDescription className={`${carouselCardDescBaseClass}`}>A small (for now) arcade style game — bounce against surfaces to gain score, but be wary of the energy gauge and stay within a stable range!</CardDescription>
                            {/* <CardContent id="project-image-sb" className={`${carouselCardImageBaseClass}`}> */}
                            <img className={`${carouselCardImageBaseClass}`} src="/project/stay-bouncy/sb-placeholder.png" />
                            <CardDescription className={`${carouselCardToolsListBaseClass}`}>
                                <div>Prototyped with: </div>
                                <GodotChip className="chip-small mt-2 mr-2" />
                                <GDScriptChip className="chip-small" />
                            </CardDescription>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}>
                                <a href="https://github.com/1bucket/stay-bouncy" target="_blank">Github<ExternalLinkIcon /></a>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>Weschedule</h5></CardHeader>
                            <CardDescription className={`${carouselCardDescBaseClass}`}>(blurb here)</CardDescription>
                            <CardContent className={`${carouselCardImageBaseClass}`}>(photo here)</CardContent>
                            <CardDescription className={`${carouselCardToolsListBaseClass}`}>tools used</CardDescription>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}>(links here)</CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>Moonwalk the Plank</h5></CardHeader>
                            <CardDescription className={`${carouselCardDescBaseClass}`}></CardDescription>
                            <CardContent className={`${carouselCardImageBaseClass}`}>dummy</CardContent>
                            <CardDescription className={`${carouselCardToolsListBaseClass}`}>tools used</CardDescription>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}>toamto</CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>Audio Visualizer</h5></CardHeader>
                            <CardDescription className={`${carouselCardDescBaseClass}`}></CardDescription>
                            <CardContent className={`${carouselCardImageBaseClass}`}>dummy</CardContent>
                            <CardDescription className={`${carouselCardToolsListBaseClass}`}>tools used</CardDescription>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}></CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>Minesweeper Clone</h5></CardHeader>
                            <CardDescription className={`${carouselCardDescBaseClass}`}></CardDescription>
                            <CardContent className={`${carouselCardImageBaseClass}`}>dummy</CardContent>
                            <CardDescription className={`${carouselCardToolsListBaseClass}`}>tools used</CardDescription>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}></CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>Battlecode 2024</h5></CardHeader>
                            <CardDescription className={`${carouselCardDescBaseClass}`}></CardDescription>
                            <CardContent className={`${carouselCardImageBaseClass}`}>dummy</CardContent>
                            <CardDescription className={`${carouselCardToolsListBaseClass}`}>tools used</CardDescription>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}></CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem id="project-quatience" className={`${carouselItemClass}`}>
                        <Card className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>Quatience</h5></CardHeader>
                            <CardDescription className={`${carouselCardDescBaseClass}`}></CardDescription>
                            <CardContent className={`${carouselCardImageBaseClass}`}>dummy</CardContent>
                            <CardDescription className={`${carouselCardToolsListBaseClass}`}>tools used</CardDescription>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}></CardFooter>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="carousel-button" />
                <CarouselNext className="carousel-button" />
            </Carousel>
        </div>
    )

}