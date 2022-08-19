import axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "10f79686-7638-4861-a038-fcca91fc433f"
  }
});


export const userAPI = {
  getUsers(currentPage = 1, pageSize = 100) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  }
}

