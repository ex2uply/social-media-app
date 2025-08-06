import { getUserId } from "@/actions/util/getUserInfos";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { UnauthorizedError } from "@/error/UnauthorizedError";

export async function GET(req: NextRequest) {
  const conversationId = req.nextUrl.searchParams.get(
    "conversationId"
  ) as string;

  try {
    const userId = await getUserId();
    const conversationUsers = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      select: {
        users: {
          select: {
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
    });
    if (!conversationUsers) return NextResponse.json({message:"Conversation user not found"}, { status: 404 });

    const otherUsers = conversationUsers.users.filter(
      (u) => u.user.id !== userId
    );
    return NextResponse.json(otherUsers[0].user, { status: 200 });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ message: error.message }, { status: 401 });
    }
    return NextResponse.json({ message: "Could not get conversation user" }, { status: 500 });
  }
}
