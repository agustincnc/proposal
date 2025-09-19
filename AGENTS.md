# Repository Guidelines

## Project Structure & Module Organization
- Keep authored material in `docs/` with subfolders per proposal (`docs/client-name/outline.md`).
- Store reusable prompt templates in `src/agents/`, using one module per agent persona.
- Place experiments, notebooks, or quick prototypes in `research/` and move finalized assets into `src/` or `docs/` before merging.
- Shared media belongs under `assets/`. Compress and strip metadata before committing.

## Build, Test, and Development Commands
ESte repositorio es solo lenguaje natural, 

## Coding Style & Naming Conventions
Escribe los comandos en castellano

## Testing Guidelines

## Commit & Pull Request Guidelines
- Structure commits around a single concern; use the format `type(scope): summary` (e.g., `feat(agent): add deal closer pitch flow`).
- Reference related issues in the body (`Refs #12`) and note follow-up tasks explicitly.
- PRs need a concise summary, validation notes (commands executed, test results), and screenshots or excerpts for UI/output changes.
- Tag a reviewer early and keep PRs under ~400 lines whenever possible.

## Agent-Specific Notes
- Document each agent's objective, inputs, and output contract at the top of the module.
- Capture unexpected behaviors in `docs/agents/known-limitations.md` to guide retraining work.
