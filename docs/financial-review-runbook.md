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

Use a range, not a single forecast. The financial page currently uses:

1. A November cash test: unrestricted cash after the Otis and insurance renewals, with and without the duplicate-check void and the MeterNet remittance, at flat, +10%, and +25% premiums
2. A next-year margin model built from the normalized run-rate (one-offs removed, current vendor rates), with toggles for janitorial, deferred services, solar credit, usage spike, submeter recovery, and reserve share, plus a bridge from the current-year pace that reconciles to the result

Every model must state its assumptions and be labeled as a scenario, not a prediction. Consider reporting lag, seasonality, late invoices, occupancy changes, utilities, contract starts, reserve spending, delinquencies, insurance renewal, and warranty recoveries.

When additional packages arrive and their status is established, replace period-specific inputs and scenario formulas with year-to-date values. Do not retain stale quarter labels.

## Verified baseline for the next update

The following figures were verified to the supplied September 30, 2026 package during the October 26, 2026 review. The package's statements were printed October 26 and its schedules October 23 (a 26-day lag); the PDF creation date (September 15) is not the preparation date. Board approval was not independently attested. October is the next package.

New records reviewed:

| Private source file | Reporting period | Statement preparation date | Pages | Contents |
| --- | --- | --- | ---: | --- |
| `2609-5148 FS-China Basin.PDF` | September 1–30, 2026 | October 26, 2026 (schedules October 23) | 49 | Comparative balance sheet, income statement, Jan–Sep monthly summary, due-to-reserve schedule, both reconciliations and bank statements, check log, disbursements, owner aging (pp. 24–25) and prepaid owner list (pp. 26–27) — owner-level, use only in aggregate — ledger, prepaid and deposit schedules, developer billing |
| `developer-mou.pdf` | Recorded October 2, 2025 | — | 11 | Mid-Block Maintenance and Repair Agreement (FOCIL-MB, LLC and the Association), assembled from screenshots. A recorded public document with no confidentiality clause |

| Measure | Verified amount |
| --- | ---: |
| Total assets | $523,325.50 |
| Operating bank ledger / bank statement | $193,502.81 / $347,537.11 |
| Outstanding items (19), incl. the Dec 1, 2025 insurance check | $154,034.30, incl. $143,885.94 |
| Due from operating to reserves | $42,732.00 |
| Unrestricted operating cash | $150,770.81 |
| Reserve bank cash / total reserve fund | $299,515.04 / $342,247.04 |
| Garage cost-center reserve balance | $10,216.25 |
| Net accounts receivable | $4,564.27 |
| Owner receivables / over 30 days / allowance | $2,422.01 / $359.50 (3 accounts) / $(13.46) |
| Other receivables (duplicate billing; write off) / developer | $2,155.72 / $0.00 |
| Prepaid expenses (insurance $24,042.14; Otis $1,701.24) | $25,743.38 |
| Prepaid assessments / refundable deposits | $21,782.20 / $6,550.00 |
| Suspense debit (unchanged since March) | $5,298.26 |
| Operating equity | $158,044.52 |
| January–September revenue / expense / net income | $730,977.93 / $690,355.84 / $40,622.09 |
| September revenue / expense / net income | $71,929.06 / $89,558.48 / $(17,629.42) |
| September submeter revenue (owner interest, no remittance) | $16.32 |
| Monthly / annual reserve allocation | $21,365.92 / $256,391 (24.3% of budget; 29.6% of assessments) |
| Insurance package / term end | $144,252.94 / November 27, 2026 |
| Otis contract / term end | $20,414.44 / October 31, 2026 |
| September developer bill (last; all units sold per management) | 2 units, $926.34, paid |

Other baseline facts:

