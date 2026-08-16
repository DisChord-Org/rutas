import * as path from "node:path";
import {
    getDirname,
    getBasename,
    getExtname,
    normalizePath,
    resolvePath,
    joinPaths,
    isAbsolutePath,
    getRelativePath,
    parsePath,
    formatPath,
    getSeparator,
    getDelimiter,
    isPathInside,
    getRoot,
} from "./internal";

// Re-export types and utilities
export type { ParsedPath, PathObject } from "./internal";

/**
 * Gets the parent directory of a path.
 * @param ruta - Path to process.
 * @returns The parent directory.
 */
export function directorio(ruta: string): string {
    return getDirname(ruta);
}

/**
 * Gets the base name of a path (last segment).
 * @param ruta - Path to process.
 * @param extension - Optional extension to remove.
 * @returns The base name.
 */
export function nombreBase(ruta: string, extension?: string): string {
    return getBasename(ruta, extension);
}

/**
 * Gets the extension of a path.
 * @param ruta - Path to process.
 * @returns The extension (including the dot).
 */
export function extension(ruta: string): string {
    return getExtname(ruta);
}

/**
 * Normalizes a path by removing redundant segments.
 * @param ruta - Path to normalize.
 * @returns Normalized path.
 */
export function normalizar(ruta: string): string {
    return normalizePath(ruta);
}

/**
 * Resolves an absolute path from the current working directory.
 * @param segmentos - Path segments to resolve.
 * @returns Absolute path.
 */
export function resolver(...segmentos: string[]): string {
    return resolvePath(...segmentos);
}

/**
 * Joins path segments using the system's separator.
 * @param segmentos - Segments to join.
 * @returns Joined path.
 */
export function unir(...segmentos: string[]): string {
    return joinPaths(...segmentos);
}

/**
 * Checks whether a path is absolute.
 * @param ruta - Path to check.
 * @returns `true` if absolute, `false` otherwise.
 */
export function esAbsoluta(ruta: string): boolean {
    return isAbsolutePath(ruta);
}

/**
 * Calculates the relative path from `from` to `to`.
 * @param desde - Source path.
 * @param hasta - Destination path.
 * @returns Relative path.
 */
export function relativa(desde: string, hasta: string): string {
    return getRelativePath(desde, hasta);
}

/**
 * Parses a path into its component parts.
 * @param ruta - Path to parse.
 * @returns Object with the path parts.
 */
export function analizar(ruta: string) {
    return parsePath(ruta);
}

/**
 * Builds a path from an object with its parts.
 * @param objeto - Object with path parts.
 * @returns Built path.
 */
export function formatear(objeto: path.ParsedPath): string {
    return formatPath(objeto);
}

/**
 * Gets the system's path segment separator.
 * @returns The separator (`/` on Unix, `\` on Windows).
 */
export function separador(): string {
    return getSeparator();
}

/**
 * Gets the system's path delimiter.
 * @returns The delimiter (`:` on Unix, `;` on Windows).
 */
export function delimitador(): string {
    return getDelimiter();
}

/**
 * Checks whether a path is inside another.
 * @param ruta - Path to check.
 * @param padre - Possible parent directory.
 * @returns `true` if `ruta` is inside `padre`, `false` otherwise.
 */
export function estaDentro(ruta: string, padre: string): boolean {
    return isPathInside(ruta, padre);
}

/**
 * Gets the root of a path.
 * @param ruta - Path to process.
 * @returns The root of the path.
 */
export function raiz(ruta: string): string {
    return getRoot(ruta);
}

/**
 * Gets the Windows version of the module.
 */
export const win32 = path.win32;

/**
 * Gets the POSIX (Unix/Linux) version of the module.
 */
export const posix = path.posix;

// Export the full path module as a fallback
export { path };