export const financialOverview = {
  reviewedOn: 'October 26, 2026',
  asOf: 'September 30, 2026',
  statementsPreparedOn: 'October 26, 2026',
  latestMonth: 'September',
  previousReview: {
    asOf: 'August 31, 2026',
    ytdSurplus: 58_251.51,
    unrestrictedOperatingCash: 152_878.27,
    reserveFundBalance: 320_774.07,
  },
  units: {
    total: 148,
    // Management reported in October 2026 that every unit is sold.
    soldPerManagement: 148,
    lastDeveloperBill: { month: 'September 2026', units: 2, amount: 926.34 },
  },
  reported: {
    annualBudget: 1_056_422,
    monthlyBudget: 88_035.16,
    memberAssessmentsBudget: 817_387,
    garageAssessmentsBudget: 48_772,
    submeterBudget: 190_263,
    ytdRevenue: 730_977.93,
    ytdExpenses: 690_355.84,
    ytdSurplus: 40_622.09,
    ytdBudget: 792_316.44,
    ytdReserveFunding: 192_685.44,
    monthly2026: [
      { month: 'Jan', revenue: 72_397.57, expenses: 65_448.60 },
      { month: 'Feb', revenue: 80_951.07, expenses: 70_044.43 },
      { month: 'Mar', revenue: 77_984.75, expenses: 83_890.17 },
      { month: 'Apr', revenue: 93_523.87, expenses: 74_446.09 },
      { month: 'May', revenue: 81_881.16, expenses: 69_476.14 },
      { month: 'Jun', revenue: 83_734.94, expenses: 81_709.99 },
      { month: 'Jul', revenue: 84_854.22, expenses: 80_660.46 },
      { month: 'Aug', revenue: 83_721.29, expenses: 75_121.48 },
      { month: 'Sep', revenue: 71_929.06, expenses: 89_558.48 },
    ],
    totalAssets: 523_325.50,
    operatingLedgerCash: 193_502.81,
    operatingBankBalance: 347_537.11,
    unrestrictedOperatingCash: 150_770.81,
    prepaidAssessments: 21_782.20,
    refundableDeposits: 6_550,
    suspenseDebit: 5_298.26,
    operatingEquity: 158_044.52,
    reserveFundBalance: 342_247.04,
    reserveBankCash: 299_515.04,
    reserveDueFromOperating: 42_732,
    reserveCostCenterBalance: 10_216.25,
    monthlyReserveAllocation: 21_365.92,
    annualReserveContribution: 256_391,
    generalReserveContribution: 248_729,
    reserveYield: 0.0045,
    receivables: {
      net: 4_564.27,
      owners: 2_422.01,
      ownersOver30: 359.50,
      ownerAccountsOver30: 3,
      other: 2_155.72,
      allowance: 13.46,
      developer: 0,
    },
    insurance: {
      package: 144_252.94,
      budget: 131_371,
      monthlyAmortization: 12_021.08,
      prepaidRemaining: 24_042.14,
      termEnds: 'November 27, 2026',
      duplicateCheck: 143_885.94,
      duplicateCheckDated: 'December 1, 2025',
      duplicateCheckAgeDays: 303,
    },
    elevatorContract: { annual: 20_414.44, termEnds: 'October 31, 2026' },
    otherStaleItems: { count: 6, amount: 2_736.53 },
  },

  // Water cost (408000) and MeterNet remittances by month. 2025 values are from the
  // prior-manager packages; remittances are the lockbox deposits booked as "Submeter".
  submeterHistory: [
    { month: 'Jun 25', water: 0, remitted: 0 },
    { month: 'Jul 25', water: 1_097.25, remitted: 0 },
    { month: 'Aug 25', water: 1_363.94, remitted: 0 },
    { month: 'Sep 25', water: 4_554.76, remitted: 0 },
    { month: 'Oct 25', water: 5_451.48, remitted: 0 },
    { month: 'Nov 25', water: 7_509.20, remitted: 0 },
    { month: 'Dec 25', water: 12_940.34, remitted: 4_078.96 },
    { month: 'Jan 26', water: 7_277.64, remitted: 662.55 },
    { month: 'Feb 26', water: 9_867.07, remitted: 6_821.44 },
    { month: 'Mar 26', water: 9_107.63, remitted: 6_312.90 },
    { month: 'Apr 26', water: 9_864.66, remitted: 17_315.41 },
    { month: 'May 26', water: 11_117.33, remitted: 9_487.95 },
    { month: 'Jun 26', water: 9_816.41, remitted: 10_331.17 },
    { month: 'Jul 26', water: 11_500.97, remitted: 11_302.39 },
    { month: 'Aug 26', water: 12_918.62, remitted: 11_599.42 },
    { month: 'Sep 26', water: 12_366.65, remitted: 0 },
  ],
  submeterGap: { total: 37_409.76, startup: 26_158.46, september: 11_251.30, budgetRecoveryRatio: 0.9098 },

  // Tiers: missing = confirmed not received; recover = verify, then recover; unrealized = budgeted
  // benefit never received; question = unconfirmed, ask management. Do not total across tiers.
  receivableGaps: [
    { tier: 'missing', item: 'MeterNet September remittance', amount: 11_251.30, status: 'Missing', note: 'Monthly water-billing deposit (Jun–Aug ≈ $11.3–11.6k) did not arrive. The $16.32 booked to Submeter is owner interest.' },
    { tier: 'unrealized', item: 'MeterNet start-up under-recovery', amount: 26_158.46, status: 'Ask', note: 'No remittances Jun–Nov 2025; ≈46% recovery Dec–Mar. Measured against the budget’s 91% recovery ratio.' },
    { tier: 'unrealized', item: 'Solar production credit', amount: 36_266.22, status: 'Missing', note: 'Electricity budget nets a $4,029.58/mo solar credit. No credit appears on any 2026 bill (Jan–Sep shown).' },
    { tier: 'question', item: 'Initial-sale move-in fees', amount: 33_000, status: 'Ask', note: 'Rules require 50% of a month’s assessment paid in escrow at each initial sale. None is recorded; payee unconfirmed (estimate).' },
    { tier: 'recover', item: 'Possible Recology double payment', amount: 7_320.25, status: 'Verify', note: 'Two identical web payments cleared Nov 7 and Nov 12, 2025; both expensed.' },
    { tier: 'recover', item: 'Possible Bay Alarm duplicate', amount: 2_839.05, status: 'Verify', note: 'Two identical sprinkler invoices paid on one Dec 2025 check.' },
    { tier: 'question', item: 'Garage spaces credited monthly', amount: 5_400, status: 'Ask', note: 'Four of 34 spaces are credited every month ($600/mo; Jan–Sep shown). Confirm the basis.' },
  ],

  // Current monthly run-rate vs. 2026 monthly budget, per category.
  spendingIncreases: [
    { category: 'Refuse', budget: 4_282, current: 8_998, cause: 'Recology stepped to ≈$9k/mo from July. Rate reset or added service—pull invoices.' },
    { category: 'Management', budget: 4_000, current: 7_220, cause: '$6,000 base fee plus admin charges; budget still uses the DRE $3,500 estimate.' },
    { category: 'Electricity', budget: 3_520, current: 5_982, cause: 'Budget assumes a $4,030/mo solar credit that is not appearing. Usage also rose sharply in Sep–Oct.' },
    { category: 'Elevator', budget: 938, current: 2_736, cause: 'Otis contract ($20.4k/yr) was never budgeted; plus repairs. Renews Oct 31.' },
    { category: 'Landscape', budget: 272, current: 1_696, cause: 'DRE budget error; BrightView contract is $1,575.90/mo.' },
    { category: 'Insurance', budget: 10_948, current: 12_021, cause: 'Package came in 9.8% over budget. Renews Nov 27.' },
    { category: 'Fire & life safety', budget: 238, current: 1_233, cause: 'Monitored high-rise system; Bay Alarm rates +8.8% in September.' },
    { category: 'Telecom', budget: 0, current: 858, cause: 'AT&T lines for alarms/access; budget carried a placeholder.' },
  ],
  unpaidBudgetLines: [
    { category: 'Janitorial labor', budget: 69_797, note: 'Superclean on site; HOA has paid no labor since Dec 2025 ($3,350/mo then). Who pays—or is it unbilled?' },
    { category: '“New Construction” contingency', budget: 93_030, note: 'DRE 10% start-up contingency, not a service. $0 spent.' },
    { category: 'Window washing', budget: 30_014, note: 'Deferred by the prior board until nearby construction ends.' },
    { category: 'Solar maintenance', budget: 10_017, note: 'No solar vendor in any ledger.' },
  ],

  codingFixes: [
    { fix: 'Move parking-license income to the garage cost center', amount: 7_050, detail: '336000 Parking Spaces → 300000-01. The license ties the $150 fee to the cost center.' },
    { fix: 'Move building telecom out of the garage cost center', amount: 6_954, detail: 'AT&T lines in 501000-01 → telephone/fire-suppression lines.' },
    { fix: 'Allocate garage electricity for Jan–Aug', amount: 9_400, detail: 'Only September was split to 404000-01. Estimate $9.4k–$15.5k depending on method.' },
    { fix: 'Allocate garage shares never posted', amount: 9_266.75, detail: 'Garage gates $1,970; insurance $1,958; management $4,502; reserve study ≈$837.' },
    { fix: 'Write off duplicate-billing receivable', amount: 2_155.72, detail: '“Other Receivables” is Jan–Mar assessments re-billed in April; YTD assessments are overstated $2,778.66.' },
    { fix: 'Book the Otis contract to its own budgeted line', amount: 15_310.80, detail: 'Posted to 518000 (no budget); the budget sits in 518500 repairs.' },
    { fix: 'Reclass misc. items', amount: 2_147.08, detail: 'Owner interest in Submeter $137.78; PG&E tax in Other Taxes $627.98; Jan sewer in Plumbing $944.12; locksmith netted in FOB income $437.20.' },
    { fix: 'Relabel “New Construction” as contingency', amount: 93_030, detail: 'It is the DRE 10% start-up contingency; resize it in the 2027 budget.' },
  ],

  garageCostCenter: {
    spaces: 34,
    feePerSpace: 150,
    budgetPerSpace: 119.54,
    ytdBudget: 36_578.97,
    reported: { revenue: 31_200, expenses: 16_888.36 },
    restated: { revenue: 38_250, expensesLow: 28_601, expensesHigh: 34_701 },
  },

  reserves: {
    dreTablesAndBenches: 80_275,
    dreCorrectedNeed: 173_800,
    percentFundedRange: [0.71, 1.30],
    projectedYearEnd: 406_675,
    safeCutNow: 0.10,
    cutIfStudyConfirms: 0.25,
    studyVendorEngaged: 'Association Reserves',
    studyPaid: 3_405,
  },

  subsequentEvents: [
    { title: 'All units sold', detail: 'Management reports every unit is sold, so developer assessment billing is ending; September’s bill covered two units.' },
    { title: 'Developer payment for sidewalk-related costs', detail: 'Management reports a one-time developer payment is being deposited to the reserve account in October. Hold it as a separately tracked, designated fund: it is not operating income and should not count toward reserve adequacy.' },
  ],
  midBlockAgreement: {
    payment: 103_191,
    recordedOn: 'October 2, 2025',
    cycleYears: 10,
    annualCpiCap: 0.035,
    trigger: 'transfer of the Mid-Block facilities to the Mission Bay Maintenance Corporation',
  },

  deadlines: [
    { date: 'Now', item: 'Stop payment and void the $143.9k duplicate insurance check (already requested)' },
    { date: 'Oct 31', item: 'Otis elevator contract renews (≈$20.4k last year)' },
    { date: 'Nov 2–Dec 2', item: 'Mail notice of any 2027 assessment increase (Civ. Code §5615)' },
    { date: 'Nov 27', item: 'Insurance package renews (≈$144k last year)' },
    { date: 'Dec 2', item: 'Distribute the 2027 budget report with reserve summary and disclosure form (§§5300, 5565, 5570)' },
  ],

  openItems: [
    { item: 'Void checks older than 90 days', status: 'Not done', detail: '$143,885.94 insurance check plus six items ($2,736.53) still outstanding at Sep 30.' },
    { item: 'MeterNet meter-read meeting', status: 'Open', detail: 'Requested for the week of Sep 21. September remittance is missing.' },
    { item: 'Garage cost-center allocation', status: 'Open', detail: 'Accounting clarification pending. CC&R §6.9.2 requires separate accounting.' },
    { item: 'Refund held deposits', status: 'Open', detail: '$6,550 held. In September, ten deposits ($2,700) moved to owner credits instead of being refunded.' },
    { item: 'Suspense debit', status: 'Open', detail: '$5,298.26 since March; no activity.' },
    { item: 'Unidentified receipts', status: 'Open', detail: '$3,786 (Aug, cleared Sep 1) and $1,778.80 (Jun) credited to expense with no payer.' },
    { item: 'Reserve repayment', status: 'On track', detail: '$42,732 left = the unfunded Nov–Dec 2025 allocations. Two installments finish it.' },
    { item: 'Mid-Block maintenance payment', status: 'Unscheduled', detail: '$103,191 due when the Mid-Block transfers to MBMC (date unknown), repeating every 10 years. Confirm timing and whether the developer payment funds it.' },
    { item: 'Reserve study', status: 'Started', detail: 'Association Reserves paid $3,405 in September.' },
  ],

  recordsNeeded: [
    'Socher Insurance Agency paid-in-full confirmation for the 2025–26 term, and who paid it',
    'MeterNet monthly remittance statements and Jun–Nov 2025 read history',
    'PG&E and CleanPowerSF bills, net-metering/interconnection status, and solar production data',
    'Recology, Bay Alarm, and Superclean account statements for 2025–26',
    'Action fee schedule and detail for admin, handyman, and payroll invoices',
    'Insurance renewal quote and Otis renewal quote',
    'Board-approved garage cost-center allocation method',
    'Developer payment terms and deposit confirmation (October)',
    'Mid-Block transfer timeline from the developer and Mission Bay Maintenance Corporation',
  ],

  sourceDocuments: [
    'Monthly financial packages, June 2025 through September 2026 (16 packages)',
    'September 2026 package: 49 pages, statements prepared October 26, 2026',
    '2025 and 2026 Annual Budget Reports',
    'DRE budget worksheet dated April 24, 2023, revised November 27, 2023, and DRE budget review',
    'Recorded CC&Rs and Rules & Regulations',
  ],
} as const;

const { reported, reserves } = financialOverview;
const monthsReported = reported.monthly2026.length;

// 2027 margin model. Monthly baselines come from the normalized Jan–Sep 2026 run-rate
// (one-offs removed, re-rated to current vendor prices). Everything is annual dollars.
export const model2027Defaults = {
  insuranceIncrease: 0.10,
  inflation: 0.03,
  waterIncrease: 0.04,
  submeterRecovery: 0.95,
  janitorial: 40_200,
  restoreDeferredServices: true,
  solarRestored: false,
  electricitySpikePersists: false,
  contingencyRate: 0.03,
  reserveShare: 1,
};

export type Model2027Inputs = typeof model2027Defaults;

const model2027Base = {
  recurringMonthly: 20_831.92,
  waterMonthly: 11_651,
  electricityMonthly: 5_982,
  refuseMonthly: 8_998,
  insuranceAnnual: reported.insurance.package,
  solarCreditAnnual: 48_355,
  electricitySpikeAnnual: 28_800,
  deferredServicesAnnual: 43_646,
  garageRevenue: 51_000,
  otherRevenue: 3_500,
  memberAssessments: reported.memberAssessmentsBudget,
  reserveContribution: reported.annualReserveContribution,
};

export function runModel2027(input: Model2027Inputs) {
  const b = model2027Base;
  const water = b.waterMonthly * 12 * (1 + input.waterIncrease);
  const lines = {
    recurring: b.recurringMonthly * 12 * (1 + input.inflation),
    water,
    insurance: b.insuranceAnnual * (1 + input.insuranceIncrease),
    electricity:
      b.electricityMonthly * 12 * (1 + input.inflation) -
      (input.solarRestored ? b.solarCreditAnnual : 0) +
      (input.electricitySpikePersists ? b.electricitySpikeAnnual : 0),
    refuse: b.refuseMonthly * 12 * (1 + input.inflation),
    janitorial: input.janitorial,
    deferred: input.restoreDeferredServices ? b.deferredServicesAnnual : 0,
  };
  const operating = Object.values(lines).reduce((sum, value) => sum + value, 0);
  const contingency = operating * input.contingencyRate;
  const reserveFunding = b.reserveContribution * input.reserveShare;
  const nonMemberRevenue = b.garageRevenue + water * input.submeterRecovery + b.otherRevenue;
  const memberAssessmentsNeeded = operating + contingency + reserveFunding - nonMemberRevenue;
  return {
    lines,
    operating: operating + contingency,
    reserveFunding,
    nonMemberRevenue,
    memberAssessmentsNeeded,
    increase: memberAssessmentsNeeded / b.memberAssessments - 1,
  };
}

