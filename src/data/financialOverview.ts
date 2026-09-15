export const financialOverview = {
  reviewedOn: 'September 14, 2026',
  asOf: 'August 31, 2026',
  latestMonth: 'August',
  previousReview: {
    asOf: 'June 30, 2026',
    surplus: 45_457.94,
    unrestrictedOperatingCash: 95_644.77,
    reserveDueFromOperating: 85_463.84,
  },
  units: {
    total: 148,
    closedAtLatestClosingLog: 145,
    closingDataAsOf: 'August 6, 2026',
  },
  reported: {
    operatingMonths2025: 7,
    revenue2025: 537_030.09,
    expenses2025: 402_386.57,
    netIncome2025: 134_643.52,
    ytdRevenue: 659_048.87,
    ytdBudgetRevenue: 704_281.28,
    ytdExpenses: 600_797.36,
    ytdBudgetExpenses: 704_281.28,
    ytdSurplus: 58_251.51,
    monthlyResults: [
      { month: 'January', result: 6_948.97 },
      { month: 'February', result: 10_906.64 },
      { month: 'March', result: -5_905.42 },
      { month: 'April', result: 19_077.78 },
      { month: 'May', result: 12_405.02 },
      { month: 'June', result: 2_024.95 },
      { month: 'July', result: 4_193.76 },
      { month: 'August', result: 8_599.81 },
    ],
    julyRevenue: 84_854.22,
    julyExpenses: 80_660.46,
    julyUnrestrictedOperatingCash: 127_693.36,
    julyReserveBankCash: 213_852.92,
    julyReserveFundBalance: 299_316.76,
    latestMonthRevenue: 83_721.29,
    latestMonthExpenses: 75_121.48,
    unclearedMaintenanceCredit: 3_786,
    annualBudgetUsedInStatements: 1_056_422,
    monthlyBudgetUsedInStatements: 88_035.16,
    partialYearTotalPrintedInBudgetExhibit: 616_245,
    totalAssets: 517_482.30,
    operatingBankCash: 216_976.19,
    unrestrictedOperatingCash: 152_878.27,
    accountsReceivable: 4_364.30,
    ownerAssessmentsReceivable: 2_651.06,
    allowanceForDoubtfulAccounts: 442.48,
    ownerReceivablesOlderThan30Days: 943.45,
    ownerReceivablesOlderThan90Days: 442.48,
    developerAssessmentsReceivable: 0,
    otherReceivables: 2_155.72,
    prepaidExpenses: 39_465.66,
    prepaidAssessments: 19_132.55,
    refundableDeposits: 7_200,
    suspenseDebit: 5_298.26,
    reserveFundBalance: 320_774.07,
    reserveBankCash: 256_676.15,
    reserveDueFromOperating: 64_097.92,
    monthlyReserveAllocation: 21_365.92,
    ytdReserveFundingIncludingInterest: 171_212.47,
    reserveRepaymentsToDate: 85_463.68,
    currentYearAdjustment: 17_221.09,
    grossUtilitiesYtd: 178_757.11,
    ytdWaterReimbursements: 73_954.69,
    ytdWaterReimbursementBudget: 126_842,
    fullOccupancyWaterBudgetMonthly: 15_855.25,
    propertyInsurancePremium: 143_885.94,
    workersCompPremium: 367,
    insurancePackageTotal: 144_252.94,
    insuranceAmortizationMonthly: 12_021.08,
    unclearedPropertyInsuranceCheck: 143_885.94,
    latestDeveloperBilling: 2_722.80,
    statementDeveloperUnsoldUnits: 6,
  },
  watchItems: [
    {
      category: 'Budget-to-ledger alignment',
      period: 'Jan–Aug 2026',
      amount: 103_483.92,
      detail: 'Landscape actuals were $13,777.63 against $2,178.64 budgeted. Janitorial contract, window washing, and new-construction lines still show no actuals against $46,531.36, $20,009.36, and $62,020.00 of combined budgets respectively.',
      action: 'Reconcile the adopted pro forma, CINC budget mapping, vendor coding, and missing accruals before treating the full variance as recurring savings.',
      priority: 'High',
    },
    {
      category: 'Fire, life-safety, and access systems',
      period: 'Jan–Aug 2026',
      amount: 13_277.28,
      detail: '$6,229.70 of access-control cost plus $7,047.58 across fire extinguisher, sprinkler, and monitoring accounts. July and August access entries are telecom charges; they do not by themselves establish repair incidents.',
      action: 'Match each invoice to contract scope, startup warranty, and developer responsibility, and confirm that recurring life-safety service is mapped to the correct budget lines.',
      priority: 'High',
    },
    {
      category: 'Elevator repairs and extras',
      period: 'Jan–Aug 2026',
      amount: 9_312,
      detail: '$1,488 of extras plus $7,824 of repair and maintenance charges, unchanged in July and August and excluding the separately amortized base contract.',
      action: 'Match invoices to the Otis scope, warranties, and any developer responsibility before treating the pattern as normal operating cost.',
      priority: 'Medium',
    },
    {
      category: 'Landscape and irrigation',
      period: 'Jan–Aug 2026',
      amount: 13_777.63,
      detail: '$12,331.80 of recurring landscape charges plus the $1,445.83 June irrigation repair. July and August each cost $1,575.90 against a $272.33 monthly category budget.',
      action: 'Confirm the recurring contract, code the irrigation repair consistently, and correct the account-level budget mapping.',
      priority: 'Medium',
    },
    {
      category: 'Plumbing and sewer repairs',
      period: 'Jan–Aug 2026',
      amount: 4_377.01,
      detail: '$944.12 of sewer work and $3,432.89 of plumbing repairs, including $900.39 in July and $655.00 in August.',
      action: 'Track location, cause, repeat occurrence, and warranty recovery rather than relying only on the general-ledger category.',
      priority: 'Monitor',
    },
    {
      category: 'Utilities and refuse',
      period: 'August 2026',
      amount: 27_115.27,
      detail: 'August utilities exceeded the $26,017.67 monthly budget. Refuse alone was $8,690.23 against $4,281.67 budgeted; water reimbursements were $11,611.31 against $15,855.25 budgeted.',
      action: 'Check service levels, rate changes, billing periods, and submeter collections before extrapolating the earlier utility savings.',
      priority: 'High',
    },
    {
      category: 'Maintenance credit awaiting bank clearance',
      period: 'August 2026',
      amount: 3_786,
      detail: 'An August 31 credit reduced common-area maintenance expense and increased operating ledger cash, but the receipt remained uncleared at month-end.',
      action: 'Obtain the credit support and subsequent bank clearance. Treat the benefit as nonrecurring when assessing the monthly operating pace.',
      priority: 'High',
    },
  ],
  sourceDocuments: [
    'Financial statement packages, June 2025 through June 2026 (previous review baseline)',
    'July 2026 financial package: 48 pages, statements prepared August 25, 2026',
    'August 2026 financial package: 43 pages, statements prepared September 8, 2026',
    '2025 Annual Budget Report dated October 14, 2025',
    '2026 Annual Budget Report dated November 2025',
    'DRE budget worksheet dated April 24, 2023 and revised November 27, 2023',
    'DRE budget review and supporting insurance estimate',
  ],
} as const;

