import { CarTaxiFront } from "lucide-react"
import { apiFetch } from "../axios/config"

export const sendMail = async (e) => {
    e.preventDefault()

    const formData = {
        from: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
    }

    try {
        const results = await apiFetch.post('/sendmail', formData)
        const data = await results.data
        console.log(data.message)
    } catch (err) {
        console.log(err)
    }
}