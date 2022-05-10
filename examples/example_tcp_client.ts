import {
    EncryptMethod,
    Field,
    Fields,
    FIXParser,
    HandlInst,
    LicenseManager,
    Message,
    Messages,
    OrderTypes,
    Side,
    TimeInForce,
} from '../src/FIXParser';

const fixParser = new FIXParser();
const SENDER = 'CLIENT1';
const TARGET = 'EXECUTOR';

// NOTE: This feature requires a FIXParser Enterprise license
void LicenseManager.setLicenseKey(`-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEYSAlmRYJKwYBBAHaRw8BAQdATxsL8ZGu79iIXGoMwAGxis0Ot6zN+c+H
FiEfymdU5QHNIGZpeHBhcnNlci5pbyA8aW5mb0BmaXhwYXJzZXIuaW8+wowE
EBYKAB0FAmEgJZkECwkHCAMVCAoEFgACAQIZAQIbAwIeAQAhCRDpKZsYDAPF
cxYhBOT5iMsY4w3omYDb+ukpmxgMA8VziRIA/A5mUMldqdrKsxJddLiMfJ30
DVyKt8dXn6Fu6b2riwrHAP0YqK+goCIt7y6de9KTWmnWBgMAxX5XNAK5B41A
DsfYCM44BGEgJZkSCisGAQQBl1UBBQEBB0A0y8VUtHP6LESsJZN7yEpOKHtR
2JCLu/swlNU2QfojLwMBCAfCeAQYFggACQUCYSAlmQIbDAAhCRDpKZsYDAPF
cxYhBOT5iMsY4w3omYDb+ukpmxgMA8VzB/QBAOzjjWDBPlSDYpPMv13s8OS6
Tzi6Zidom0ZY6lkJMBNCAQCNwsJXAWbxHmHmMJq5yLe5GaL9YQWxeUM4AdUa
GqHtBQ===YpfV
-----END PGP PUBLIC KEY BLOCK-----`);

fixParser.connect({
    host: 'localhost',
    port: 7001,
    protocol: 'tcp',
    sender: SENDER,
    target: TARGET,
    fixVersion: 'FIX.4.2',
    logging: true,
    onOpen: () => {
        console.log('Open');
        sendLogon();
        setInterval(() => {
            sendOrder();
        }, 500);
    },
    onMessage: (message: Message) => console.log('received message', message.description, message.messageString),
    onClose: () => console.log('Disconnected'),
});

const sendLogon = () => {
    const logon = fixParser.createMessage(
        new Field(Fields.MsgType, Messages.Logon),
        new Field(Fields.MsgSeqNum, fixParser.getNextTargetMsgSeqNum()),
        new Field(Fields.SenderCompID, SENDER),
        new Field(Fields.SendingTime, fixParser.getTimestamp()),
        new Field(Fields.TargetCompID, TARGET),
        new Field(Fields.ResetSeqNumFlag, 'Y'),
        new Field(Fields.EncryptMethod, EncryptMethod.None),
        new Field(Fields.HeartBtInt, 10),
    );
    const messages = fixParser.parse(logon.encode());
    console.log('sending message', messages[0].description, messages[0].messageString);
    fixParser.send(logon);
};

const sendOrder = () => {
    const order = fixParser.createMessage(
        new Field(Fields.MsgType, Messages.NewOrderSingle),
        new Field(Fields.MsgSeqNum, fixParser.getNextTargetMsgSeqNum()),
        new Field(Fields.SenderCompID, SENDER),
        new Field(Fields.SendingTime, fixParser.getTimestamp()),
        new Field(Fields.TargetCompID, TARGET),
        new Field(Fields.ClOrdID, '11223344'),
        new Field(Fields.HandlInst, HandlInst.AutomatedExecutionNoIntervention),
        new Field(Fields.OrderQty, '123'),
        new Field(Fields.TransactTime, fixParser.getTimestamp()),
        new Field(Fields.OrdType, OrderTypes.Market),
        //new Field(Fields.Price, OrderTypes.Market),
        new Field(Fields.Side, Side.Buy),
        new Field(Fields.Symbol, '700.HK'),
        new Field(Fields.TimeInForce, TimeInForce.Day),
    );
    const messages = fixParser.parse(order.encode());
    console.log('sending message', messages[0].description, messages[0].messageString.replace(/\x01/g, '|'));
    fixParser.send(order);
};
