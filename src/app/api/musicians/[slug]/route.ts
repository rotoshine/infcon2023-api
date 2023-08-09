import { NextRequest, NextResponse } from "next/server";

import database from "../../../database";

export function GET(_: NextRequest, { params }: { params: { slug: string } }) {
  const musician = database.find((musician) => musician.slug === params.slug);

  if (!musician) {
    return NextResponse.json(
      {
        message: "not found",
      },
      {
        status: 404,
      }
    );
  }
  return NextResponse.json(musician);
}
