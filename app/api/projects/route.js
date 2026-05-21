// import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });

    return Response.json({
      success: true,
      projects
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: "Failed to fetch projects"
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const project = await prisma.project.create({
      data: {
        title: body.title,
        sector: body.sector,
        description: body.description,
        image: body.image || ""
      }
    });

    return Response.json({
      success: true,
      project
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: "Failed to create project"
    });
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json();

    await prisma.project.delete({
      where: {
        id: body.id
      }
    });

    return Response.json({
      success: true
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: "Failed to delete project"
    });
  }
}