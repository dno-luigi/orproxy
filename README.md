# orproxy - recovered production snapshot (v43)

**This repository is not a source baseline.** It records what was deployed.

- `bundle/worker.js` - exact deployed artifact, 504 bytes, SHA-256 `94ce71cb32fc2e3913ab48701c3cc9f54e18093df62c06adaf55546d98b2b6f6`.
- Tag `recovered-v43` marks the commit holding that artifact.
- `src/parts/` - derived navigation split; `node src/assemble.mjs --check` reproduces the bundle exactly.
- `PROVENANCE.md` / `provenance.json` - version id, deploy time, compatibility date, retrieval
  method and timestamp, SHA-256, workers_dev flags, binding inventory.

Never regenerate `bundle/` from `src/parts/`. The bundle is authoritative; the split derives from it.
