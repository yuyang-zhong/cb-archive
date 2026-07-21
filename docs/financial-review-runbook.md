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
3. Current professional reserve study and annual update
4. Annual budget report and statutory reserve disclosures
5. DRE or developer preconstruction estimates
6. Explicitly labeled analyst assumptions

Keep these dates separate:

- `asOf`: the end date of the latest approved financial statement
- `reviewedOn`: the date the analysis was performed

Do not treat a newer file as approved merely because it exists. Confirm its status from the user, board record, or approved minutes. Always disclose a reporting lag.

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

A DRE preconstruction budget worksheet that divides estimated replacement cost by useful life is not a substitute for a current reserve study. If the budget packet references a study or update that is not actually attached, report it as a missing record rather than assuming its conclusions.

### 6. Build projections conservatively

Use a range, not a single forecast. The financial page currently uses four comparison cases:

1. Latest year-to-date pace repeats
2. Actual year-to-date results plus budget for the remaining months
3. A modest remaining-year revenue stress
4. The most recent month's pace continues

Every model must state its assumptions and be labeled as a scenario, not a prediction. Consider reporting lag, seasonality, late invoices, occupancy changes, utilities, contract starts, reserve spending, delinquencies, insurance renewal, and warranty recoveries.

When additional approved months arrive, replace Q1-specific inputs and scenario formulas with year-to-date values. Do not retain stale quarter labels.

## Verified baseline for the next update

The following figures were verified to the March 31, 2026 package during the July 20, 2026 review:

| Measure | Verified amount |
| --- | ---: |
| Total assets | $358,999.09 |
| Operating bank ledger | $158,451.82 |
| Due from operating to reserves | $128,195.68 |
| Unrestricted operating cash | $30,256.14 |
| Reserve bank cash | $85,491.99 |
| Total reserve fund | $213,687.67 |
| Accounts receivable | $6,978.22 |
| Prepaid expenses | $108,077.06 |
| Q1 operating revenue | $231,333.39 |
| Q1 operating expense | $219,383.20 |
| Q1 net income | $11,950.19 |
| Q1 budget revenue and expense | $264,105.48 each |
| Current-year equity adjustment | $(17,221.09) |
| Unclassified suspense debit | $5,298.26 |
| Monthly reserve allocation | $21,365.92 |
| Insurance package | $144,252.94 |
| Property-insurance check still uncleared at March 31 | $143,885.94 |

Other baseline facts:

- The 2025 statements cover seven operating months, June through December, and report $134,643.52 of net income before later equity adjustments.
- March 2026 alone reports a $5,905.42 loss.
- The reserve total consists of 40.0% reserve-bank cash and 60.0% due from operating.
- The March closing log shows 129 of 148 units closed. The July 20 update shows 143 closed and five remaining.
- The 2026 statements use a 12-month, break-even annual budget of $1,056,422.
- The supplied 2026 packet's Exhibit A is labeled 2025 and prints $616,245 of “annual” revenue and expense, which equals seven months of its monthly total.
- The supplied reserve worksheet is dated April 24, 2023, revised November 27, 2023, and is a DRE preconstruction estimate.
- The 2026 budget letter references a 2024 on-site reserve study and a 2025 accounting update, but those studies were not among the files reviewed.

Treat this baseline as a comparison point, not a value to carry forward. Replace it with the new approved statement balances.

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
Latest approved statement date:
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
