import axios from "axios";
const BACK_END_URL ="https://abtik-digital-bn-rokb.onrender.com"


export const addQuote = async (formData: any) => {
  try {
    let res = await axios.post(`${BACK_END_URL}/quote/addQuote`, formData);
    return res
  } catch (error) {
    throw error;
  }
};


