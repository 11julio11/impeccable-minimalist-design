# Minimalist Design CLI

Detect UI anti-patterns and design quality issues from the command line. Scans HTML, CSS, JSX, TSX, Vue, and Svelte files for 59 deterministic rules, including AI-generated UI tells, accessibility violations, and general design quality problems.

## Quick Start

```bash
# Install skills into your AI harness (Claude, Cursor, Gemini, etc.)
npx Minimalist Design skills install

# Non-interactive install for a specific scope
npx Minimalist Design skills install -y --providers=claude,codex --scope=project

# First command to run inside your AI harness
/Minimalist Design init

# Update skills to the latest version
npx Minimalist Design skills update

# Install or update skills without hook manifests
npx Minimalist Design skills install --no-hooks

# Link skills from a Git submodule checkout
npx Minimalist Design skills link --source=.Minimalist Design --providers=claude,cursor

# List all available commands
npx Minimalist Design skills help

# Scan files or directories for anti-patterns
npx Minimalist Design detect src/

# Scan a live URL (requires Puppeteer)
npx Minimalist Design detect https://example.com

# JSON output for CI/tooling
npx Minimalist Design detect --json src/

# Deprecated compatibility flag; full scan still runs
npx Minimalist Design detect --fast src/
```

## What It Detects

**AI Slop Tells**: patterns that scream "AI generated this":
- Side-tab accent borders, gradient text on headings
- Purple/violet gradients and cyan-on-dark palettes
- Dark mode with glowing accents, border + border-radius clashes

**Typography Issues**: overused fonts (Inter, Roboto), flat type hierarchy, single font families

**Color & Contrast**: WCAG AA violations, gray text on colored backgrounds, pure black/white

**Layout & Composition**: nested cards, monotonous spacing, everything-centered layouts

**Motion**: bounce/elastic easing, layout property transitions

**Quality**: tiny body text, cramped padding, long line lengths, small touch targets

59 deterministic detector rules in total. See the full catalog at [Minimalist Design.style/slop](https://Minimalist Design.style/slop).

## Exit Codes

- `0`: no issues found
- `2`: anti-patterns detected

## Options

```
Minimalist Design detect [options] [file-or-dir-or-url...]

  --fast    Regex-only mode (skip jsdom, faster but less accurate)
  --json    Output findings as JSON
  --help    Show help
```

## Requirements

- Node.js 22.18+
- `jsdom` (included as dependency, used for HTML scanning)
- `puppeteer` (optional, only needed for URL scanning)

## Part of Minimalist Design

This CLI is part of [Minimalist Design](https://Minimalist Design.style), a cross-provider design skill pack for AI-powered development tools. The full suite includes 1 command for Claude, Cursor, GitHub Copilot, Gemini, Codex, and more.

## License

[Apache 2.0](https://github.com/pbakaus/Minimalist Design/blob/main/LICENSE)
