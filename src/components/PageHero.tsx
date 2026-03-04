import { ReactNode } from "react";
import AnimatedSection from "./AnimatedSection";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    bgImage?: string;
}

const PageHero = ({ title, subtitle, description, bgImage }: PageHeroProps) => (
    <div className={`relative ${bgImage ? 'h-[40vh] min-h-[300px]' : 'bg-secondary section-padding'} flex items-center justify-center overflow-hidden`}>
        {bgImage && (
            <>
                <div className="absolute inset-0">
                    <img src={bgImage} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-foreground/50" />
                </div>
            </>
        )}
        <div className={`relative z-10 max-w-4xl mx-auto text-center ${bgImage ? 'px-6' : ''}`}>
            <AnimatedSection>
                {subtitle && (
                    <p className={`section-subtitle mb-3 ${bgImage ? 'text-primary-foreground/80' : ''}`}>
                        {subtitle}
                    </p>
                )}
                <h1 className={`section-title mb-6 ${bgImage ? 'text-primary-foreground' : ''}`}>
                    {title}
                </h1>
                {description && (
                    <p className={`font-body max-w-2xl mx-auto leading-relaxed text-lg ${bgImage ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                        {description}
                    </p>
                )}
            </AnimatedSection>
        </div>
    </div>
);

export default PageHero;
