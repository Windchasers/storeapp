import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/cta.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Luxury You Can Feel, Passion You Can Wear." />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Luxury you can feel and passion you can wear.
                        </h2>
                        <p className="mt-3 text-gray-600">
                        At Lingermade, we inspire women to embrace their inner allure and express their individuality. Whether you’re looking to ignite passion, indulge in luxury, or simply feel extraordinary, our collections are designed to make you look and feel your best.
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                        >
                            Get started
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA