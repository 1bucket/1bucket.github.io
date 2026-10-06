'use client';

import { cn } from 'cn';
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
                        <Card className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}>
                                <h5>stay bouncy</h5>
                            </CardHeader>
                            <CardDescription className={`${carouselCardDescBaseClass}`}>A small (for now) arcade style game — bounce against surfaces to gain score, but be wary of the energy gauge and stay within a stable range!</CardDescription>
                            {/* <CardContent id="project-image-sb" className={`${carouselCardImageBaseClass}`}> */}
                            <img className={`${carouselCardImageBaseClass}`} src="/project/stay-bouncy/sb-placeholder.png" />
                            <CardDescription className={`${carouselCardToolsListBaseClass}`}>Prototyped with: Godot, GDScript</CardDescription>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}>
                                <a href="https://github.com/1bucket/stay-bouncy" target="_blank">Github</a>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>project 2</h5></CardHeader>
                            <CardDescription className={`${carouselCardDescBaseClass}`}>(blurb here)</CardDescription>
                            <CardContent className={`${carouselCardImageBaseClass}`}>(photo here)</CardContent>
                            <CardDescription className={`${carouselCardToolsListBaseClass}`}>tools used</CardDescription>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}>(links here)</CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>project 3</h5></CardHeader>
                            <CardDescription className={`${carouselCardDescBaseClass}`}></CardDescription>
                            <CardContent className={`${carouselCardImageBaseClass}`}>dummy</CardContent>
                            <CardDescription className={`${carouselCardToolsListBaseClass}`}>tools used</CardDescription>
                            <CardFooter className={`${carouselCardFooterBaseClass}`}>toamto</CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={`${carouselItemClass}`}>
                        <Card className={`${carouselCardBaseClass}`}>
                            <CardHeader className={`${carouselCardHeaderBaseClass}`}><h5>project 4</h5></CardHeader>
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