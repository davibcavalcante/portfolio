import { Check, X } from "lucide-react"

const Alert = ({ message, status, hidden }) => {

    return (
        <section className={`${hidden ? 'hidden' : 'flex'} ${status ? 'bg-ok-alert' : 'bg-bad-alert'} w-5/6 max-w-96 min-h-12 h-auto fixed top-5 left-1/2 -translate-x-1/2 z-50 py-3 rounded-sm shadow-xl flex-col justify-center items-center`}>
            <span className="w-8 h-8 border border-white flex items-center justify-center rounded-full">
                <Check color="white" />
            </span>
            <p className="text-white text-xl font-semibold tracking-wider">{message}</p>
        </section>
    )
}

export default Alert