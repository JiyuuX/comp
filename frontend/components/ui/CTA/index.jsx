import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/cta-image.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Hakkımızda
                        </h2>
                        <p className="mt-3 text-gray-600">
                        Platform Adı, endüstri, makine, CNC, ham madde ve saç kesim gibi birçok endüstriyel alanda faaliyet gösteren küçük, 
                        orta ve büyük ölçekli işletmelerin birbirleriyle bağlantı kurup işbirliği yapmalarını sağlayan yenilikçi bir platformdur. 
                        Misyonumuz, işletmeler arasında güçlü bir dijital köprü kurarak, teklif verme süreçlerini hızlandırmak ve işbirliğini artırmaktır.
                        Firmalar arasında yerini almak istersen, Başvuru butonuna basarak formu doldurabilirsin.  
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                        >
                            Başvur
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA