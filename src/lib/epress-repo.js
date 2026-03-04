export const EPRESS_REPO_BLOB_BASE = "https://github.com/epressworld/epress/blob/main";

export function normalizeEpressSourcePath(source) {
  if (!source || typeof source !== "string") return null;
  if (source.startsWith("../epress/")) return source.slice("../epress/".length);
  return source.replace(/^\/+/, "");
}

export function toEpressSourceUrl(source) {
  const normalized = normalizeEpressSourcePath(source);
  if (!normalized) return null;
  return `${EPRESS_REPO_BLOB_BASE}/${normalized}`;
}
