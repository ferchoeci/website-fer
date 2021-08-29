import React from "react"
import Image from "next/image"
import profile from "../public/profile.png"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        About me
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                       
<p><strong>Certifications - Mulesoft Anypoint Platform:</strong></p>
<p>&bull; Mulesoft Certified Integration Architect - Level 1.<br />&bull; Mulesoft Certified Platform Architect - Level 1.<br />&bull; MuleSoft Certified Developer - Level 1.<br />&bull; MuleSoft Certified Developer - API Design Associate.</p>

                     </div>
                
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;