import React from 'react'
import Marquee from "react-fast-marquee";
import '../../styles/mentorsmarque.css';
import mentors from '../../assets/login.png';

const sponsors = [
    { image: mentors, title: 'Aditya Shah' },
    { image: mentors, title: 'Meet Dodiya' },
    { image: mentors, title: 'Rehman Khan' },
    { image: mentors, title: 'Karan Gandhi' },
    { image: mentors, title: 'Sigma Ashish' },
    { image: mentors, title: 'Akshar Gav' }
];

const MentorsMarque = () => {
    return (
        <div>
            <div className='imgMar mb-5'>
                <>
                    <br />
                    <br />
                    <br />
                    <br />
                </>
                <div style={{ position: 'relative' }}>
                    <Marquee className='bborder' pauseOnHover={true} speed={120}>
                        {sponsors.map((sponsor, index) => (
                            <div>
                                <p className='sponsor-title mb-0' >{sponsor.title}</p>
                                <p className='text-secondary secondarySponsors'>CTO | FullStack</p>
                                <div key={index} className='sponsor-container'>
                                    <img src={sponsor.image} className='images1' alt={sponsor.title} />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default MentorsMarque
