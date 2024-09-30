import './Solution.css'
import Solutions from '../Image/Solution.svg'

export default function Solution() {
    return (
        <section className="solution">
            <div className="solution__wrapper">
                <img src={Solutions} alt="Solution" />
                <p className='solution_text'>Solar <span>Solutions</span> for a Sustainable Tomorrow<span>.</span></p>
            </div>
        </section>
    )
}