import Image from "next/image";

export default function CustomSvg(props) {
    return (
        <div className="relative">
            <Image height={50} width={50} {...props} className={`svg ${props.className}`}loading="lazy"/>
        </div>
    )
}