const { reported, previousReview } = financialOverview;
const monthsReported = reported.monthlyResults.length;
const monthsRemaining = 12 - monthsReported;
// Annualize integer cents so half-cent projections round consistently for display.
const annualize = (amount: number) =>
  Math.round(Math.round(amount * 100) * 12 / monthsReported) / 100;

export const derivedFinancials = {
  monthsReported,
  monthsRemaining,
  ytdOperatingMargin: reported.ytdSurplus / reported.ytdRevenue,
  ytdRevenueVariance: reported.ytdRevenue - reported.ytdBudgetRevenue,
  ytdExpenseVariance: reported.ytdBudgetExpenses - reported.ytdExpenses,
  surplusSincePreviousReview: reported.ytdSurplus - previousReview.surplus,
  operatingCashIncrease:
    reported.unrestrictedOperatingCash - previousReview.unrestrictedOperatingCash,
  reserveRepaymentsSincePreviousReview:
    previousReview.reserveDueFromOperating - reported.reserveDueFromOperating,
  latestMonthSurplus: reported.latestMonthRevenue - reported.latestMonthExpenses,
  latestMonthSurplusExcludingMaintenanceCredit:
    reported.latestMonthRevenue - reported.latestMonthExpenses - reported.unclearedMaintenanceCredit,
  monthlyRevenueRunRate: reported.ytdRevenue / monthsReported,
  monthlyExpenseRunRate: reported.ytdExpenses / monthsReported,
  monthlySurplusRunRate: reported.ytdSurplus / monthsReported,
  monthlyNonreserveExpenseRunRate:
    (reported.ytdExpenses - reported.ytdReserveFundingIncludingInterest) / monthsReported,
  operatingCashMonths:
    reported.unrestrictedOperatingCash /
    ((reported.ytdExpenses - reported.ytdReserveFundingIncludingInterest) / monthsReported),
  liquidOperatingAssets:
    reported.unrestrictedOperatingCash + reported.accountsReceivable,
  reserveBankedShare: reported.reserveBankCash / reported.reserveFundBalance,
  reserveInterfundShare:
    reported.reserveDueFromOperating / reported.reserveFundBalance,
  annualRevenueAtYtdPace: annualize(reported.ytdRevenue),
  annualExpensesAtYtdPace: annualize(reported.ytdExpenses),
  annualSurplusAtYtdPace: annualize(reported.ytdSurplus),
  annualReserveAllocationIfContinued: reported.monthlyReserveAllocation * 12,
  budgetRemainderRevenue:
    reported.ytdRevenue + reported.monthlyBudgetUsedInStatements * monthsRemaining,
  budgetRemainderExpenses:
    reported.ytdExpenses + reported.monthlyBudgetUsedInStatements * monthsRemaining,
  budgetRemainderRevenueStress:
    reported.ytdRevenue + reported.monthlyBudgetUsedInStatements * monthsRemaining * 0.95,
  latestMonthPaceRevenue: reported.ytdRevenue + reported.latestMonthRevenue * monthsRemaining,
  // Keep reported YTD actuals; do not repeat August's uncleared credit in future months.
  latestMonthPaceExpenses:
    reported.ytdExpenses +
    (reported.latestMonthExpenses + reported.unclearedMaintenanceCredit) * monthsRemaining,
  waterReimbursementsMonthlyAverage: reported.ytdWaterReimbursements / monthsReported,
  waterReimbursementShortfall:
    reported.ytdWaterReimbursementBudget - reported.ytdWaterReimbursements,
  grossUtilitiesMonthlyAverage: reported.grossUtilitiesYtd / monthsReported,
  ytdNetUtilitiesMonthlyAverage:
    (reported.grossUtilitiesYtd - reported.ytdWaterReimbursements) / monthsReported,
  fullOccupancyIllustrativeNetUtilities:
    reported.grossUtilitiesYtd / monthsReported - reported.fullOccupancyWaterBudgetMonthly,
  waterRecoveryAgainstFullOccupancyBudget:
    (reported.ytdWaterReimbursements / monthsReported) /
    reported.fullOccupancyWaterBudgetMonthly,
  remainingAtLatestClosingLog:
    financialOverview.units.total -
    financialOverview.units.closedAtLatestClosingLog,
  closingShareAtLatestClosingLog:
    financialOverview.units.closedAtLatestClosingLog /
    financialOverview.units.total,
  adjustedYtdSurplusIfSuspenseIsExpense:
    reported.ytdSurplus - reported.suspenseDebit,
  operatingEquityAtPeriodEnd:
    reported.netIncome2025 - reported.currentYearAdjustment + reported.ytdSurplus,
  totalLiabilities:
    reported.prepaidAssessments + reported.refundableDeposits - reported.suspenseDebit,
  insurancePackageMonthly: reported.insurancePackageTotal / 12,
} as const;
