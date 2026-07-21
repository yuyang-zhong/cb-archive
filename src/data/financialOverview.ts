export const financialOverview = {
  reviewedOn: 'July 20, 2026',
  asOf: 'March 31, 2026',
  units: {
    total: 148,
    closedAtStatementDate: 129,
    closedAtReviewDate: 143,
  },
  reported: {
    operatingMonths2025: 7,
    revenue2025: 537_030.09,
    expenses2025: 402_386.57,
    netIncome2025: 134_643.52,
    q1Revenue: 231_333.39,
    q1BudgetRevenue: 264_105.48,
    q1Expenses: 219_383.20,
    q1BudgetExpenses: 264_105.48,
    q1Surplus: 11_950.19,
    monthlyResultsQ1: [
      { month: 'January', result: 6_948.97 },
      { month: 'February', result: 10_906.64 },
      { month: 'March', result: -5_905.42 },
    ],
    annualBudgetUsedInStatements: 1_056_422,
    monthlyBudgetUsedInStatements: 88_035.16,
    partialYearTotalPrintedInBudgetExhibit: 616_245,
    totalAssets: 358_999.09,
    operatingBankCash: 158_451.82,
    unrestrictedOperatingCash: 30_256.14,
    accountsReceivable: 6_978.22,
    prepaidExpenses: 108_077.06,
    knownGrossCurrentObligations: 21_237.06,
    suspenseDebit: 5_298.26,
    reserveFundBalance: 213_687.67,
    reserveBankCash: 85_491.99,
    reserveDueFromOperating: 128_195.68,
    monthlyReserveAllocation: 21_365.92,
    q1ReserveFundingIncludingInterest: 64_126.07,
    currentYearAdjustment: 17_221.09,
    grossUtilitiesQ1: 63_804.18,
    q1WaterReimbursements: 13_806.05,
    fullOccupancyWaterBudgetMonthly: 15_855.25,
    propertyInsurancePremium: 143_885.94,
    workersCompPremium: 367,
    insurancePackageTotal: 144_252.94,
    insuranceAmortizationMonthly: 12_021.08,
    unclearedPropertyInsuranceCheck: 143_885.94,
    marchDeveloperBilling: 11_577.61,
    marchDeveloperPaymentInTransit: 10_727.21,
  },
  watchItems: [
    {
      category: 'Suspense-account EFT',
      period: 'March 2026',
      amount: 5_298.26,
      detail: 'A CollectBureau ACH debit was parked as a debit in a liability account rather than classified through the income statement.',
      action: 'Obtain the invoice or recovery support and reclassify it. If it is an operating expense, Q1 income is currently overstated by this amount.',
      priority: 'High',
    },
    {
      category: 'Elevator repairs and extras',
      period: 'March 2026',
      amount: 7_478,
      detail: '$1,488 of extras plus $5,990 of repair and maintenance charges.',
      action: 'Match invoices to the Otis scope, warranties, and any developer responsibility before treating the pattern as normal operating cost.',
      priority: 'High',
    },
    {
      category: 'Janitorial extras and supplies',
      period: 'Q1 2026',
      amount: 2_363.95,
      detail: '$2,295.10 of extras plus $68.85 of supplies; nearly all was recorded in March.',
      action: 'Separate preventable resident-use calls from recurring scope gaps and compare both with the base contract.',
      priority: 'Medium',
    },
    {
      category: 'Plumbing and sewer repairs',
      period: 'Q1 2026',
      amount: 2_314.62,
      detail: '$944.12 in January plus $1,370.50 in March.',
      action: 'Track location, cause, repeat occurrence, and warranty recovery rather than relying only on the general-ledger category.',
      priority: 'Medium',
    },
    {
      category: 'Access control and security',
      period: 'Q1 2026',
      amount: 2_666.37,
      detail: 'Access-control charges were $2,198.13 unfavorable to the Q1 budget.',
      action: 'Confirm which calls are included in contract scope and establish an exception log for billable dispatches.',
      priority: 'Monitor',
    },
  ],
  sourceDocuments: [
    'Financial statement packages, June 2025 through March 2026',
    '2025 Annual Budget Report dated October 14, 2025',
    '2026 Annual Budget Report dated November 2025',
    'DRE budget worksheet dated April 24, 2023 and revised November 27, 2023',
    'DRE budget review and supporting insurance estimate',
  ],
} as const;

