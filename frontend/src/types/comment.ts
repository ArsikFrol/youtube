import { CommentModel } from "../../../backend/src/generated/prisma/models";
import { TGetProfile } from "./profile";

export type TGetComment = CommentModel & {
    writer: TGetProfile
}