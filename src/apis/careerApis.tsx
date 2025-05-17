import axios from "axios";
const BACK_END_URL ="https://abtik-digital-bn-rokb.onrender.com" ;

export const addApplication = async (formData: any) => {
  try {

    let res = await axios.post(`${BACK_END_URL}/career/addApplication`, formData,{headers:{
      "Content-Type":"multipart/form-data"
    }});
    return res;
  } catch (error) {
    throw error;
  }
};
