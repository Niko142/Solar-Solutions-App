import './Service.css';
import Solar from '../Image/Solar_mask.svg';
import Cable from '../Image/Cable_mask.svg';
import Deal from '../Image/Deal_mask.svg';
import Consultation from '../Image/Consultation_mask.svg';
import Service from '../Image/Service.svg';

export default function ServiceContent() {

    const ServiceBlock = ({imageId, image, blockId, header, description }) => {
        return (
            <div className="service_block" id={blockId}>
                    <img style={{display: 'block'}} id={imageId} src={image} alt="Logo" />
                    <h4 id='ser_head'>{header}</h4>
                    <p className='service_span'>{description}</p>
            </div>
        )
    }

    return (
        <section className="service">
            <div className="service_header">
                <h5>Our Services</h5>
                <h1 id='h_serv'>What We Do</h1>
            </div>
            <div className="service_content">
                <ServiceBlock 
                    image={Solar} imageId={'solar'}
                    header={'Solar Solutions'}
                    description={`Harness the power of the sun and embrace clean, 
                    renewable energy with our solar solutions.`}    
                />
                <div className="service_image">
                    <img src={Service} alt="Service" />
                </div>
                <ServiceBlock 
                    image={Deal} imageId={'deal'}
                    header={'Deals and Promotions'}
                    description={`We pride ourselves on securing great deals 
                        and promotions for our customers.`}
                />
                <ServiceBlock 
                    image={Cable} imageId={'cable'}
                    header={'Cable Services'}
                    description={`Stay connected with high-quality cable services 
                        that deliver reliable and fast internet, television`}
                />
                <ServiceBlock 
                    image={Consultation} imageId={'consultation'}
                    blockId={'last'}
                    header={'Consultation and Support'}
                    description={`We understand that navigating the solar and 
                        cable landscape can be overwhelming.`}
                />
            </div>
        </section>
    )
}