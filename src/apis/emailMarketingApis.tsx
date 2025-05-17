import axios from "axios";
const BACK_END_URL ="https://abtik-digital-bn-rokb.onrender.com"

export const addEmail = async (formData: any) => {
    try {
        let res = await axios.post(`${BACK_END_URL}/emailMarketing/addEmail`, formData)
        return res
    } catch (error) {
        throw error
    }
}