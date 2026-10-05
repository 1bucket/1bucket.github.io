'use client';

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

export default function ProjectCarousel() {
    return (
        <Carousel className="carousel">
            <CarouselContent>
                <CarouselItem className="basis-1/3">
                    <Card className="card-base">
                        <CardHeader>project 1</CardHeader>
                        <CardContent>dummy</CardContent>
                        <CardAction></CardAction>
                    </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <Card className="card-base">
                        <CardHeader>project 2</CardHeader>
                        <CardContent>dummy</CardContent>
                        <CardAction></CardAction>
                    </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <Card className="card-base">
                        <CardHeader>project 3</CardHeader>
                        <CardContent>dummy</CardContent>
                        <CardAction></CardAction>
                    </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <Card className="card-base">
                        <CardHeader>project 4</CardHeader>
                        <CardContent>dummy</CardContent>
                        <CardAction></CardAction>
                    </Card>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )

}