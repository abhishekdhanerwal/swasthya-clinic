import { Montserrat } from "next/font/google";
import { Open_Sans } from 'next/font/google';
import { Roboto } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"] });
const openSans = Open_Sans({weight: "600", subsets: ["latin"]});
const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const useFonts = () => {
    return {
        montserrat,
        openSans,
        robotoBold,
        roboto
    }
}