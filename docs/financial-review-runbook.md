# Financial Review Runbook

Use this runbook when new China Basin HOA financial statements, budgets, reserve studies, or closing data are added. Its purpose is to make each update reproducible, source-based, and safe for a public repository.

## Canonical locations

- Private source PDFs: `private-source-documents/financials/`
- Reported inputs and calculated metrics: `src/data/financialOverview.ts`
- Public financial analysis: `src/pages/financials/index.astro`
- Unit-closing data: `src/data/closings.json`
- Closing chart and development history: `src/pages/history/index.astro`
- Repository privacy rules: `.gitignore`

The source PDFs are review evidence, not website assets. Never copy them into `public/`, `src/`, `exports/`, or another published or tracked location.

## Privacy checks

Before and after every review, confirm that private records are ignored and untracked:

```sh
git check-ignore -v private-source-documents/financials/*
git ls-files private-source-documents
git status --short --ignored
```

Expected result:

- Every private file is ignored by the `private-source-documents/` rule.
- `git ls-files private-source-documents` returns nothing.
- Private files appear only with the ignored `!!` status.

Temporary PDF text extracts and page renders belong under `tmp/pdfs/`, which is also ignored. Remove those derivatives after the review. Do not publish bank account details, owner ledgers, account numbers, checks, payment identifiers, or personally identifiable information.

## Source hierarchy and cutoff rules

Use sources in this order:

1. Board-approved monthly financial statements and their ledgers/reconciliations
2. Board-adopted annual budget and meeting record
3. Current property-specific professional reserve study and annual update, once one exists
4. Annual budget report and statutory reserve disclosures
5. DRE or developer preconstruction estimates—the controlling reserve baseline during startup, before the first property-specific study
6. Explicitly labeled analyst assumptions

Keep these dates separate:

- `asOf`: the end date of the latest financial statement included in the analysis; separately disclose whether approval was verified
- `reviewedOn`: the date the analysis was performed

Do not treat a newer file as approved merely because it exists. Confirm its status from the user, board record, or approved minutes. Always disclose a reporting lag.

The verified 2025 baseline is a special partial-year case: the Association became operational around May, and the budget and statements use seven operating months from June through December. That seven-month model is appropriate for 2025. Do not annualize it or criticize it for not covering 12 months. Beginning in 2026, use a full 12-month budget and reporting model.

For a new development that has not yet completed its first property-specific reserve study, use the DRE worksheet as the canonical reserve-estimate source even though it ranks below an adopted professional study in the mature-state hierarchy above. Once the board adopts the first property-specific study, that study supersedes the generalized DRE estimates for future reserve projections and funding-plan comparisons.

## Review workflow

### 1. Inventory the new records

Record each file's reporting period, preparation date, page count, and document type. Identify whether the package contains:

- Balance sheet
- Income statement with current-period, year-to-date, and annual-budget columns
- Monthly income statement summary
- General ledger
- Operating and reserve bank reconciliations
- Due-to/due-from reserve schedule
- Accounts-receivable and delinquency aging
- Prepaid-expense schedules
- Check register and outstanding-check list
- Reserve activity and reserve expenditures

Extract searchable text, but visually inspect the controlling statement pages. Extraction is an aid; the rendered PDF controls when columns or signs are ambiguous.

### 2. Reconcile the balance sheet

At minimum, verify:

```text
Total assets = total liabilities + reserve equity + operating equity

Reserve bank cash + due from operating = total reserve fund

Operating bank ledger - due to reserves = unrestricted operating cash
```

Do not confuse:

- A bank balance with a fund balance
- An interfund receivable with reserve cash
- Total assets with spendable operating assets
- Prepaid expenses with liquidity
- Restricted reserve equity with operating surplus

Review unusual debit balances in liability accounts, credit balances in asset accounts, suspense accounts, stale outstanding checks, and material month-to-month changes.

### 3. Reconcile operating performance

Verify:

```text
Operating revenue - operating expense = net income or loss

Actual revenue - budget revenue = revenue variance

Budget expense - actual expense = favorable expense variance
```

Check both current-month and year-to-date results. A favorable expense variance is not automatically recurring savings; it may reflect invoice timing, missing accruals, deferred work, contract commencement dates, or an outdated budget.

Also bridge operating equity:

```text
Opening operating equity
+ current-period income
+/- direct equity and prior-period adjustments
= ending operating equity
```

Direct equity adjustments must be described separately from current-period earnings.

