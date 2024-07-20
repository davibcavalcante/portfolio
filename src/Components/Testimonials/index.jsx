import { Quote } from "lucide-react"
import IMG1 from '../../assets/testimonials/1.jpg'
import IMG2 from '../../assets/testimonials/2.jpg'

const Testimonials = () => {

    const testimonials = [
        {
            name: 'Tayrone Ramos',
            office: 'Cliente',
            photo: IMG2,
            text: 'Estamos extremamente satisfeitos com o trabalho excepcional que o Davi realizou para o nós do Jubão Fora de Estrada Automóvel Clube. O site desenvolvido por ele não apenas atendeu, mas superou todas as nossas expectativas. A habilidade técnica e o profissionalismo foram impressionantes, desde a concepção inicial até a implementação final. Agradecemos pela dedicação em capturar a essência do nosso projeto e transformá-la em uma plataforma online tão funcional. Sem dúvida, recomendamos os serviços de desenvolvimento do Davi a todos que buscam qualidade e excelência.'
        },

        {
            name: 'Myriad',
            office: 'Cliente',
            photo: IMG1,
            text: 'O site do meu casamento ficou perfeito. Exatamente do jeito que eu queria. Escolhemos as cores e o que queríamos que tivesse no site e o Davi idealizou a estrutura que nos atendeu super bem. Todos os meus convidados acharam lindo e eu fiquei muito feliz com a entrega dele. Site maravilhoso.'
        },
    ]

    return (
        <section className="bg-blue h-auto py-8 px-4 flex flex-col gap-4 2xl:py-12 2xl:px-52">
            <h1 className="text-white text-5xl font-semibold lg:text-6xl">Depoimentos</h1>
            <p className="text-opaque text-xl md:max-w-2xl lg:text-xl 2xl:leading-relaxed">Veja quais foram as experiências dos meus clientes em relação ao meu trabalho e aos projetos desenvolvidos</p>
            {testimonials.map(item =>
                <section className="bg-dark-blue h-auto py-8 px-4 flex flex-col gap-6 rounded-xl shadow-xl animate-flip-down animate-twice animate-duration-1000 animate-delay-[250ms] animate-ease-in-out" key={item.name}>
                    <section>
                        <section className="flex gap-4">
                            <section className="w-16">
                                <img src={item.photo} alt={`Foto de ${item.client}, autor do depoimento`} className="w-full" />
                            </section>
                            <section className="flex-1">
                                <h1 className="text-white text-xl md:text-2xl">{item.name}</h1>
                                <h2 className="text-opaque md:text-xl">{item.office}</h2>
                            </section>
                            <Quote className="text-opaque" size={40} />
                        </section>
                    </section>
                    <section>
                        <p className="text-opaque md:text-lg">{item.text}</p>
                    </section>
                </section>
            )}
        </section>
    )
}

export default Testimonials