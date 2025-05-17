import axios from "axios";
const BACK_END_URL =import.meta.env.VITE_BACK_END_URL
const B_URL =import.meta.env.B_URL

console.log("this is url text",BACK_END_URL)

export const addEmail = async (formData: any) => {
    try {
        console.log("this is url ",BACK_END_URL)
        console.log("this b is url ",B_URL)

        
        let res = await axios.post(`${BACK_END_URL}/emailMarketing/addEmail`, formData)
        return res
    } catch (error) {
        throw error
    }
}