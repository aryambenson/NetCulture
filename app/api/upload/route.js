import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  try {

    const body = await req.json();

    const result = await cloudinary.uploader.upload(
      body.image,
      {
        folder: "netculture"
      }
    );

    return Response.json({
      success: true,
      imageUrl: result.secure_url
    });

  } catch (error) {

    return Response.json({
      success: false,
      message: "Upload failed"
    });

  }
}