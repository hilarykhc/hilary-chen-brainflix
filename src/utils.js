import axios from "axios";

export const fetchVideos = async () => {
  try {
    const response = await axios.get("http://localhost:8080/videos");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