- Ties: balance sheet; equity bridge $134,643.52 − $17,221.09 + $40,622.09 = $158,044.52; unrestricted cash = ledger − due-to-reserves; reserve fund = bank + due-from-operating. Every 2026 month was rebuilt from the GL and ties to the reported totals.
- The remaining $42,732.00 interfund equals the unfunded November–December 2025 allocations. Repayments now total five (Feb, Apr, Jun, Aug, Sep). Two more clear it.
- The Dec 1, 2025 $143,885.94 check to the broker has been outstanding on all ten reconciliations. The Association understands the developer paid the 2025–26 premium; voiding checks over 90 days was already requested, but the check was still outstanding at September 30. Voiding adds $143,885.94 to unrestricted cash only if no reimbursement is owed to the developer. Six other items over 60 days total $2,736.53.
- MeterNet remits one lockbox deposit a month (Jun–Aug 2026: $10.3–11.6k). None arrived in September. Since June 2025 remittances are 61% of water cost; at the budget's 91% recovery ratio the shortfall is $37,409.76 ($26,158.46 start-up, $11,251.30 September).
- The 2026 budget is the 2023 DRE worksheet × 12. Its electricity line nets a $4,029.58/month solar credit (Solarix letter, Jan 5, 2022); no credit appears in 2026 ledgers. Its "New Construction" line ($93,030 incl. garage) is the DRE 10% contingency, not a service.
- DRE reserve list: "Outdoor Table 4 × $6,000 = $24,011.52/yr" and "Wooden Bench 15 × $3,750 = $56,263.68/yr" (worksheet p. 9) are probably replacement costs entered as annual amounts ($80,275; 32% of the contribution). Ask the reserve-study preparer. Association Reserves was paid $3,405 in September.
- The "5% + CPI-U, 10% ceiling" assessment cap is not in any archived document (it matches Civ. Code §1947.12 rent caps). Treat it as unverified until the MOHCD/OCII City Documents are obtained.
- Garage cost center: CC&R §6.9.2 requires separate accounting. Parking-license income ($7,050 YTD) is in 336000; building AT&T lines ($6,954) are in 501000-01; garage electricity was allocated only in September.
- Possible duplicate payments to verify: Recology $7,320.25 (Nov 2025), Bay Alarm $2,839.05 (Dec 2025).
- Janitorial labor has not been paid since December 2025 although Superclean still bills supplies; possible unbilled liability up to ≈$30k for Jan–Sep.
- Mid-Block agreement: $103,191 payment due when the facilities transfer to MBMC (no date), repeating every 10 years, CPI-adjusted (≤3.5%/yr).
- Subsequent events (after September 30): management reports all units sold, and a one-time $300,000 developer payment is being deposited in October. It is a general contribution toward the first Mid-Block payment ($103,191) and sinking-sidewalk (ground settlement) repairs, not tied to an invoice. Confirm it is booked as a separately tracked designated fund, not operating income or general reserves; CPA/counsel should confirm whether it belongs in the reserve account given Civ. Code §5510 limits. Add later Mid-Block cycles (up to ≈$146k at year 10) and sidewalk settlement to the reserve study.

### October 26 review handoff

- Four parallel analyses (September ledger, revenue/receivables Jun 2025–Sep 2026, budget/reserves/legal, expense trends/coding) plus an MOU extraction. Working papers were kept in the session scratchpad only; some contain owner-level data and must not be published.
- The page was rebuilt as a dashboard: board calendar, KPI tiles, monthly result chart, November cash test, the four review questions, an interactive 2027 margin model (`runModel2027`, `bridge2027` in `financialOverview.ts`), subsequent events, and collapsed open items, records, and sources.
- Records still required: broker paid-in-full confirmation and who paid; MeterNet remittance statements and read history; PG&E/CleanPowerSF bills, interconnection/net-metering status, and solar production; Recology, Bay Alarm, and Superclean statements; Action fee schedule and invoice detail; insurance and Otis renewal quotes; garage allocation method; developer payment terms; Mid-Block transfer timeline.
- `npm run build` passes with the pre-existing empty `history` and `parking` collection warnings. Desktop and 390px mobile renders were checked in headless Chrome.

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
