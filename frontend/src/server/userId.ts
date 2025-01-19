"use server"

import GetId from "@/components/Content/id/GetId";
import { currentUser } from "@clerk/nextjs/server"

export const getUserId = async () => {
    const userId = await currentUser();
    
    return userId;
}