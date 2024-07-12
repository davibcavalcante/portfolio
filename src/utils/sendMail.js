import { apiFetch } from "../axios/config"

export const sendMail = async (form) => {
    const formData = {
        from: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    }

    try {
        const results = await apiFetch.post('/sendmail', formData)
        
        if (results.status === 200) {
            const message = await results.data.message      
            return { message, status: true, hidden: false }
        }

    } catch (err) {
        return { message: err.message, status: false, hidden: false }
    }
}