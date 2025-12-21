export interface GitHubProject {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink?: string;
  stars: number;
  updatedAt: string;
  language: string | null;
}

export async function fetchGitHubProjects(
  username: string
): Promise<GitHubProject[]> {
  try {
    const response = await fetch(
      `/api/github-projects?username=${username}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
}

