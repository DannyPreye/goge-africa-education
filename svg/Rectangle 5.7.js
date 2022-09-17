import { motion } from "framer-motion"
const SmoothRec = ({ className }) => {
    const variant = {
        initial: {

        }
    }
    return (
        <svg width="65" className={className} height="436" viewBox="0 0 65 436" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Rectangle 5.7" filter="url(#filter0_d_3_144)">
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} d="M-103.558 0.829748L-111.947 215.449L-120.225 427.047L31.0489 275.773C70.2133 236.609 70.0846 173.071 30.7618 134.066L-103.558 0.829748Z" fill="url(#paint0_linear_3_144)" />
            </g>
            <defs>
                <filter id="filter0_d_3_144" x="-124.226" y="0.82959" width="188.564" height="434.218" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_144" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_144" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_3_144" x1="-317.159" y1="224.335" x2="7.59317" y2="57.0106" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFC000" />
                    <stop offset="1" stopColor="#FF8A00" />
                </linearGradient>
            </defs>
        </svg>
    )
}
export default SmoothRec
