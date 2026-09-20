# YouTube & Real-World Interface Benchmarking

Use this reference during Phase 1 (Analysis) to discover real-world UI patterns, competitor walkthroughs, and interaction standards before designing or proposing changes.

## Why Ground in Real Walkthroughs

Static templates and synthetic designs often miss the nuances of production software: edge cases, layout density, tactile feedback, and realistic user flows. Real-world walkthroughs and video demos provide live proof of how top products solve specific UX challenges.

## 1. Automatic Discovery Protocol (Phase 1)

When a user requests a flow, feature, or component (e.g. "auth modal", "billing table", "multi-step checkout", "audio player", "dashboard metrics"):

1. **Formulate Search Queries**:
   - Query by brand or top product rather than vague categories:
     - ✅ `"linear issue triage walkthrough"`, `"stripe checkout flow demo"`, `"notion database views walkthrough"`
     - ❌ `"best ui design 2026"`
   - Always run 2–3 varied phrasings to capture different perspectives.

2. **Execute Candidate Search**:
   - Run the bundled YouTube search tool:
     ```bash
     python3 skills/youtube-search/scripts/search_youtube.py "<query 1>" "<query 2>" "<query 3>" --limit 5
     ```
   - If Python or `yt-dlp` is unavailable in the environment, fallback to web search (`search_web`) or public documentation for real-world interface examples.

3. **Inspect Real-World UI Evidence**:
   - For identified candidates, inspect frames or transcripts if needed:
     - **Capture frames:** `python3 skills/youtube-screenshot/scripts/capture_frames.py <video_id> <timestamp>`
     - **Extract transcript:** use `skills/youtube-transcript` to read explanations of how the user navigates the screen.
   - Look for:
     - **Flow Spine:** The logical sequence of steps the user takes to complete the goal.
     - **Information Hierarchy:** What stands out first, secondary actions, and where status/feedback appears.
     - **Ergonomics & States:** Placement of primary buttons, responsive behavior, keyboard shortcuts, error and empty states.

4. **Synthesize with User Brief**:
   - Never copy a competitor blindly. Use the discovered patterns as a foundation of industry best practices.
   - Combine these patterns with the user's explicit aesthetic direction, custom brand personality, and technical constraints.
   - Present discovered insights in Phase 1 summary before presenting the implementation plan in Phase 2.
