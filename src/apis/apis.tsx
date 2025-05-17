import axios from "axios";
const BACK_END_URL = "https://abtik-digital-bn-rokb.onrender.com";

export const handleAddContact = async (data: any) => {
  try {
    let res = await axios.post(
      `${BACK_END_URL}/contact/addContactDetails`,
      data
    );
    return res;
  } catch (error) {
    throw error;
  }
};
