import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const mediaPath = path.join("/");
  const backendUrl = `http://localhost:8080/media/${mediaPath}`;

  const res = await fetch(backendUrl);

  if (!res.ok) {
    return new NextResponse("Not found", { status: 404 });
  }

  const buffer = await res.arrayBuffer();
  const contentType = res.headers.get("content-type") || "image/jpeg";

  return new NextResponse(buffer, {
    headers: { "Content-Type": contentType },
  });
}