module.exports = {
  requestors: [
    {
      id: 2,
      budget: 1000,
      companyAdmin: true,
      email: 'cathat@wonolo.com',
      firstName: 'cat',
      lastName: 'hat',
      phoneNumber: '925-321-7654',
      role: 'customer_admin',
      title: 'main char',
      canSeeBudgets: true,
      password: 'hakuna',
      avatar: null
    },
    {
      id: 1,
      budget: 0,
      companyAdmin: false,
      email: 'justicek@wonolo.com',
      firstName: 'justice',
      lastName: 'koonz',
      phoneNumber: '925-321-7654',
      role: 'read_only',
      title: 'judge',
      canSeeBudgets: false,
      password: 'matata',
      avatar: null
    }
  ]
};
