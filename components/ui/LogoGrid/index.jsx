import Image from 'next/image'
import temu from '../../../public/logos/temu.svg'
import titok from '../../../public/logos/tiktok.svg'
import amazon from '../../../public/logos/amazon.svg'
import ebay from '../../../public/logos/ebay.svg'

const logos = [
    {
        src: temu,
        alt: "temu"
    },
    {
        src: titok,
        alt: "tiktok"
    },
    {
        src: amazon,
        alt: "amazon"
    },
    {
        src: ebay,
        alt: "ebay"
    },
]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                TRUSTED BY PLATFORMS FROM AROUND THE WORLD
            </h2>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image src={item.src} alt={item.alt} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid