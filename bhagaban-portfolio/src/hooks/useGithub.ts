import { useEffect, useState } from "react";

export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  fork: boolean;
  stargazers_count: number;
  pushed_at: string;
};

export type GhEvent = {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload: { commits?: { message: string }[]; action?: string; ref_type?: string };
};

type State<T> = { data: T | null; status: "loading" | "ready" | "error" };

/** Fetches public data from the GitHub REST API (unauthenticated, rate limited). */
export function useGithub<T>(path: string): State<T> {
  const [state, setState] = useState<State<T>>({ data: null, status: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com${path}`, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.json() as Promise<T>;
      })
      .then((data) => setState({ data, status: "ready" }))
      .catch((err) => {
        if (err.name !== "AbortError") setState({ data: null, status: "error" });
      });
    return () => controller.abort();
  }, [path]);

  return state;
}
