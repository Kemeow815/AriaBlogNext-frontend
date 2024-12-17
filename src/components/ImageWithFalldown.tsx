"use client";
import Image from "next/image";
import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function ImageWithFalldown({ className, src, alt, falldownImg, dataSrc, objectPosition = "center" }: { className?: string, dataSrc?: string, src: string, alt: string, falldownImg?: string, objectPosition?: string }) {
    const [srcNow, setSrcNow] = useState(src);
    falldownImg = falldownImg ?? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    return (
        <Image
            fill={true}
            objectPosition={objectPosition}
            className={className}
            src={srcNow}
            data-src={dataSrc}
            overrideSrc={src}
            alt={alt}
            onError={() => {
                setSrcNow(falldownImg);
            }}
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        />
    );
}

export function LazyImageWithFalldown({ className, src, alt, falldownImg, dataSrc, objectPosition = "center" }: { className?: string, dataSrc?: string, src: string, alt: string, falldownImg?: string, objectPosition?: string }) {
    const [srcNow, setSrcNow] = useState(src);
    falldownImg = falldownImg ?? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    return (
        <LazyLoadImage
            className={className}
            src={srcNow}
            data-src={dataSrc}
            alt={alt}
            onError={() => {
                setSrcNow(falldownImg);
            }}
            effect="blur"
            wrapperProps={{
                style: {transitionDelay: "1s"},
            }}
        />
    );
}
export function ImgWithFalldown({ className, src, alt, dataSrc, falldownImg }: { className: string, dataSrc?: string, src: string, alt: string, falldownImg?: string }) {
    const [srcNow, setSrcNow] = useState(src);
    falldownImg = falldownImg ?? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    return (
        <img
            className={className}
            src={srcNow}
            data-src={dataSrc}
            alt={alt}
            onError={() => {
                setSrcNow(falldownImg);
            }}
        />
    );
}