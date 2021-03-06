export interface ISpecCategories {
    CategoryID: string;
    FIXMLFileName: string;
    NotReqXML: number;
    GenerateImplFile: number;
    ComponentType: string;
    SectionID?: string;
    Volume: number;
    IncludeFile?: string;
    added?: string;
    addedEP?: number;
}

export const CATEGORIES: ISpecCategories[] = [
    {
        CategoryID: 'Session',
        ComponentType: 'Message',
        Volume: 2,
        FIXMLFileName: 'session',
        NotReqXML: 1,
        GenerateImplFile: 0,
        SectionID: 'Session',
    },
    {
        CategoryID: 'Indication',
        ComponentType: 'Message',
        Volume: 3,
        FIXMLFileName: 'indications',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PreTrade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'SingleGeneralOrderHandling',
        ComponentType: 'Message',
        Volume: 4,
        FIXMLFileName: 'order',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'Trade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'EventCommunication',
        ComponentType: 'Message',
        Volume: 3,
        FIXMLFileName: 'newsevents',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PreTrade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'ProgramTrading',
        ComponentType: 'Message',
        Volume: 4,
        FIXMLFileName: 'listorders',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'Trade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'OrderMassHandling',
        ComponentType: 'Message',
        Volume: 4,
        FIXMLFileName: 'ordermasshandling',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'Trade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'Allocation',
        ComponentType: 'Message',
        Volume: 5,
        FIXMLFileName: 'allocation',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PostTrade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'QuotationNegotiation',
        ComponentType: 'Message',
        Volume: 3,
        FIXMLFileName: 'quotation',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PreTrade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'SettlementInstruction',
        ComponentType: 'Message',
        Volume: 5,
        FIXMLFileName: 'settlement',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PostTrade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'MarketData',
        ComponentType: 'Message',
        Volume: 3,
        FIXMLFileName: 'marketdata',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PreTrade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'Common',
        ComponentType: 'Message',
        Volume: 1,
        FIXMLFileName: 'components',
        NotReqXML: 0,
        GenerateImplFile: 1,
        IncludeFile: 'fields',
    },
    {
        CategoryID: 'RegistrationInstruction',
        ComponentType: 'Message',
        Volume: 3,
        FIXMLFileName: 'registration',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PostTrade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'CrossOrders',
        ComponentType: 'Message',
        Volume: 4,
        FIXMLFileName: 'crossorders',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'Trade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'MultilegOrders',
        ComponentType: 'Message',
        Volume: 4,
        FIXMLFileName: 'multilegorders',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'Trade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'TradeCapture',
        ComponentType: 'Message',
        Volume: 5,
        FIXMLFileName: 'tradecapture',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PostTrade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'Confirmation',
        ComponentType: 'Message',
        Volume: 5,
        FIXMLFileName: 'confirmation',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PostTrade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'PositionMaintenance',
        ComponentType: 'Message',
        Volume: 5,
        FIXMLFileName: 'positions',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PostTrade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'CollateralManagement',
        ComponentType: 'Message',
        Volume: 5,
        FIXMLFileName: 'collateral',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PostTrade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'Application',
        ComponentType: 'Message',
        Volume: 1,
        FIXMLFileName: 'application',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'Infrastructure',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'BusinessReject',
        ComponentType: 'Message',
        Volume: 1,
        FIXMLFileName: 'businessreject',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'Infrastructure',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'Network',
        ComponentType: 'Message',
        Volume: 1,
        FIXMLFileName: 'network',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'Infrastructure',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'UserManagement',
        ComponentType: 'Message',
        Volume: 1,
        FIXMLFileName: 'usermanagement',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'Infrastructure',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'Fields',
        ComponentType: 'Field',
        Volume: 6,
        FIXMLFileName: 'fields',
        NotReqXML: 0,
        GenerateImplFile: 0,
    },
    {
        CategoryID: 'ImplFields',
        ComponentType: 'Field',
        Volume: 6,
        FIXMLFileName: 'fields',
        NotReqXML: 0,
        GenerateImplFile: 0,
    },
    {
        CategoryID: 'MarketStructureReferenceData',
        ComponentType: 'Message',
        added: 'FIX.5.0SP1',
        Volume: 3,
        addedEP: 97,
        FIXMLFileName: 'marketstructure',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PreTrade',
        IncludeFile: 'components',
    },
    {
        CategoryID: 'SecuritiesReferenceData',
        ComponentType: 'Message',
        added: 'FIX.5.0SP1',
        Volume: 3,
        addedEP: 97,
        FIXMLFileName: 'securitiesreference',
        NotReqXML: 0,
        GenerateImplFile: 1,
        SectionID: 'PreTrade',
        IncludeFile: 'components',
    },
];
