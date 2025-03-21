import { useEffect } from "react";


const COLORS_TOP = ["#13FFAA","#1E67C6","#CE84CF","#DD335C"]
export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color,COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    })

    return {
        <></>
    }

}


