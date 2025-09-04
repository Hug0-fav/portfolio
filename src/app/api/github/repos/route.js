// app/api/repos/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch repos from both accounts in parallel
    const [res1, res2] = await Promise.all([
      fetch("https://api.github.com/users/hug0-fav/repos"),
      fetch("https://api.github.com/users/hugo-fav/repos"),
    ]);

    // Check if either failed
    if (!res1.ok || !res2.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repos" },
        { status: res1.ok ? res2.status : res1.status }
      );
    }

    // Parse JSON
    const [repos1, repos2] = await Promise.all([res1.json(), res2.json()]);

    // Combine results
    const allRepos = [...repos1, ...repos2];

    return NextResponse.json(allRepos);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
