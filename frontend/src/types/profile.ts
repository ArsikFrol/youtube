import { ProfileModel } from "../../../backend/src/generated/prisma/models";
import { TGetChannel } from "./channel";

export type TGetProfile = ProfileModel & {
    channel: TGetChannel,
}