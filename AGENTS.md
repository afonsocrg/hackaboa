# AGENTS.md

## Package manager: bun

This project uses **bun**. The committed lockfile is `bun.lock`.

- Install: `bun install`
- Dev: `bun run dev`
- Build: `bun run build`

### Do NOT commit a `package-lock.json`

Cloudflare Pages auto-detects the package manager from the lockfile. If a
`package-lock.json` is present it switches to `npm ci`, which has bitten us
before: a lockfile generated on macOS only pins the macOS Rollup binary
(`@rollup/rollup-darwin-arm64`) and the Linux build host then fails with
`Cannot find module @rollup/rollup-linux-x64-gnu` (npm bug #4828).

Keep `bun.lock` as the single source of truth. If a `package-lock.json`
reappears, delete it.
