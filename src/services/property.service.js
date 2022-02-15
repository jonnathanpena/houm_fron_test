import axios from 'axios';
import { allProperties } from '../constants/apis';

export const getAllProperties = async (page) => {
  try {
    const { data } = await axios.get(`${allProperties}?page=${page}&size=20`);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
