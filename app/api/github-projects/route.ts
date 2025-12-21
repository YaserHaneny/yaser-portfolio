import { NextResponse } from "next/server";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  fork: boolean;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username") || "YaserHonini";
    
    // جلب المشاريع من GitHub API
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=20&type=all`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Portfolio-Website",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub repositories");
    }

    const repos: GitHubRepo[] = await response.json();

    // تصفية المشاريع (إزالة Forks فقط، نعرض حتى بدون وصف)
    const projects = repos
      .filter((repo) => !repo.fork) // فقط المشاريع الأصلية (حتى بدون وصف)
      .map((repo) => {
        // تحسين اسم المشروع
        const title = repo.name
          .split(/[-_]/)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ");
        
        // بناء tech stack من language و topics
        const techStack = [
          repo.language,
          ...repo.topics.slice(0, 5), // أول 5 topics
        ].filter(Boolean) as string[];

        return {
          id: repo.id,
          title: title,
          description: repo.description || `${title} - A project built with modern technologies`,
          techStack: techStack.length > 0 ? techStack : [repo.language || "Code"].filter(Boolean),
          githubLink: repo.html_url,
          liveDemoLink: repo.homepage || undefined,
          stars: repo.stargazers_count,
          updatedAt: repo.updated_at,
          language: repo.language,
        };
      })
      .sort((a, b) => {
        // ترتيب حسب النجوم أولاً، ثم حسب آخر تحديث
        if (b.stars !== a.stars) {
          return (b.stars || 0) - (a.stars || 0);
        }
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      })
      .slice(0, 12); // عرض أول 12 مشروع

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

