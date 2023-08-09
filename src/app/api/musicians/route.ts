import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import database from "../../database";

export function GET(request: NextRequest) {
  return NextResponse.json(database);
}
