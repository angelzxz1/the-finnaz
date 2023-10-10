import { currentUser } from "@clerk/nextjs";
import { db } from "./db";
export const initialProfile = async () => {
    const user = await currentUser();
    if (!user) return undefined;

    const profile = await db.profile.findUnique({
        where: {
            userId: user.id,
        },
    });

    if (profile) return profile;
    const newProfile = await db.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
            phone: user.phoneNumbers[0].phoneNumber,
        },
    });
    return newProfile;
};
