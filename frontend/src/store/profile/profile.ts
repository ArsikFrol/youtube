import { create } from "zustand";
import { TUseProfile } from "./types";

const useProfile = create<TUseProfile>((set) => ({
    profileId: 'profile_1'
}))

export default useProfile;
export const { getState, setState, subscribe } = useProfile;