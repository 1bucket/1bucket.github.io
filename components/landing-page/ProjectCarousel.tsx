import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import ProjectCarouselCard from './ProjectCarouselCard';

import './ProjectCarousel.css'

export default function ProjectCarousel() {
    return <div>
        <Carousel>
            <CarouselContent>
                <CarouselItem className="basis-1/3">
                    <ProjectCarouselCard>project dummy 1</ProjectCarouselCard>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <ProjectCarouselCard>project dummy 2</ProjectCarouselCard>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <ProjectCarouselCard>project dummy 3</ProjectCarouselCard>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
}