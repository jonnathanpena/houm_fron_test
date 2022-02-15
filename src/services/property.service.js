import axios from 'axios';
import { allProperties } from '../constants/apis';

export const getAllProperties = async () => {
  try {
    const { data } = await axios.get(allProperties);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
