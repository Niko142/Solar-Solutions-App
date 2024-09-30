import './Experience.css';
import { experience } from '../Data'; 

export default function ExperienceBlock() {

    const ShowBlock = ({ header, desc, image }) => {
        return (
            <div className="block" style={{backgroundImage: `linear-gradient(to bottom, var(--black) 0.1%, transparent), url(${image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                <div className='block_content'>
                    <h3>{header}</h3>
                    <span className="text_block">{desc}</span>
                </div>
            </div>
        )
    }

    const Experience = experience.map((item, ind) => {
        return (
            <ShowBlock 
                key={ind} 
                header={item.header} 
                desc={item.description} 
                image={item.image}
            />
        )
    })


    return(
        <section className="experience">
            <h1>Our Expertise and Experience</h1>
            <div className="experience_wrapper">
                {Experience}
            </div>
        </section>
    )
}