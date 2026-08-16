import * as path from "node:path";

// Re-export path types for consistency
export type ParsedPath = path.ParsedPath;
export type PathObject = path.ParsedPath;

/**
 * Gets the parent directory of a path.
 */
export function getDirname(ruta: string): string {
    return path.dirname(ruta);
}

/**
 * Gets the base name of a path (last segment).
 */
export function getBasename(ruta: string, extension?: string): string {
    return extension ? path.basename(ruta, extension) : path.basename(ruta);
}

/**
 * Gets the extension of a path.
 */
export function getExtname(ruta: string): string {
    return path.extname(ruta);
}

/**
 * Normalizes a path by removing redundant segments.
 */
export function normalizePath(ruta: string): string {
    return path.normalize(ruta);
}

/**
 * Resolves an absolute path from the current working directory.
 * NOTE: In this wrapper, we use process.cwd() as the base.
 */
export function resolvePath(...segmentos: string[]): string {
    return path.resolve(...segmentos);
}

/**
 * Joins path segments using the system's separator.
 */
export function joinPaths(...segmentos: string[]): string {
    return path.join(...segmentos);
}

/**
 * Checks whether a path is absolute.
 */
export function isAbsolutePath(ruta: string): boolean {
    return path.isAbsolute(ruta);
}

/**
 * Calculates the relative path from `from` to `to`.
 */
export function getRelativePath(desde: string, hasta: string): string {
    return path.relative(desde, hasta);
}

/**
 * Parses a path into its component parts.
 */
export function parsePath(ruta: string): path.ParsedPath {
    return path.parse(ruta);
}

/**
 * Builds a path from an object with its parts.
 */
export function formatPath(objeto: path.ParsedPath): string {
    return path.format(objeto);
}

/**
 * Gets the system's path segment separator.
 */
export function getSeparator(): string {
    return path.sep;
}

/**
 * Gets the system's path delimiter.
 */
export function getDelimiter(): string {
    return path.delimiter;
}

/**
 * Checks whether a path is inside another.
 * Useful for security validations (path traversal prevention).
 */
export function isPathInside(ruta: string, padre: string): boolean {
    const relative = path.relative(padre, ruta);
    return !!relative && !relative.startsWith('..') && !path.isAbsolute(relative);
}

/**
 * Gets the root of a path.
 */
export function getRoot(ruta: string): string {
    return path.parse(ruta).root;
}

/**
 * Combines multiple functions into a chained operation.
 * Example: pipeline('/home/user', 'docs', 'file.txt') => '/home/user/docs/file.txt'
 */
export function pipeline(...segmentos: string[]): string {
    return path.normalize(path.join(...segmentos));
}

/**
 * Windows version of path (forced).
 */
export const win32 = path.win32;

/**
 * POSIX version of path (forced).
 */
export const posix = path.posix;