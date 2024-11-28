import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Get started with LingerMade today
                </h2>
                <p className="mt-3 text-gray-600">
                Whether you’re looking to spark romance, simply feel incredible under your everyday attire, we have the perfect pieces to elevate your mood and style.
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    Go Shopping
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA