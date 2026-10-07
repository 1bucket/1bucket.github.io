'use client';

import { cn } from "cn"
import { useRef, useEffect, useState } from 'react';

import './BlankTabSection.css'

export enum BlankTabSectionType {
    TOP = "top",
    MIDDLE = "middle",
    BOTTOM = "bottom",
}

const SectionTypeCSSMapping: Record<BlankTabSectionType, string> = {
    "top": "top",
    "middle": "middle",
    "bottom": "bottom",
}

type BlankTabSectionProps = {
    sectionType: BlankTabSectionType,
}

export default function BlankTabSection({ sectionType, className, children, ...props }: BlankTabSectionProps & React.ComponentProps<"div">) {
    let [visible, setVisible] = useState(false);
    let sectionContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // console.log("setting up observer for " + props.id);
        const sectionContainer = sectionContainerRef.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && sectionContainer != null) {
                setVisible(true);
                observer.unobserve(sectionContainer);
            }
        }, {
            root: null,
            threshold: 0.1,
        });
        if (sectionContainer != null) {
            observer.observe(sectionContainer);
        }

        return () => {
            if (observer && sectionContainer != null) {
                observer.unobserve(sectionContainer);
            }
        }
    }, []);

    const tabLeft = <div id="left-tab" key="lt" className="tab bg-inherit"></div>;
    const tabRight = <div id="right-tab" key="rt" className="tab bg-inherit"></div>;
    const tabs = [tabLeft, tabRight];
    const blankLeft = <div id="left-blank" key="lb" className="blank bg-inherit"></div>;
    const blankRight = <div id="right-blank" key="rb" className="blank bg-inherit"></div>;
    const blanks = [blankLeft, blankRight];

    return (
        <div ref={sectionContainerRef} className={cn(`section-container ${SectionTypeCSSMapping[sectionType]} ${visible ? 'animate-entry' : ''}`, className)} {...props}>
            <div className="section-content">
                {children}
            </div>
            {sectionType != BlankTabSectionType.TOP ? tabs : ""}
            {sectionType != BlankTabSectionType.BOTTOM ? blanks : ""}
        </div>
    )
}