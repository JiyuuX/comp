import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Türkiyenin İlk Endüstriyel İletişim ve Teklif Platformu
                </h1>
                <p className="max-w-xl mx-auto">
                    Firmalardan iş bağlamak, ürün fiyatı almak için kullanın!
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Hemen Başla!
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        Daha fazlası
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero