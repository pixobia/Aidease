

import Image from "next/image";


import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import Heading from "../components/Heading";

const aboutus = async () =>{
    return(
        <ClientOnly>
            <Container>
            <Heading
             title="AidEase"
             subtitle="𝐋𝐞𝐚𝐝 𝐋𝐨𝐧𝐠 𝐋𝐢𝐟𝐞"
             center
            />
            </Container>
            <Container>
            <div className="flex flex-1 justify-start items-center flex-col mt-1 gap-6">
                    <div className="flex flex-col items-center justify-center text-center">
                    <p>AidEase combines Aid for assistance and support with Ease for simplicity and comfort, conveying a clear message of user-friendly support for health-related issues. It is easy to pronounce and remember, making it a great choice.Our website primarily focuses on providing services for various health-related issues. We recognize that not all health services are easily available at nearby hospitals, and that is where AidEase comes in. We proudly feature hospitals from across India, ensuring there registered on our platform. What sets us apart is that these hospitals transparently list their services, making it easy for users to find the help they need. AidEase is more than just a website. It is a healthcare solution that bridges the gap between those seeking specialized health support and the hospitals that can provide it. Our mission is to make healthcare accessible, efficient, and hassle-free, empowering individuals in need with the information and choices they require.</p>
                    </div>
                    <div className="h-64 w-96 relative">
                    <Image
                    src="/images/about.png"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    />
                   </div>
             </div>
           </Container>
            
        </ClientOnly>
    )
}

export default aboutus;
