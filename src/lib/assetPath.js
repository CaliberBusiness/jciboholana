const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBasePath(path) {
  if (!path || !basePath || !path.startsWith('/')) {
    return path;
  }

  if (path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
}

export function prefixImagePaths(value) {
  if (typeof value === 'string') {
    return value.startsWith('/images/') ? withBasePath(value) : value;
  }

  if (Array.isArray(value)) {
    return value.map(prefixImagePaths);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, prefixImagePaths(entry)])
    );
  }

  return value;
}
