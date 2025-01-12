import { motion } from "framer-motion"
import { HERO_CONTENT } from "../constants"
import prince from "../assets/prince.webp"
import prince_resume from "../constants/prince_resume12.pdf"

const textVarients = {
    hidden: {opacity: 0, y:50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}}
}
const containerVariants = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    }
}

const imageVarients = {
    hidden: {clipPath: "inset(0 50% 0 50%" },
    visible: {
        clipPath: "inset(0 0% 0 0%",
        transition: {duration: 1.2, ease: "easeInOut"}
    }
}

const Hero = () => {
  return (
    <section>
        <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
            <motion.div className="w-full md:w-1/2 p-8" initial="hidden" animate="visible" varients={containerVariants}>
                <motion.h1 className="text-2xl md:text-3xl lg:text-5xl my-14" varients={textVarients}>
                    {HERO_CONTENT.greeting}
                </motion.h1>
                <motion.p className="text-xl md:text-2xl lg:text-4xl mb-4" variants={textVarients}>
                    {HERO_CONTENT.introduction}
                </motion.p>
                <motion.p className="text-xl md:text-2xl lg:text-4xl" variants={textVarients}>
                    {HERO_CONTENT.description}
                </motion.p>
                <motion.a className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl" href={prince_resume} download rel=" noopener noreferrer" target="_blank" varients={textVarients}>
                    {HERO_CONTENT.resumeLinkText}
                </motion.a>
            </motion.div>
            <motion.div className="w-full md:w-1/2 p-8" initial="hidden" animate="visible" varients={imageVarients} >
                <img src={prince} alt="Prince Chaudhary" width={650} height={650} className="rounded-3xl" />
            </motion.div>
        </div>
    </section>
  )
}

export default Hero
