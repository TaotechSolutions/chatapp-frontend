
import { create } from "zustand";

export const useChangeStatusStore = create((set)=>({
    status: "",
    setExpiresAt: null,
    newStatus: (text, expiresAt= null)=>set(()=>({
        status: text,
        setExpiresAt: expiresAt
    }))
}))