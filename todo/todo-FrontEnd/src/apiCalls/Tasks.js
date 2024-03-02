import axiosInstance from "./AxiosInstance";
const MODEL = "/tasks";
export const GetAllTasks = async () => {
  try {
    const response = await axiosInstance.get(`${MODEL}/all`);
    console.log(`Get all Tasks API response ${response.data}`);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const AddTask = async (payload) => {
  try {
    const response = await axiosInstance.post(`${MODEL}/add`, payload);
    return response;
  } catch (error) {
    return error;
  }
};

export const DeleteTask = async (id) => {
  try {
    if (id) {
      const response = await axiosInstance.delete(`${MODEL}/${id}`, id);
      return response;
    }
  } catch (error) {
    return error;
  }
};
