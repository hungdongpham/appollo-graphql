
const paymentMethods = [
  {
    cardNumber: '4111 1111 1111 1111',
    securityCode: '222',
    billingFirst: 'Sith',
    billingLast: 'Lord',
    billingAddress: '25 Noble Fir Place',
    billingCity: 'Woahhhnolo Land',
    billingState: 'CA',
    billingZip: '94555',
    userDeleted: false,
    suspend: false,
    cardType: 'visa',
    type: 'StripeSubscription',
    expDate: '12 / 2023',
    expirationMonth: '12',
    expirationYear: '2023',
    defaultPayment: true,
    id: 1,
    lastFourDigits: '1111',
    currentUser_id: 1,
  },
  {
    cardNumber: '5675 6756 7567 5675',
    securityCode: '333',
    billingFirst: 'Wookie',
    billingLast: 'YouAre',
    billingAddress: 'Get Billed',
    billingCity: 'You Will',
    billingState: 'CA',
    billingZip: '92510',
    userDeleted: false,
    suspend: true,
    cardType: 'discover',
    type: 'StripeSubscription',
    expDate: '1 / 2018',
    expirationMonth: '02',
    expirationYear: '2020',
    defaultPayment: false,
    id: 3,
    lastFourDigits: null,
    currentUser_id: 1
  },
  {
    userDeleted: false,
    suspend: false,
    cardType: '',
    type: 'InvoiceMethod',
    expDate: '',
    defaultPayment: false,
    id: 4,
    lastFourDigits: null,
    currentUser_id: 1
  },
  {
    userDeleted: false,
    suspend: false,
    cardType: 'Chase bank',
    type: 'AchSubscription',
    expDate: '',
    defaultPayment: false,
    id: 5,
    lastFourDigits: '4366',
    currentUser_id: 1
  },
  {
    userDeleted: false,
    suspend: false,
    cardType: 'Chase bank',
    type: 'AchSubscription',
    expDate: '',
    defaultPayment: false,
    id: 55,
    lastFourDigits: '4355',
    currentUser_id: 1
  },
  {
    userDeleted: false,
    suspend: false,
    cardType: 'Chase bank',
    type: 'AchSubscription',
    expDate: '',
    defaultPayment: false,
    id: 54,
    lastFourDigits: '4312',
    currentUser_id: 1
  },
  {
    userDeleted: false,
    suspend: false,
    cardType: 'Chase bank',
    type: 'AchSubscription',
    expDate: '',
    defaultPayment: false,
    id: 53,
    lastFourDigits: '3312',
    currentUser_id: 1
  },
  {
    userDeleted: false,
    suspend: false,
    cardType: 'Chase bank',
    type: 'AchSubscription',
    expDate: '',
    defaultPayment: false,
    id: 52,
    lastFourDigits: '2412',
    currentUser_id: 1
  },
  {
    stripeToken: 'fakeStripeToken',
    accountId: 'fakePlaidAccountId',
    publicToken: 'fakePlaidPublicToken'
  }
];

module.exports = {
  paymentMethods
};
