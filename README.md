# China Basin Community Archive

This is a modern, content-heavy archival website built with Astro and Tailwind CSS. It is designed to be hosted on GitHub Pages and managed via Markdown files.

## Project Structure

- `src/content/`: This is your CMS. Organised by category (governing, policies, contracts, etc.).
- `public/documents/`: Store your original PDFs here.
- `src/data/financialOverview.ts`: Reported financial figures and derived metrics used by the financial review page.
- `src/data/ledger.json`: Legacy sample data; it is not used by the current financial review.
- `docs/financial-review-runbook.md`: Source-review, privacy, reconciliation, projection, and handoff procedure for future financial updates.

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

### 2. Updating the Financial Review
Follow `docs/financial-review-runbook.md` for the full procedure and current verified baseline.

1. Obtain the latest board-approved balance sheet, income statement, budget-to-actual report, bank reconciliations, receivable aging, and reserve study or annual reserve disclosure.
2. Re-foot totals against the source statements before changing the site. Do not rely on an AI extraction without checking every displayed figure.
3. Update only the reported inputs in `src/data/financialOverview.ts`. Derived run rates and ratios are calculated from those inputs.
4. Update `reviewedOn` and `asOf` separately so the page clearly shows any reporting lag.
5. Keep association financial records in the official member portal; do not add private statements to this public repository.
6. Run `npm run build` and review the generated financial page at desktop and mobile widths.

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
