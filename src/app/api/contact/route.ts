import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // TODO: Integrate with SendGrid/Resend/SES
        // For now, we'll log to console and simulate a delay
        console.log("Contact Form Submission:", { name, email, message });

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