const { reported } = financialOverview;

export const derivedFinancials = {
  q1OperatingMargin: reported.q1Surplus / reported.q1Revenue,
  q1RevenueVariance: reported.q1Revenue - reported.q1BudgetRevenue,
  q1ExpenseVariance: reported.q1BudgetExpenses - reported.q1Expenses,
  monthlyRevenueRunRate: reported.q1Revenue / 3,
  monthlyExpenseRunRate: reported.q1Expenses / 3,
  monthlySurplusRunRate: reported.q1Surplus / 3,
  monthlyNonreserveExpenseRunRate:
    (reported.q1Expenses - reported.q1ReserveFundingIncludingInterest) / 3,
  operatingCashMonths:
    reported.unrestrictedOperatingCash /
    ((reported.q1Expenses - reported.q1ReserveFundingIncludingInterest) / 3),
  liquidOperatingAssets:
    reported.unrestrictedOperatingCash + reported.accountsReceivable,
  reserveBankedShare: reported.reserveBankCash / reported.reserveFundBalance,
  reserveInterfundShare:
    reported.reserveDueFromOperating / reported.reserveFundBalance,
  annualRevenueAtQ1Pace: reported.q1Revenue * 4,
  annualExpensesAtQ1Pace: reported.q1Expenses * 4,
  annualSurplusAtQ1Pace: reported.q1Surplus * 4,
  annualReserveAllocationIfContinued: reported.monthlyReserveAllocation * 12,
  budgetRemainderRevenue:
    reported.q1Revenue + reported.monthlyBudgetUsedInStatements * 9,
  budgetRemainderExpenses:
    reported.q1Expenses + reported.monthlyBudgetUsedInStatements * 9,
  budgetRemainderRevenueStress:
    reported.q1Revenue + reported.monthlyBudgetUsedInStatements * 9 * 0.95,
  marchPaceRevenue:
    reported.q1Revenue + 77_984.75 * 9,
  marchPaceExpenses:
    reported.q1Expenses + 83_890.17 * 9,
  waterReimbursementsMonthlyAverage: reported.q1WaterReimbursements / 3,
  grossUtilitiesMonthlyAverage: reported.grossUtilitiesQ1 / 3,
  q1NetUtilitiesMonthlyAverage:
    (reported.grossUtilitiesQ1 - reported.q1WaterReimbursements) / 3,
  fullOccupancyIllustrativeNetUtilities:
    reported.grossUtilitiesQ1 / 3 - reported.fullOccupancyWaterBudgetMonthly,
  waterRecoveryAgainstFullOccupancyBudget:
    (reported.q1WaterReimbursements / 3) /
    reported.fullOccupancyWaterBudgetMonthly,
  remainingAtStatementDate:
    financialOverview.units.total - financialOverview.units.closedAtStatementDate,
  remainingAtReviewDate:
    financialOverview.units.total - financialOverview.units.closedAtReviewDate,
  closingShareAtReviewDate:
    financialOverview.units.closedAtReviewDate / financialOverview.units.total,
  adjustedQ1SurplusIfSuspenseIsExpense:
    reported.q1Surplus - reported.suspenseDebit,
  operatingEquityAt2025YearEnd: 134_918.90,
  operatingEquityAtQ1End: 129_372.62,
  operatingEquityChange: 129_372.62 - 134_918.90,
  insurancePackageMonthly: reported.insurancePackageTotal / 12,
} as const;
