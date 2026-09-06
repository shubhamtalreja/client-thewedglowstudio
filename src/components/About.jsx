import React from 'react'

const About = ({ about }) => {
    return (
        <div ref={about} className='bg-zinc-800 rounded-xl container mx-auto p-5 opacity-70 relative z-10'>

            <div className='flex justify-center align-center text-white text-4xl'>
                About
            </div>
            <div className="flex justify-center items-left text-white text-xl mb-8">
                The WedGlow Studio is a premium creative space born from the collaboration of The Wedex Studio, a photography brand, and The Glow by Nitika, 
                a professional makeup artistry brand. Bringing together expertise in photography, makeup, and creative direction, The WedGlow Studio was created 
                with one vision to bring photography and beauty under one roof and turn every vision into a beautiful reality.

                From a fully equipped rental studio and creative portfolio shoots to wedding photography, bridal & non-bridal makeup, and professional makeup courses, 
                we offer a complete range of services designed for individuals, brands, artists, and couples.

                Whether you’re looking to create a striking fashion portfolio, showcase your products, capture the beauty of motherhood, celebrate your pre-wedding moments, 
                look your best as a bride, or build your career in makeup artistry. The WedGlow Studio is your space to create, express, and glow.

                Capturing moments. Creating beauty. Bringing it all together under one roof.
            </div>

        </div>
    )
}

export default About
