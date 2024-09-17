import './Service.css';
import Solar from '../Image/Solar_mask.svg';

export default function ServiceContent() {

    const ServiceBlock = ({imageId, image, header, description }) => {
        return (
            <div className="service_block">
                    <img id={imageId} src={image} alt="Logo" />
                    <h4 id='ser_head'>{header}</h4>
                    <span className='service_span'>{description}</span>
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
                    header={'Solar Solution'}
                    description={`Harness the power of the sun and embrace clean, 
                    renewable energy with our solar solutions.`}    
                />
            </div>
        </section>
    )
}