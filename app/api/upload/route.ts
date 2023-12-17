import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";


cloudinary.config({
  cloud_name: "djypabbhd",
  api_key: "799718361846469",
  api_secret: "2etO_LoJwStOx0J23GFEOdyL_QA",
});

export async function POST(req: NextRequest) {
  const data = await req.formData()

  const image: any = data.get("image")

  if (!image) {
    return NextResponse.json("Please upload a valid file", { status: 400 })
    }

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const res: any = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({}, (error, result) => {
            if (error)
                reject(error)
            resolve(result)
        }
        ).end(buffer)
    })

    return NextResponse.json({
        message: "File uploaded successfully",
        url: res.secure_url,
    })
}