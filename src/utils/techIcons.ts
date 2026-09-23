export function getTechIcon(name: string): string | null {
  const normalized = name.toLowerCase().replace(/[\s\.\-_]/g, "");

  if (normalized.includes("python") || normalized === "py") return "/icons/python.svg";
  if (normalized === "go" || normalized.includes("golang")) return "/icons/go.svg";
  if (normalized.includes("cpp") || normalized.includes("c++")) return "/icons/cpp.svg";
  if (normalized === "c") return "/icons/c.svg";
  if (normalized.includes("javascript") || normalized === "js") return "/icons/javascript.svg";
  if (normalized.includes("typescript") || normalized === "ts") return "/icons/typescript.svg";
  if (normalized.includes("bash") || normalized.includes("shell") || normalized === "sh") return "/icons/bash.svg";

  if (normalized.includes("fastapi")) return "/icons/fastapi.svg";
  if (normalized.includes("node")) return "/icons/nodejs.svg";
  if (normalized.includes("express")) return "/icons/express.svg";
  if (normalized.includes("mongo")) return "/icons/mongodb.svg";
  if (normalized.includes("postgres")) return "/icons/postgresql.svg";
  if (normalized.includes("mysql")) return "/icons/mysql.svg";
  if (normalized.includes("redis")) return "/icons/redis.svg";
  if (normalized.includes("firebase")) return "/icons/firebase.svg";

  if (normalized.includes("react")) return "/icons/react.svg";
  if (normalized.includes("tailwind")) return "/icons/tailwindcss.svg";
  if (normalized.includes("vite")) return "/icons/vite.svg";
  if (normalized.includes("html")) return "/icons/html5.svg";
  if (normalized.includes("css")) return "/icons/css3.svg";
  if (normalized.includes("canvas")) return "/icons/html5.svg";

  if (normalized.includes("arch")) return "/icons/archlinux.svg";
  if (normalized.includes("linux")) return "/icons/linux.svg";
  if (normalized.includes("docker")) return "/icons/docker.svg";
  if (normalized.includes("github")) return "/icons/github.svg";
  if (normalized === "git") return "/icons/git.svg";
  if (normalized.includes("postman")) return "/icons/postman.svg";
  if (normalized.includes("cmake")) return "/icons/cmake.svg";
  if (normalized.includes("playwright")) return "/icons/playwright.svg";
  if (normalized.includes("socketio")) return "/icons/socketio.svg";
  if (normalized.includes("sqlalchemy")) return "/icons/sqlalchemy.svg";
  if (normalized.includes("posix") || normalized.includes("thread") || normalized.includes("concurrency") || normalized.includes("socket")) return "/icons/c.svg";

  return null;
}
