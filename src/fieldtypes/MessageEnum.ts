/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright © 2022 fixparser.io
 * Released under Commercial license. Check LICENSE.md
 */
export enum MessageEnum {
    Heartbeat = '0',
    TestRequest = '1',
    ResendRequest = '2',
    Reject = '3',
    SequenceReset = '4',
    Logout = '5',
    IOI = '6',
    Advertisement = '7',
    ExecutionReport = '8',
    OrderCancelReject = '9',
    Logon = 'A',
    News = 'B',
    Email = 'C',
    NewOrderSingle = 'D',
    NewOrderList = 'E',
    OrderCancelRequest = 'F',
    OrderCancelReplaceRequest = 'G',
    OrderStatusRequest = 'H',
    AllocationInstruction = 'J',
    ListCancelRequest = 'K',
    ListExecute = 'L',
    ListStatusRequest = 'M',
    ListStatus = 'N',
    AllocationInstructionAck = 'P',
    DontKnowTrade = 'Q',
    QuoteRequest = 'R',
    Quote = 'S',
    SettlementInstructions = 'T',
    MarketDataRequest = 'V',
    MarketDataSnapshotFullRefresh = 'W',
    MarketDataIncrementalRefresh = 'X',
    MarketDataRequestReject = 'Y',
    QuoteCancel = 'Z',
    QuoteStatusRequest = 'a',
    MassQuoteAcknowledgement = 'b',
    SecurityDefinitionRequest = 'c',
    SecurityDefinition = 'd',
    SecurityStatusRequest = 'e',
    SecurityStatus = 'f',
    TradingSessionStatusRequest = 'g',
    TradingSessionStatus = 'h',
    MassQuote = 'i',
    BusinessMessageReject = 'j',
    BidRequest = 'k',
    BidResponse = 'l',
    ListStrikePrice = 'm',
    XMLnonFIX = 'n',
    RegistrationInstructions = 'o',
    RegistrationInstructionsResponse = 'p',
    OrderMassCancelRequest = 'q',
    OrderMassCancelReport = 'r',
    NewOrderCross = 's',
    CrossOrderCancelReplaceRequest = 't',
    CrossOrderCancelRequest = 'u',
    SecurityTypeRequest = 'v',
    SecurityTypes = 'w',
    SecurityListRequest = 'x',
    SecurityList = 'y',
    DerivativeSecurityListRequest = 'z',
    DerivativeSecurityList = 'AA',
    NewOrderMultileg = 'AB',
    MultilegOrderCancelReplace = 'AC',
    TradeCaptureReportRequest = 'AD',
    TradeCaptureReport = 'AE',
    OrderMassStatusRequest = 'AF',
    QuoteRequestReject = 'AG',
    RFQRequest = 'AH',
    QuoteStatusReport = 'AI',
    QuoteResponse = 'AJ',
    Confirmation = 'AK',
    PositionMaintenanceRequest = 'AL',
    PositionMaintenanceReport = 'AM',
    RequestForPositions = 'AN',
    RequestForPositionsAck = 'AO',
    PositionReport = 'AP',
    TradeCaptureReportRequestAck = 'AQ',
    TradeCaptureReportAck = 'AR',
    AllocationReport = 'AS',
    AllocationReportAck = 'AT',
    ConfirmationAck = 'AU',
    SettlementInstructionRequest = 'AV',
    AssignmentReport = 'AW',
    CollateralRequest = 'AX',
    CollateralAssignment = 'AY',
    CollateralResponse = 'AZ',
    CollateralReport = 'BA',
    CollateralInquiry = 'BB',
    NetworkCounterpartySystemStatusRequest = 'BC',
    NetworkCounterpartySystemStatusResponse = 'BD',
    UserRequest = 'BE',
    UserResponse = 'BF',
    CollateralInquiryAck = 'BG',
    ConfirmationRequest = 'BH',
    TradingSessionListRequest = 'BI',
    TradingSessionList = 'BJ',
    SecurityListUpdateReport = 'BK',
    AdjustedPositionReport = 'BL',
    AllocationInstructionAlert = 'BM',
    ExecutionAcknowledgement = 'BN',
    ContraryIntentionReport = 'BO',
    SecurityDefinitionUpdateReport = 'BP',
    SettlementObligationReport = 'BQ',
    DerivativeSecurityListUpdateReport = 'BR',
    TradingSessionListUpdateReport = 'BS',
    MarketDefinitionRequest = 'BT',
    MarketDefinition = 'BU',
    MarketDefinitionUpdateReport = 'BV',
    ApplicationMessageRequest = 'BW',
    ApplicationMessageRequestAck = 'BX',
    ApplicationMessageReport = 'BY',
    OrderMassActionReport = 'BZ',
    OrderMassActionRequest = 'CA',
    UserNotification = 'CB',
    StreamAssignmentRequest = 'CC',
    StreamAssignmentReport = 'CD',
    StreamAssignmentReportACK = 'CE',
    MarginRequirementInquiry = 'CH',
    MarginRequirementInquiryAck = 'CI',
    MarginRequirementReport = 'CJ',
    PartyDetailsListRequest = 'CF',
    PartyDetailsListReport = 'CG',
    PartyDetailsListUpdateReport = 'CK',
    PartyRiskLimitsRequest = 'CL',
    PartyRiskLimitsReport = 'CM',
    SecurityMassStatusRequest = 'CN',
    SecurityMassStatus = 'CO',
    AccountSummaryReport = 'CQ',
    PartyRiskLimitsUpdateReport = 'CR',
    PartyRiskLimitsDefinitionRequest = 'CS',
    PartyRiskLimitsDefinitionRequestAck = 'CT',
    PartyEntitlementsRequest = 'CU',
    PartyEntitlementsReport = 'CV',
    QuoteAck = 'CW',
    PartyDetailsDefinitionRequest = 'CX',
    PartyDetailsDefinitionRequestAck = 'CY',
    PartyEntitlementsUpdateReport = 'CZ',
    PartyEntitlementsDefinitionRequest = 'DA',
    PartyEntitlementsDefinitionRequestAck = 'DB',
    TradeMatchReport = 'DC',
    TradeMatchReportAck = 'DD',
    PartyRiskLimitsReportAck = 'DE',
    PartyRiskLimitCheckRequest = 'DF',
    PartyRiskLimitCheckRequestAck = 'DG',
    PartyActionRequest = 'DH',
    PartyActionReport = 'DI',
    MassOrder = 'DJ',
    MassOrderAck = 'DK',
    PositionTransferInstruction = 'DL',
    PositionTransferInstructionAck = 'DM',
    PositionTransferReport = 'DN',
    MarketDataStatisticsRequest = 'DO',
    MarketDataStatisticsReport = 'DP',
    CollateralReportAck = 'DQ',
    MarketDataReport = 'DR',
    AllocationInstructionAlertRequest = 'DU',
    AllocationInstructionAlertRequestAck = 'DV',
    TradeAggregationRequest = 'DW',
    TradeAggregationReport = 'DX',
}
