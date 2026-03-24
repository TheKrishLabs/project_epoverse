import { privateApi, publicApi } from "@/lib/axios"

export const getProfileDetails= async ()=>{
    const detailsRes=await privateApi.get('users/profile')
    return detailsRes.data
}