/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Error } from "./response.helpers";

const sendHttpRequest = async (url: string, method: any, options = {}) => {
  try {
    const { status, data } = await axios({ url, method, ...options });
    return { status, data };
  } catch (e: any) {
    const error = Error(e.message, e.response ? e.response.status : 500);
    console.log('sendHttpRequest::apiHelpers', error);
    throw error;
  }
};

export default sendHttpRequest;