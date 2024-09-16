import './Service.css';

export default function ServiceContent() {

    const ServiceBlock = () => {
        return (
            <div className="service_block"></div>
        )
    }

    return (
        <section className="service">
            <div className="service_header">
                <h5>Our Services</h5>
                <h1 id='h_serv'>What We Do</h1>
            </div>
            <div className="service_content"></div>
        </section>
    )
}