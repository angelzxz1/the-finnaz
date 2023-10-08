import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { firstName, lastName, email, phoneNumber, message } =
            await req.json();
        const contactMessage = await db.contactMessage.create({
            data: {
                firstName,
                lastName,
                email,
                phoneNumber,
                message,
            },
        });

        return NextResponse.json(contactMessage);
    } catch (error) {
        console.log("[SERVER_POST]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function GET() {
    console.log("[SERVER_GET]");
    return NextResponse.json({ message: "OK" });
}