export const model2027Scenarios = [
  { name: 'Conservative baseline', note: 'Insurance +10%, janitorial labor resumes, deferred services restart, no solar credit', input: {} },
  { name: 'Solar credit restored', note: 'Rooftop system credited to the house meter', input: { solarRestored: true } },
  { name: 'Solar + reserves −10%', note: 'The only reserve cut that passes every tested case', input: { solarRestored: true, reserveShare: 0.9 } },
  { name: 'Solar + reserves −25%', note: 'Only if the study confirms the DRE table/bench error', input: { solarRestored: true, reserveShare: 0.75 } },
  { name: 'Stress', note: 'Insurance +25%, janitorial at DRE rate, Sep–Oct usage spike persists, 80% submeter recovery', input: { insuranceIncrease: 0.25, janitorial: 69_797, electricitySpikePersists: true, submeterRecovery: 0.8 } },
].map(scenario => ({ ...scenario, result: runModel2027({ ...model2027Defaults, ...scenario.input }) }));

// November cash test: unrestricted operating cash after the Otis and insurance renewals.
const septemberCashChange = -2_107.46;
const typicalSubmeterRemittance = 11_600;
export const insuranceCashTest = [false, true].flatMap(submeterResumes =>
  [false, true].map(voided => {
    const monthlyFlow = septemberCashChange + (submeterResumes ? typicalSubmeterRemittance : 0);
    const beforeRenewals =
      reported.unrestrictedOperatingCash +
      monthlyFlow * 2 +
      (submeterResumes ? typicalSubmeterRemittance : 0) +
      (voided ? reported.insurance.duplicateCheck : 0);
    const afterRenewal = (increase: number) =>
      beforeRenewals - reported.elevatorContract.annual - reported.insurance.package * (1 + increase);
    return {
      submeterResumes,
      voided,
      flat: afterRenewal(0),
      plus10: afterRenewal(0.1),
      plus25: afterRenewal(0.25),
    };
  }),
);

