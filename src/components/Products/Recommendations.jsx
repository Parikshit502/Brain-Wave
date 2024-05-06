import React, { useRef } from "react";
import Section from "../Section";
import { BackgroundCircles } from "../design/Hero";
import { gradient } from "../../assets";
import Accordion from "./Accordion";
import { itemsA } from "../../constants/items";

export default function Recommendations() {
    const parallaxRef = useRef(null);
    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings>
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h2 mb-2">The best for you</h1>
                    <Accordion items={itemsA} />
                </div>
                <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] opacity-20">
                    <img src={gradient} className="w-full" width={1440} height={1800} alt="hero" />
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:pb-6">
                    <BackgroundCircles />
                </div>
            </div>
        </Section>
    );
}
