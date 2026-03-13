import { publicApi } from "@/lib/axios";


interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = async (data: LoginPayload) => {
  const res = await publicApi.post("/auth/login", data);
  return res.data;
};