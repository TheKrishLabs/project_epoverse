import { publicApi } from "@/lib/axios";

interface RegisterPayload{
    fullName:string;
    email:string,
    password:string,
    confirmPassword:string
}

export const registerUser= async (data :RegisterPayload)=>{
    const res=await publicApi.post('/auth/register',data);
    return res.data;
};