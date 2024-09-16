import './Choose.css';
import { choosing } from '../Data';

export default function ChooseBlock() {

    const ChooseContent = ({ number, header, desc }) => {
        return (
            <div className="choose_block">
                <h2>{number}</h2>
                <h4>{header}</h4>
                <p style={{color: 'var(--super-grey)'}}>{desc}</p>
            </div>
        )
    }

    const Choose = choosing.map((item, ind) => {
        return (
            <ChooseContent 
                key={ind} 
                number={item.number}
                header={item.header}
                desc={item.description}
            />
        )
    })

    return (
        <section className="choose">
            <div className="choose_wrapper">
                <div className="choose_description">
                    <h1 style={{lineHeight: '67px', maxWidth: '334px'}}>Why Choose Us?</h1>
                    <p className='choose_text'> 
                        Whether you're looking to switch to solar 
                        energy or upgrade your cable services, our sales 
                        and marketing company is here to help.
                    </p>
                </div>
                {Choose}
            </div>
        </section>
    )
}