const sum = (values: readonly number[]) => values.reduce((total, value) => total + value, 0);

export const derivedFinancials = {
  monthsReported,
  monthlyResults: reported.monthly2026.map(m => ({ ...m, result: m.revenue - m.expenses })),
  ytdBudgetVariance: reported.ytdRevenue - reported.ytdExpenses,
  reserveShareOfBudget: reported.annualReserveContribution / reported.annualBudget,
  reserveShareOfAssessments:
    reported.annualReserveContribution /
    (reported.memberAssessmentsBudget + reported.garageAssessmentsBudget),
  reserveBankedShare: reported.reserveBankCash / reported.reserveFundBalance,
  unrestrictedCashIfVoided:
    reported.unrestrictedOperatingCash + reported.insurance.duplicateCheck,
  monthlyNonreserveExpense:
    (reported.ytdExpenses - reported.ytdReserveFunding) / monthsReported,
  onePercentOfAssessments: reported.memberAssessmentsBudget / 100,
  reserveCutValue: (share: number) => reported.generalReserveContribution * share,
  submeterWaterTotal: sum(financialOverview.submeterHistory.map(m => m.water)),
  submeterRemittedTotal: sum(financialOverview.submeterHistory.map(m => m.remitted)),
  septemberWithoutMissingRemittance:
    reported.monthly2026[8].revenue - reported.monthly2026[8].expenses + typicalSubmeterRemittance,
  dreCorrectionShare: reserves.dreTablesAndBenches / reported.generalReserveContribution,
} as const;

