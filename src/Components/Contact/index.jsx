import { Locate, Mail, Phone } from "lucide-react"
import { useState } from "react"
import { sendMail } from "../../utils/sendMail"

const Contact = () => {
    const [focusState, setFocusState] = useState({
        subject: false,
        email: false,
    })

    const handleFocus = (field) => {
        setFocusState({ ...focusState, [field]: true });
    }

    const handleBlur = (field) => {
        setFocusState({ ...focusState, [field]: false });
    }

    const contact = [
        { icon: <Phone />, info: 'Número', content: '+55 (62) 98159-7835' },
        { icon: <Mail />, info: 'Email', content: 'indigitalprogcontato@gmail.com' },
        { icon: <Locate />, info: 'Addres', content: 'Goiânia, Goiás' },
    ]

    return (
        <section className="bg-dark-blue h-auto py-8 px-4 flex flex-col gap-6 2xl:py-12 2xl:px-52">
            <h1 className="text-white text-5xl font-semibold lg:text-6xl">Contato</h1>
            <p className="text-opaque md:max-w-2xl lg:text-xl 2xl:leading-relaxed">Veja abaixo todas as minhas informações de contato. Estou sempre aberto para falar sobre projetos e negócios.</p>
            <section className="flex flex-col gap-4 lg:flex-row">
                {contact.map(item =>
                    <section className="bg-blue flex items-center gap-4 lg:w-4/12" key={item.info}>
                        <section className="bg-opaque text-white p-4">
                            {item.icon}
                        </section>
                        <section>
                            <h1 className="text-white">{item.info}</h1>
                            <h2 className="text-opaque">{item.content}</h2>
                        </section>
                    </section>
                )}
            </section>
            <section className="bg-blue py-6 px-4">
                <h1 className="text-white text-xl font-semibold mb-4 lg:text-3xl">Me envie um email!</h1>
                <form autoComplete="off" onSubmit={sendMail} className="flex flex-col gap-8">
                    <section className="relative">
                        <input type="text" name="subject" placeholder="Assunto •" className="text-white bg-transparent w-full outline-none" onFocus={() => handleFocus('subject')} onBlur={() => handleBlur('subject')} />
                        <div className="bg-white w-full h-0.5">
                            <div className={`bg-light-blue ${focusState.name ? 'w-full' : 'w-0'} h-0.5 duration-500`}></div>
                        </div>
                    </section>
                    <section>
                        <input type="email" name="email" placeholder="Seu Email •" className="text-white bg-transparent w-full outline-none" onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} />
                        <div className="bg-white w-full h-0.5">
                            <div className={`bg-light-blue ${focusState.email ? 'w-full' : 'w-0'} h-0.5 duration-500`}></div>
                        </div>
                    </section>
                    <section>
                        <textarea type="text" name="message" className="text-white bg-transparent border-2 border-white p-2 w-full min-h-20 lg:min-h-40" placeholder="Mensagem •" />
                    </section>
                    <button type="submit" className="bg-white w-fit px-8 py-1">Enviar</button>
                </form>
            </section>
        </section>
    )
}

export default Contact