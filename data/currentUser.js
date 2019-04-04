module.exports = {
  currentUser: [
    {
      id: 1,
      customerAdmin: true,
      avatarUrl: 'https://picsum.photos/100/100', // "lorem picsum" random picture URL, details at https://picsum.photos/
      name: 'User Name',
      title: 'User Title',
      phone: '4058675309',
      email: 'williamjilliams@jilliamswilliams.com',
      companyAdmin: true,
      customers_id: 1,
      phoneVerifiedAt: '',
      company: {
        name: 'Wonolo',
        useAutomatedTextMessages: true,
        useAutomatedEmployerEmails: true
      },
      companies: [1, 3]
    }
  ]
};