// Walk from the 2026 pace (Jan–Sep surplus annualized) to the 2027 result at current assessments.
// The final line is the residual so the bridge always reconciles to the model.
export function bridge2027(input: Model2027Inputs) {
  const b = model2027Base;
  const model = runModel2027(input);
  const start = (reported.ytdSurplus * 12) / monthsReported;
  const end = b.memberAssessments - model.memberAssessmentsNeeded;
  const contingency = model.operating - Object.values(model.lines).reduce((total, value) => total + value, 0);
  const items = [
    { label: 'Janitorial labor resumes', value: -input.janitorial },
    { label: 'Deferred services restart', value: input.restoreDeferredServices ? -b.deferredServicesAnnual : 0 },
    { label: `Insurance renewal +${Math.round(input.insuranceIncrease * 100)}%`, value: -b.insuranceAnnual * input.insuranceIncrease },
    { label: `Contingency (${Math.round(input.contingencyRate * 100)}%)`, value: -contingency },
    { label: 'Solar credit restored', value: input.solarRestored ? b.solarCreditAnnual : 0 },
    { label: 'Sep–Oct usage spike persists', value: input.electricitySpikePersists ? -b.electricitySpikeAnnual : 0 },
    { label: 'Reserve contribution change', value: b.reserveContribution * (1 - input.reserveShare) },
  ].filter(item => Math.round(item.value) !== 0);
  items.push({
    label: 'Rate step-ups, inflation, one-offs (net)',
    value: end - start - items.reduce((total, item) => total + item.value, 0),
  });
  return { start, items, end };
}
