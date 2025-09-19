# Repository Guidelines

## Project Structure & Module Organization
- Keep authored material in `docs/` with subfolders per proposal (`docs/client-name/outline.md`).
- Store reusable prompt templates in `src/agents/`, using one module per agent persona.
- Place experiments, notebooks, or quick prototypes in `research/` and move finalized assets into `src/` or `docs/` before merging.
- Shared media belongs under `assets/`. Compress and strip metadata before committing.

## Build, Test, and Development Commands
- Run `python -m venv .venv && source .venv/bin/activate` to create an isolated workspace.
- Use `pip install -r requirements.txt` once dependency management lands; commit updates to the lockfile alongside code changes.
- Lint documentation with `npx markdownlint docs/**/*.md`.
- Execute lightweight validations with `pytest` (targeting the `tests/` package) before opening a PR.

## Coding Style & Naming Conventions
- Follow PEP 8 with 4-space indentation in Python modules and Black formatting (`black src tests`).
- Name agent modules with snake_case (`src/agents/deal_closer.py`) and classes in PascalCase.
- Markdown headings use Title Case; filenames stay lowercase with hyphens (`docs/client-alpha/brief.md`).
- Prefer descriptive, action-focused function names (`generate_pitch`, `score_lead`).

## Testing Guidelines
- New functionality requires unit coverage in `tests/` mirroring the package path (`tests/agents/test_deal_closer.py`).
- Use pytest fixtures for sample data; keep fixtures small and anonymized.
- Aim for >=85% coverage on agent logic. Document any exceptions in the PR description.
- When adding prompts, include regression assertions that validate key tokens or behaviors.

## Commit & Pull Request Guidelines
- Structure commits around a single concern; use the format `type(scope): summary` (e.g., `feat(agent): add deal closer pitch flow`).
- Reference related issues in the body (`Refs #12`) and note follow-up tasks explicitly.
- PRs need a concise summary, validation notes (commands executed, test results), and screenshots or excerpts for UI/output changes.
- Tag a reviewer early and keep PRs under ~400 lines whenever possible.

## Agent-Specific Notes
- Document each agent's objective, inputs, and output contract at the top of the module.
- Capture unexpected behaviors in `docs/agents/known-limitations.md` to guide retraining work.
