// import './Solution.css'
import Solutions from '../Image/Solution.svg'

export default function Solution() {
    return (
        <section className="solution">
            <div className="solution_block">
                <img className='solution_block_background' src={Solutions} alt="Solution" />
                <p className='solution_block_text'>Solar <span>Solutions</span> for a Sustainable Tomorrow<span>.</span></p>
            </div>
        </section>
    )
}