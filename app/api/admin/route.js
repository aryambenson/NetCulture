import { createToken } from "@/lib/auth";
// import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();

    const { username, password } = body;

    const admin = await prisma.admin.findUnique({
      where: {
        username
      }
    });

    if (!admin) {
      return Response.json({
        success: false,
        message: "Admin not found"
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      admin.password
    );

    if (!validPassword) {
      return Response.json({
        success: false,
        message: "Invalid password"
      });
    }

    const token = createToken({
      username: admin.username
    });

    return Response.json({
      success: true,
      token,
      message: "Login successful"
    });

  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
      message: "Server error"
    });
  }
}