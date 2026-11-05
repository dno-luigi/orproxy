# Reconstruction status - orproxy

Stage 1 - **recovered artifact** (complete, authoritative): `bundle/worker.js`, tag `recovered-v43`,
504 bytes, SHA-256 `94ce71cb32fc2e3913ab48701c3cc9f54e18093df62c06adaf55546d98b2b6f6`.

Stage 2 - **readable navigation split** (complete, derived): 3 byte-exact segments split at
top-level declaration boundaries, with line ranges and per-part hashes in `src/parts.json`.
`node src/assemble.mjs --check` concatenates them and asserts byte equality with the bundle, so the
split cannot silently drift from the deployed artifact.

Stage 3 - **refactor into maintainable modules** (not started): requires behaviour-preserving
restructuring backed by tests. No equivalence is claimed until that suite exists; until then the
bundle remains the only authoritative statement of behaviour.
