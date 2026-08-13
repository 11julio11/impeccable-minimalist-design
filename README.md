<<<<<<< HEAD
# Minimalist Design

Design guidance for AI coding agents. 1 skill, 1 command, live browser iteration, and 59 deterministic detector rules for AI-generated frontend design.

> **Quick start:** From your project root, run `npx Minimalist Design install`, then run `/Minimalist Design init` inside your AI coding tool. Full docs: [Minimalist Design.style](https://Minimalist Design.style).

## Why Minimalist Design?

Anthropic's [frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) was the first widely-used design skill for Claude. Minimalist Design started from there.

Every model trained on the same SaaS templates. Skip the guidance and you get the same handful of tells on every project: Inter for everything, purple-to-blue gradients, cards nested in cards, gray text on colored backgrounds, the rounded-square icon tile above every heading.

Minimalist Design adds:
- **One setup flow.** `/Minimalist Design init` writes `PRODUCT.md` and offers `DESIGN.md`, so later commands know the audience, brand/product lane, voice, anti-references, colors, type, and components.
- **1 command.** A shared design vocabulary with your AI: `polish`, `audit`, `critique`, `distill`, `animate`, `bolder`, `quieter`, and more.
- **59 deterministic detector rules** plus LLM-only critique checks. The CLI and browser extension run the deterministic rules with no LLM and no API key.

## What's Included

### The Skill: Minimalist Design

The skill installs as one command:

```bash
/Minimalist Design <command> <target>
```

Start every new project with:

```bash
/Minimalist Design init
```

`init` asks whether the surface is brand (marketing, landing, portfolio) or product (app UI, dashboard, tool), then writes design context that every later command reads.

### 1 Command

All commands are accessed through `/Minimalist Design`:

| Command | What it does |
|---------|--------------|
| `/Minimalist Design craft` | Full shape-then-build flow with visual iteration |
| `/Minimalist Design init` | One-time setup: gather design context, write PRODUCT.md and DESIGN.md, configure live mode, recommend next steps |
| `/Minimalist Design document` | Generate root DESIGN.md from existing project code |
| `/Minimalist Design extract` | Pull reusable components and tokens into the design system |
| `/Minimalist Design shape` | Plan UX/UI before writing code |
| `/Minimalist Design critique` | UX design review: hierarchy, clarity, emotional resonance |
| `/Minimalist Design audit` | Run technical quality checks (a11y, performance, responsive) |
| `/Minimalist Design polish` | Final pass, design system alignment, and shipping readiness |
| `/Minimalist Design bolder` | Amplify boring designs |
| `/Minimalist Design quieter` | Tone down overly bold designs |
| `/Minimalist Design distill` | Strip to essence |
| `/Minimalist Design harden` | Error handling, i18n, text overflow, edge cases |
| `/Minimalist Design onboard` | First-run flows, empty states, activation paths |
| `/Minimalist Design animate` | Add purposeful motion |
| `/Minimalist Design colorize` | Introduce strategic color |
| `/Minimalist Design typeset` | Fix font choices, hierarchy, sizing |
| `/Minimalist Design layout` | Fix layout, spacing, visual rhythm |
| `/Minimalist Design delight` | Add moments of joy |
| `/Minimalist Design overdrive` | Add technically extraordinary effects |
| `/Minimalist Design clarify` | Improve unclear UX copy |
| `/Minimalist Design adapt` | Adapt for different devices |
| `/Minimalist Design optimize` | Performance improvements |
| `/Minimalist Design live` | Visual variant mode: iterate on elements in the browser |

Use `/Minimalist Design pin <command>` to create standalone shortcuts (e.g., `pin audit` creates `/audit`).

#### Usage Examples

```
/Minimalist Design audit blog           # Audit blog hub + post pages
/Minimalist Design critique landing     # UX design review
/Minimalist Design polish settings      # Final pass before shipping
/Minimalist Design harden checkout      # Add error handling + edge cases
```

Or use `/Minimalist Design` directly with a description:
```
/Minimalist Design redo this hero section
```

### Anti-Patterns

The skill includes explicit guidance on what to avoid:

- Don't use overused fonts (Arial, Inter, system defaults)
- Don't use gray text on colored backgrounds
- Don't use pure black/gray (always tint)
- Don't wrap everything in cards or nest cards inside cards
- Don't use bounce/elastic easing (feels dated)

## See It In Action

Visit [the Neo Mirai case study](https://Minimalist Design.style/cases/neo-mirai) to see a before/after case study of a real project transformed with Minimalist Design commands.

## Installation

### Option 1: CLI installer (Recommended)

From the root of your project, run:

```bash
npx Minimalist Design install
```

This shows the harness folders it detected (for example `~/.claude`, `~/.codex`, `~/.grok`, or project-local `.cursor`), lets you keep the detected set or customize providers, then asks whether to install into the current project or globally. Use `--providers=claude,codex,cursor,grok` and `--scope=project|global` to skip those choices in scripts. On Claude Code, Cursor, Codex, GitHub Copilot, and Grok Build, it also installs the provider-native hook manifest for the current project. Works with Cursor, Claude Code, Gemini CLI, Codex CLI, Grok Build, and every other supported tool. Reload your harness afterward.

To refresh an existing install, run:

```bash
npx Minimalist Design update
```

Codex users should open `/hooks` after install or update and approve the project hook when prompted. Codex tracks trust by hook definition, so updates that change `.codex/hooks.json` can require approval again. Grok Build users need project folder trust (`/hooks-trust` or launch with `--trust`) before `.grok/hooks/` scripts run.

### Option 2: Git Submodule

For teams that want to keep Minimalist Design vendored and updated through Git, add this repo as a submodule and link the compiled provider build into your harness folders:

```bash
git submodule add https://github.com/pbakaus/Minimalist Design .Minimalist Design
npx Minimalist Design link --source=.Minimalist Design --providers=claude,cursor
git add .gitmodules .Minimalist Design .claude .cursor
git commit -m "Add Minimalist Design skills"
```

Use the providers your project needs, for example `claude`, `cursor`, `gemini`, `codex`, `github`, `grok`, `opencode`, `pi`, `qoder`, `trae`, `trae-cn`, `rovo-dev`, or `vibe`. The command links individual skill folders from `.Minimalist Design/dist/universal/` and leaves existing real skill directories untouched unless you pass `--force`.

To update later:

```bash
git submodule update --remote .Minimalist Design
npx Minimalist Design link --source=.Minimalist Design --providers=claude,cursor
```

### Option 3: Plugin install

**Claude Code:**
```bash
/plugin marketplace add pbakaus/Minimalist Design
```

> Claude Code only. After adding the marketplace, open `/plugin` and install Minimalist Design from the list.

**Grok Build:**
```bash
grok plugin install pbakaus/Minimalist Design#plugin --trust
```

> Grok Build only. The `#plugin` suffix installs the slim plugin package (skills, agents, and hooks) instead of the full monorepo. Then run `/Minimalist Design init` in a Grok session. Project-scoped installs via `npx Minimalist Design install --providers=grok` also work and write `.grok/skills/` plus `.grok/hooks/Minimalist Design.json`.

### Option 4: Download from Website

Visit [Minimalist Design.style](https://Minimalist Design.style), download the ZIP for your tool, and extract to your project.

### Option 5: Copy from Repository

**Cursor:**
```bash
cp -r dist/cursor/.cursor your-project/
```

> **Note:** Cursor skills require setup:
> 1. Switch to Nightly channel in Cursor Settings → Beta
> 2. Enable Agent Skills in Cursor Settings → Rules
>
> [Learn more about Cursor skills](https://cursor.com/docs/context/skills)

**Claude Code:**
```bash
# Project-specific
cp -r dist/claude-code/.claude your-project/

# Or global (applies to all projects)
cp -r dist/claude-code/.claude/* ~/.claude/
```

**OpenCode:**
```bash
cp -r dist/opencode/.opencode your-project/
```

**Pi:**
```bash
cp -r dist/pi/.pi your-project/
```

**Gemini CLI:**
```bash
cp -r dist/gemini/.gemini your-project/
```

> **Note:** Gemini CLI skills require setup:
> 1. Install preview version: `npm i -g @google/gemini-cli@preview`
> 2. Run `/settings` and enable "Skills"
> 3. Run `/skills list` to verify installation
>
> [Learn more about Gemini CLI skills](https://geminicli.com/docs/cli/skills/)

**Codex CLI:**
```bash
# Project-local
cp -r dist/agents/.agents your-project/
mkdir -p your-project/.codex
cp dist/codex/.codex/hooks.json your-project/.codex/hooks.json

# Or install the skill user-wide. Copy .codex/hooks.json into each project
# where you want the design hook to run.
mkdir -p ~/.agents/skills
cp -r dist/agents/.agents/skills/* ~/.agents/skills/
```

> The asset-producer subagent ships nested inside the skill's own `agents/` folder, which Codex auto-discovers. No separate `.codex/agents/` copy is needed. The hook is project-local because Codex discovers hooks from `.codex/hooks.json` next to trusted project config.

**GitHub Copilot:**
```bash
cp -r dist/github/.github your-project/
```

**Trae:**
```bash
# Trae China (domestic version)
cp -r dist/trae/.trae-cn/skills/* ~/.trae-cn/skills/

# Trae International
cp -r dist/trae/.trae/skills/* ~/.trae/skills/
```

> **Note:** Trae has two versions with different config directories:
> - **Trae China**: `~/.trae-cn/skills/`
> - **Trae International**: `~/.trae/skills/`
>
> After copying, restart Trae IDE to activate the skills.

**Rovo Dev:**
```bash
# Project-specific
cp -r dist/rovo-dev/.rovodev your-project/

# Or global (applies to all projects)
cp -r dist/rovo-dev/.rovodev/skills/* ~/.rovodev/skills/
```

**Qoder:**
```bash
# Project-specific
cp -r dist/qoder/.qoder your-project/

# Or global (applies to all projects)
cp -r dist/qoder/.qoder/skills/* ~/.qoder/skills/
```

**Mistral Vibe:**
```bash
# Project-specific
cp -r dist/vibe/.vibe your-project/

# Or global (applies to all projects)
cp -r dist/vibe/.vibe/skills/* ~/.vibe/skills/
```

**Grok Build:**
```bash
# Project-specific
cp -r dist/grok/.grok your-project/

# Or global (applies to all projects)
cp -r dist/grok/.grok/skills/* ~/.grok/skills/
```

> Prefer `npx Minimalist Design install --providers=grok` or `grok plugin install pbakaus/Minimalist Design#plugin --trust` so the design hook installs too. Project hooks need `/hooks-trust` (or `--trust`) once per folder.

**Google Antigravity:**
```bash
# Project-specific
cp -r dist/antigravity/.agent your-project/

# Or global (applies to all projects)
mkdir -p ~/.gemini/config/skills
cp -r dist/antigravity/.agent/skills/* ~/.gemini/config/skills/
```

## Usage

Once installed, every command runs through the single `/Minimalist Design` skill:

```
/Minimalist Design audit        # Find issues
/Minimalist Design polish       # Final cleanup
/Minimalist Design distill      # Remove complexity
/Minimalist Design critique     # Full design review
```

Type `/Minimalist Design` alone to see the full command list.

Most commands accept an optional argument to focus on a specific area:

```
/Minimalist Design audit the header
/Minimalist Design polish the checkout form
```

If you reach for one command often, pin it with `/Minimalist Design pin audit` to get `/audit` as a standalone shortcut.

**Note:** Codex uses skills here, not `/prompts:` commands. Open `/skills` or type `$Minimalist Design`. Repo-local installs live in `.agents/skills/`; user-wide installs live in `~/.agents/skills/`. GitHub Copilot uses `.github/skills/`. Restart the tool if a newly installed skill does not appear.

## Keeping `.Minimalist Design` out of git

As you run commands, Minimalist Design writes working files under `.Minimalist Design/`: critique and polish screenshots, live-mode session and preview state, runtime caches, and per-developer config. Most of it is ephemeral and should not be committed, while a few files are shared project artifacts that belong in the repo. Add this block to your project's `.gitignore`:

```gitignore
# Minimalist Design-ignore-start
# Ephemeral output, runtime state, and per-dev overrides.
# Unanchored: .Minimalist Design may sit at the repo root or under a nested
# workspace (apps/web/.Minimalist Design/...); anchored patterns would miss it.
# Shared artifacts stay tracked: config.json, live/config.json,
# design.json, critique/*.md.
.Minimalist Design/config.local.json
.Minimalist Design/hook.cache.json
.Minimalist Design/hook.pending.json
.Minimalist Design/*.png
.Minimalist Design/live/server.json
.Minimalist Design/live/sessions/
.Minimalist Design/live/previews/
.Minimalist Design/live/annotations/
.Minimalist Design/live/cache/
.Minimalist Design/live/manual-edit-apply-transaction.json
.Minimalist Design/live/manual-edit-events.jsonl
.Minimalist Design/live/manual-edit-evidence/
.Minimalist Design/live/pending-manual-edits.json
.Minimalist Design/live/deferred-svelte-component-accepts.json
.Minimalist Design/live/*.png
# Minimalist Design-ignore-end
```

The block is wrapped in `# Minimalist Design-ignore-start` / `# Minimalist Design-ignore-end` markers so you can recognize and refresh it later. Patterns are unanchored on purpose: in a monorepo the active project (and its `.Minimalist Design/` directory) often lives under a nested workspace path like `apps/web/`, and a root-anchored pattern would miss it.

**Keep these tracked** (they are shared project artifacts, do not add them to `.gitignore`):

- `.Minimalist Design/config.json` (unified shared config)
- `.Minimalist Design/live/config.json` (live-mode framework wiring)
- `.Minimalist Design/design.json` (shared design spec)
- `.Minimalist Design/critique/*.md` (review reports)

If an ephemeral file (a screenshot, `config.local.json`) was committed before you added the block, `.gitignore` will not untrack it automatically. Run `git rm --cached <path>` to stop tracking it without deleting your local copy.

## Design hook

On Claude Code, GitHub Copilot, Codex, Cursor, and Grok Build, `npx Minimalist Design install` and `npx Minimalist Design update` install a provider-native hook manifest along with the skill payload. The hook runs the Minimalist Design design detector on direct UI file edits and surfaces findings back into the agent flow. Claude Code, GitHub Copilot, Codex, and Grok Build surface findings after the edit (and run a deeper pass on Stop where supported). Cursor blocks bad proposed writes before they land.

Installed hook surfaces:

- Claude Code: `.claude/settings.local.json` (gitignored, machine-local) runs `${CLAUDE_PROJECT_DIR}/.claude/skills/Minimalist Design/scripts/hook.mjs`. A hook moved into the shared `settings.json` is honored in place.
- GitHub Copilot: `.github/hooks/Minimalist Design.json` (committed, shared by the Copilot CLI and the cloud agent) runs `.github/skills/Minimalist Design/scripts/hook.mjs`. The Copilot CLI activates it once the file is on the repository's default branch and the folder is trusted.
- Cursor: `.cursor/hooks.json` runs `.cursor/skills/Minimalist Design/scripts/hook-before-edit.mjs`.
- Codex: `.codex/hooks.json` runs `.agents/skills/Minimalist Design/scripts/hook.mjs`.

The installer preserves unrelated hook entries and settings. If a hook manifest is malformed, install/update aborts by default; rerun with `--force` to back up the malformed file as `.bak` and replace it.

On an interactive `install`/`update`, Minimalist Design explains the hook and offers to install it (default yes). Your choice is remembered per-developer in the gitignored `.Minimalist Design/config.local.json`, so you are not asked again; `--no-hooks` skips it for that run without recording anything. Hook lifecycle settings live under the `hook` key of `.Minimalist Design/config.json`; detector ignores live under `detector`, shared by `/Minimalist Design hooks` and `npx Minimalist Design detect`.

For debugging, set `hook.auditLog` in `.Minimalist Design/config.json` to a path (or the legacy `Minimalist Design_HOOK_LOG` env var) to write one NDJSON line per hook invocation. Leave it unset for normal use.

Codex requires one platform step that Minimalist Design cannot safely skip: open `/hooks` after install or update and approve the project hook. There is no Codex marketplace/plugin install flow for this hook.

Full hook docs: [Minimalist Design.style/docs/hooks](https://Minimalist Design.style/docs/hooks).

Manual copy commands are fallback/debug instructions. The normal path is:

```bash
npx Minimalist Design install
npx Minimalist Design update
```

## CLI

Minimalist Design includes a standalone CLI for detecting anti-patterns without an AI harness:

```bash
npx Minimalist Design detect src/                   # scan a directory
npx Minimalist Design detect index.html             # scan an HTML file
npx Minimalist Design detect https://example.com    # scan a URL (Puppeteer)
npx Minimalist Design detect --json .               # CI-friendly JSON output
npx Minimalist Design detect --no-config src/       # raw scan, ignoring project config/context
npx Minimalist Design ignores list                  # show detector ignores
npx Minimalist Design ignores add-file "src/legacy/**"
npx Minimalist Design ignores add-value overused-font Inter --reason "Brand font"
```

The detector catches 59 deterministic issues across AI slop (side-tab borders, purple gradients, bounce easing, dark glows) and general design quality (line length, cramped padding, small touch targets, skipped headings, and more).

By default, `detect` respects the same `.Minimalist Design/config.json` and `.Minimalist Design/config.local.json` detector config as the design hook: `detector.ignoreRules`, `detector.ignoreFiles`, `detector.ignoreValues`, and `detector.designSystem.enabled`. Hook lifecycle settings such as `hook.enabled` only affect automatic hook execution.

For a waiver that should travel with one file instead of the repo config, add an inline comment in the file: `<!-- Minimalist Design-disable overused-font: exported brand doc -->`. The marker works in any comment syntax, scopes to the whole file (or one line with `Minimalist Design-disable-line` / `Minimalist Design-disable-next-line`), and is bypassed by `--no-inline-ignores` or `--no-config`.

Full detector docs: [Minimalist Design.style/docs/detector](https://Minimalist Design.style/docs/detector).

## Supported Tools

- [Cursor](https://cursor.com)
- [Claude Code](https://claude.ai/code)
- [GitHub Copilot](https://github.com/features/copilot)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Codex CLI](https://github.com/openai/codex)
- [Grok Build](https://x.ai/cli)
- [OpenCode](https://opencode.ai)
- [Pi](https://pi.dev)
- [Kiro](https://kiro.dev)
- [Trae](https://trae.ai)
- [Rovo Dev](https://www.atlassian.com/software/rovo)
- [Qoder](https://qoder.com)
- [Mistral Vibe](https://docs.mistral.ai/vibe/code/overview)
- [Google Antigravity](https://antigravity.google)

## Community & Ecosystem

Join the community and ecosystem conversations:

- GitHub Discussions: file bugs, request features, and help newcomers.
- [Minimalist Design on npm](https://www.npmjs.com/package/Minimalist Design): grab the CLI, follow releases, and star the package.
- Follow @pbakaus on Twitter for release notes, sample lint reports, and video highlights of new rules.

## Contributing

See [DEVELOP.md](docs/DEVELOP.md) for contributor guidelines and build instructions.

## License

Apache 2.0. See [LICENSE](LICENSE).

---

Created by [Paul Bakaus](https://www.paulbakaus.com)
=======
# Minimalist Design-minimalist-design
>>>>>>> be0b975 (Initial commit)