### 4. Review property operations

Scan the ledger for:

- Elevators
- Plumbing and sewer
- Access control, security, and fire systems
- Janitorial extras and supplies
- Utilities and submeter reimbursements
- Management extras
- Legal and collection costs
- Developer or warranty recoveries
- Repairs that may belong to reserves rather than operations

For material exceptions, state the amount, period, source description, likely operational question, and recommended management response. Do not infer warranty responsibility without contract or invoice support.

### 5. Review reserves

Apply the reserve-source lifecycle before assessing adequacy:

1. **New-development startup:** Use the approved DRE or developer worksheet as the reserve contribution and projection index. It is based on generalized assumptions and plans, not observed component conditions.
2. **After the first operating year:** Commission the first property-specific visual reserve study. [California DRE form RE 623](https://www.dre.ca.gov/files/pdf/forms/re623.pdf) says a new association should perform this study after its first operating year to adjust the reserve funding plan. An independent reserve professional is the prudent board-engagement standard.
3. **Ongoing program:** Apply [Civil Code § 5550](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=5550.)'s visual-inspection cycle at least every three years, when its statutory conditions apply, and review the reserve study and funding plan annually. Use the adopted property-specific study—not the original DRE worksheet—as the index for later reserve estimates.

A current reserve study should normally provide enough information to identify:

- Inspection and study dates
- Component inventory
- Current replacement costs
- Useful and remaining lives
- Starting reserve cash
- Fully funded balance
- Percent funded
- Annual contribution recommendation
- Inflation and interest assumptions
- Thirty-year cash-flow projection and minimum balance
- Expected special assessments, borrowing, or contribution increases

A DRE preconstruction worksheet is an appropriate interim startup basis, but it is not a long-term substitute for the first property-specific study. Before that study exists, assess whether actual contributions follow the DRE schedule and state that physical-condition adequacy, percent funded, and long-range cash flow are not yet independently measurable. After the first study is adopted, index reserve analysis against it.

If a budget packet references a study or update that is not attached, first determine whether the work existed. Report it as a missing record only if it was performed but not supplied. If the Association confirms that it never occurred, flag the packet statement as inaccurate or boilerplate rather than implying a document is being withheld.

### 6. Build projections conservatively

Use a range, not a single forecast. The financial page currently uses four comparison cases:

1. Latest year-to-date pace repeats
2. Actual year-to-date results plus budget for the remaining months
3. A modest remaining-year revenue stress
4. The most recent month's pace continues, with identified nonrecurring credits excluded from future months

Every model must state its assumptions and be labeled as a scenario, not a prediction. Consider reporting lag, seasonality, late invoices, occupancy changes, utilities, contract starts, reserve spending, delinquencies, insurance renewal, and warranty recoveries.

When additional packages arrive and their status is established, replace period-specific inputs and scenario formulas with year-to-date values. Do not retain stale quarter labels.

## Verified baseline for the next update

The following figures were verified to the supplied August 31, 2026 package during the September 14, 2026 review. July and August are both included. Neither package supplied evidence of board approval, so approval status was not independently attested. The statement cutoff is 14 days before the review; no completed month is missing, and September is in progress.

New records reviewed:

| Private source file | Reporting period | Statement preparation date | Pages | Contents |
| --- | --- | --- | ---: | --- |
| `07-2026 FS 5148 - China Basin.pdf` | July 1–31, 2026 | August 25, 2026 | 48 | Comparative balance sheet, income statement and monthly summary, reserve due-to schedule, both bank reconciliations/statements, disbursements, aging, ledger, prepaid schedules, deposits, developer billing |
| `08-026 FS 5148-China Basin.PDF` | August 1–31, 2026 | September 8, 2026 | 43 | Same package types; the filename omits a digit in the year, but the statement headers establish August 2026 |

Use the preparation dates printed on the statements, not PDF creation metadata. The July developer invoice predates the July 28 payment; the ledger and August invoice establish settlement. Do not carry forward that invoice's earlier amount due as a July month-end receivable.

| Measure | Verified amount |
| --- | ---: |
| Total assets | $517,482.30 |
| Operating bank ledger | $216,976.19 |
| Due from operating to reserves | $64,097.92 |
| Unrestricted operating cash | $152,878.27 |
| Reserve bank cash | $256,676.15 |
| Total reserve fund | $320,774.07 |
| Net accounts receivable | $4,364.30 |
| Owner receivables / doubtful-account allowance | $2,651.06 / $(442.48) |
| Developer receivables / other receivables | $0.00 / $2,155.72 |
| Owner aging over 30 days, including over 90 days | $943.45, including $442.48 |
| Prepaid expenses | $39,465.66 |
| Prepaid assessments / refundable deposits | $19,132.55 / $7,200.00 |
| Net liabilities, including the suspense debit | $21,034.29 |
| Operating equity | $175,673.94 |
| January–August operating revenue | $659,048.87 |
| January–August operating expense | $600,797.36 |
| January–August net income | $58,251.51 |
| January–August budget revenue and expense | $704,281.28 each |
| YTD revenue variance / favorable expense variance | $(45,232.41) / $103,483.92 |
| July revenue / expense / net income | $84,854.22 / $80,660.46 / $4,193.76 |
| August revenue / expense / net income | $83,721.29 / $75,121.48 / $8,599.81 |
| Current-year equity adjustment | $(17,221.09) |
| Unclassified suspense debit | $5,298.26 |
| August maintenance credit, receipt uncleared | $3,786.00 |
| Monthly reserve allocation | $21,365.92 |
| YTD reserve funding including interest | $171,212.47 |
| Insurance package | $144,252.94 |
| Property-insurance check still uncleared at August 31 | $143,885.94 |

Other baseline facts:

- The Association became operational around May 2025. Its budget and statements appropriately model seven operating months from June through December and report $134,643.52 of net income before later equity adjustments.
- July and August added $12,793.57 of income to June's $45,457.94 YTD baseline. July ended with $49,651.70 YTD income, $127,693.36 unrestricted operating cash, $213,852.92 reserve-bank cash, and a $299,316.76 reserve fund.
- August unrestricted operating cash increased $57,233.50 from June's $95,644.77. It represents about 2.8 months of YTD expenses excluding reserve funding. It still includes the $3,786.00 uncleared maintenance receipt; prepaid assessments and refundable deposits are obligations, not earned surplus.
- The reserve total consists of 80.0% reserve-bank cash and 20.0% due from operating. Four repayments in February, April, June, and August total $85,463.68. August's repayment reduced the $85,463.84 June/July interfund balance by $21,365.92 to $64,097.92.
- August reserve cash rose $42,823.23: $21,365.92 of regular funding, $21,365.92 of repayment, and $91.39 interest. Both transfers cleared. No July or August reserve expenditures were reported.
- The latest supplied closing log remains August 6: 145 of 148 units closed and three remaining. No new closing data was supplied with this review. Do not label this as the August 31 closing count.
- Assessments are charged on the first of each month, so each developer bill covers units unsold as of the prior month-end escrow cutoff. July's bill used June 30 and listed nine units; August's used July 31 and listed six units with $2,722.80 billed and paid. The difference from recorder-based closings is escrow-notification and recording timing, settled through closing prorations. Do not re-flag this pattern unless a billed unit remains on developer invoices well after its recorded closing.
- Owner aging at August 31 totals $1,707.61 current, $0 over 30, $500.97 over 60, and $442.48 over 90. The cumulative amount older than 30 days is therefore $943.45. July introduced a $526.37 allowance; August reduced it to $442.48. Developer receivables and payments in transit are zero at both month-ends, although July's earlier invoice still showed a balance before payment.
- The 2026 statements use a 12-month, break-even annual budget of $1,056,422.
- The $103,483.92 favorable YTD expense variance is not automatically recurring savings. Landscape actuals are $13,777.63 against $2,178.64 budget; janitorial-contract, window-washing, and combined new-construction lines have no actuals against $46,531.36, $20,009.36, and $62,020.00 budgets. Reconcile the pro forma, CINC mapping, invoice coding, and accrual completeness.
- August utilities of $27,115.27 exceeded the $26,017.67 monthly budget. Refuse was $8,690.23 against $4,281.67 budgeted. YTD gross utilities were $178,757.11; submeter reimbursements were $73,954.69 against $126,842.00 budgeted. The actual average net utility cost is $13,100.30 per month.
- An August 31 $3,786.00 credit to common-area maintenance debited operating cash and remained uncleared. The expense line is a net $(3,052.86), consisting of $733.14 charges less that credit. Without the credit, August net income would be $4,813.81. Obtain support and subsequent bank clearance; do not assume a recurring saving or confirmed developer recovery.
- The $5,298.26 suspense debit and December 1, 2025 property-insurance check remain unresolved at August 31. The latter is roughly nine months old. The insurance schedule reconciles to $12,021.08 monthly amortization and $36,063.22 prepaid insurance; its term ends November 27, 2026. The elevator contract term ends October 31, with $3,402.44 prepaid at August 31. Plan renewal liquidity separately from expense projections.
- The August operating reconciliation balances: $216,976.19 ledger cash less $(146,247.56) net uncleared items equals $363,223.75 bank cash. The bank balance is not an additional pool of spendable funds. The reserve reconciliation balances at $256,676.15 with no uncleared items.
- The four scenarios now use eight actual months and four remaining months: YTD pace $87,377.27; remaining months at budget $58,251.51; remaining revenue 5% below budget $40,644.48; August pace excluding a repeat maintenance credit $77,506.75. The last case keeps reported YTD results but adds $3,786 to each future month's expense. All retain the reported YTD credit; a reversal would reduce YTD income by $3,786 and require recalculating the scenarios. These are arithmetic scenarios, not predictions.
- The $616,245 Exhibit A total is appropriate for the seven-month 2025 startup period. The document-control issue is that this 2025 partial-year exhibit was reused inside the 2026 packet even though 2026 is a full 12-month year.
- The supplied reserve worksheet is dated April 24, 2023, revised November 27, 2023, and is a DRE preconstruction estimate.
- No 2024 on-site reserve study or 2025 accounting update exists. The references in the 2026 budget letter are inaccurate template language, not missing records.
- Until the first property-specific study is adopted, reserve estimates and contribution comparisons should index to the DRE worksheet. The next transition step is to commission that study now that the initial operating year has passed.

Treat this baseline as a comparison point, not a value to carry forward. Replace it with the next verified statement balances after documenting their review or approval status.

### September 14 review handoff

- Extracted both new packages in full (91 pages); visually checked July PDF pages 2, 4–5 and August pages 2–4, 8–9, 16, 21, and 39. Reviewed the ledger, remaining reconciliation pages, and prepaid/developer schedules as searchable text.
- Financial checks reconcile monthly and YTD results, July-to-August movements, reserve cash versus fund balance, the interfund repayment schedule, net receivables, the balance-sheet equation, operating equity, and four-month projection formulas.
- Records still required: board review/approval evidence; the adopted full-year pro forma, account-level budget export and minutes; first property-specific reserve study; year-end CPA review/audit and tax return; reserve repayment plan; suspense and insurance-payment support; maintenance credit documentation and subsequent clearance. September financials are next after month-end.
- Private PDFs remain ignored and untracked. Temporary extracts and renders are removed after verification; no owner-level data, bank identifiers, or private PDFs belong in the published output.
- `npm run build` passes with the pre-existing empty `history` and `parking` collection warnings. Final checks also include generated-page content, `git diff --check`, and privacy review.
- Browser visual QA could not be completed: the Browser runtime reported no available browser. Generated HTML content was checked, but desktop/mobile appearance was not verified in a browser.

## Updating the website

1. Add new source files only to `private-source-documents/financials/`.
2. Reconcile the source package before editing public figures.
3. Update reported inputs in `src/data/financialOverview.ts`.
4. Update or replace derived formulas when the reporting period changes.
5. Update the narrative, ratings, exceptions, projection assumptions, and record requests in `src/pages/financials/index.astro`.
6. If new closing data is supplied, update `src/data/closings.json` and the cutoff language in `src/pages/history/index.astro`.
7. Search the built page for stale dates, stale “Q1” labels, prior balances, and obsolete conclusions.
8. Run validation:

```sh
npm run build
git diff --check
git check-ignore -v private-source-documents/financials/*
git ls-files private-source-documents
git status --short --ignored
```

The build currently emits pre-existing warnings for empty `history` and `parking` content collections. Those warnings are unrelated to the financial analysis unless the corresponding content architecture changes.

## Future-session handoff summary

End each review by recording:

```text
Review date:
Latest statement date and approval status:
Unapproved or missing months:
New files reviewed:
Key reconciled balances:
Operating result and budget variances:
Reserve bank cash / interfund receivable / total reserve fund:
New accounting exceptions:
Property-operation watch items:
Projection range and assumptions:
Budget or reserve-document inconsistencies:
Records still required:
Privacy checks completed:
Build result:
```

Keep conclusions measured. The public page should distinguish reported facts, calculated metrics, professional interpretation, and unresolved questions.
