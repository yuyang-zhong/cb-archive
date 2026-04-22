# China Basin Community Archive

This is a modern, content-heavy archival website built with Astro and Tailwind CSS. It is designed to be hosted on GitHub Pages and managed via Markdown files.

## Project Structure

- `src/content/`: This is your CMS. Organised by category (governing, financials, etc.).
- `public/documents/`: Store your original PDFs here.
- `src/data/ledger.json`: The data source for the searchable financial table.

## Workflow: Updating Content with NotebookLM

This website is designed to work seamlessly with the output from NotebookLM.

### 1. Adding a New Document (e.g., Bylaws)
1. Upload your PDF to NotebookLM.
2. Ask for a summary and "Key Takeaways" for homeowners.
3. Create a new file: `src/content/governing/bylaws.md`.
4. Copy the synthesized content into the file using this format:

```markdown
---
title: "Bylaws of the Association"
description: "Brief summary from NotebookLM..."
lastUpdated: "April 2026"
pdfLink: "/documents/governing/bylaws.pdf"
keyTakeaways:
  - "Takeaway 1"
  - "Takeaway 2"
---
## Full Summary
(Paste NotebookLM synthesis here)
```

### 2. Updating the Financial Ledger
1. Upload your financial statement PDF to NotebookLM.
2. Prompt: *"Extract all ledger line items into a JSON array with keys: date (YYYY-MM-DD), category, description, amount (number)."*
3. Copy the resulting JSON and append/replace it in `src/data/ledger.json`.

## Deployment to GitHub Pages

1. Ensure your `astro.config.mjs` has the correct `site` URL and `base` path.
2. Use the **Astro GitHub Action** to automate deployment:
   - Go to GitHub Repository Settings > Pages.
   - Set "Build and deployment" source to "GitHub Actions".
   - Create `.github/workflows/deploy.yml` (I have initialized the structure for you).

## Technical Details
- **Framework:** Astro (Static Site Generator)
- **Styling:** Tailwind CSS (Community Hub theme)
- **Interactivity:** Vanilla JS (Searchable Ledger)
