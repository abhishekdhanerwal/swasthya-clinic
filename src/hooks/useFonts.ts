import { Montserrat } from "next/font/google";
import { Open_Sans } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Exo_2 } from 'next/font/google';
import { Playpen_Sans } from 'next/font/google';
import { Unlock } from 'next/font/google';
import { Sofadi_One } from 'next/font/google';
import { Zilla_Slab } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"] });
const openSans = Open_Sans({weight: "600", subsets: ["latin"]});
const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const exo2 = Exo_2({ weight: "300", subsets: ["latin"] });
const playpenSans = Playpen_Sans({ subsets: ["latin"] });
const unlock = Unlock({ weight: "400", subsets: ["latin"] });
const sofadiOne = Sofadi_One({ weight: "400", subsets: ["latin"] });
const zillaSlab = Zilla_Slab({ weight: "600", subsets: ["latin"] });

export const useFonts = () => {
    return {
        montserrat,
        openSans,
        robotoBold,
        roboto,
        exo2,
        playpenSans,
        unlock,
        sofadiOne,
        zillaSlab
    }
}