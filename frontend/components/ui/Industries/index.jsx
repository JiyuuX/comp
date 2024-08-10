import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import drilling from "../../../public/icons/drilling.png"
import robotics from "../../../public/icons/robotics.png"
import factoryMachine from "../../../public/icons/factory-machine.png"
import uzay from "../../../public/icons/uzay-havacılık.png"
import cnc from "../../../public/icons/cnc.png"

const Industries = () => {

    const industries = [
        {
            icon: drilling,
            title: "Endüstriyel Kesim",
            desc: ""
        },
        {
            icon: robotics,
            title: "Robotic",
            desc: ""
        },
        {
            icon: factoryMachine,
            title: "Özel Kesim",
            desc: ""
        },
        {
            icon: uzay,
            title: "Uzay ve Havacılık",
            desc: ""
        },
        {
            icon: cnc,
            title: "CNC",
            desc: ""
        },
      
    ]

    return (
        <SectionWrapper>
            <div id="industries" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Endüstriler
                    </h2>
                    <p>
                        Çok daha fazlası
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            industries.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                        <Image src={item.icon} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Industries