import Image from 'next/image'
import kosgep from '../../../public/logos/kosgep.png'
import ticaret_bakanligi from '../../../public/logos/ticaret-bakanligi.png'
import sanayi from '../../../public/logos/sanayiBakanligi.png'

const logos = [

    {
        src: kosgep,
        alt: "sendgrid"
    },
    {
        src: ticaret_bakanligi,
        alt: "ticaret_bakanligi"
    },
    {
        src: sanayi,
        alt: "sanayi"
    },
]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                Tarafından Desteklenmektedir
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