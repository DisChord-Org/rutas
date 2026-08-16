# Rutas

A simplified, Spanish-named wrapper around `node:path` for the **Dischord** programming language.

Every function is pure and synchronous — no file system operations, just string manipulation. It auto-detects the platform separator and provides a consistent API for working with file paths across Windows and Unix systems.

## Install

```bash
pnpm add rutas
```

## API

| Function | Description |
| --- | --- |
| `dirname(ruta)` | Returns the parent directory of a path. |
| `basename(ruta, extension?)` | Returns the last portion of a path (file or folder name). Optionally removes a file extension. |
| `extname(ruta)` | Returns the file extension (including the dot). |
| `normalizar(ruta)` | Normalizes a path, resolving . and .. segments and removing redundant separators. |
| `resolver(...segmentos)` | Resolves a sequence of segments to an absolute path from the current working directory. |
| `unir(...segmentos)` | Joins path segments using the platform-specific separator. |
| `esAbsoluta(ruta)` | Returns the relative path from desde to hasta. |
| `analizar(ruta)` | Parses a path into an object with { root, dir, base, ext, name }. |
| `formatear(objeto)` | Builds a path from a parsed object (the opposite of analizar). |
| `separador()` | Returns the platform-specific path segment separator (/ on Unix, \ on Windows).. |
| `delimitador()` | Returns the platform-specific path delimiter (: on Unix, ; on Windows). |
| `estaDentro(ruta, padre)` | Checks whether a path is inside another path (useful for security). |
| `raiz(ruta)` | Returns the root of a path. |
| `win32` | The path module with Windows behavior (always available). |
| `posix` | The path module with POSIX/Unix behavior (always available). |
## Example

```ts
import { dirname, basename, unir, analizar, esAbsoluta } from "sf-path";

dirname("/home/user/docs/file.txt");  // "/home/user/docs"
basename("/home/user/docs/file.txt"); // "file.txt"
unir("users", "docs", "file.txt");    // "users/docs/file.txt"

const info = analizar("/home/user/app.js");
// { root: "/", dir: "/home/user", base: "app.js", ext: ".js", name: "app" }

esAbsoluta("/home/user"); // true
```

## Development

```bash
pnpm install
pnpm build      # compile with tsc
pnpm dev        # tsc --watch
pnpm typecheck  # type-check only
```

## License

ISC © Victor Chacon Garcia
