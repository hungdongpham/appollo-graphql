module.exports = {
  messages: [{
    id: 1,
    sender_id: 1,
    receiver_id: 2,
    body: 'Rob Baldwin is deaf',
    job_id: 1,
    createdAt: new Date(),
    readAt: null,
  }, {
    id: 2,
    sender_id: 1,
    receiver_id: 2,
    body: 'Rob Baldwin is deaf',
    job_id: 1,
    createdAt: new Date(),
    readAt: null,
  }, {
    id: 3,
    sender_id: 1,
    receiver_id: 2,
    body: 'Rob Baldwin is deafest',
    job_id: 1,
    createdAt: new Date(),
    readAt: null,
  },
  {
    sender_id: 1,
    receiver_id: 1,
    job_id: 22,
    body: 'ignore this message, it is used to prevent required fields'
  }],
  senders: [{
    id: 1, // MUST MATCH USER_ID
    user_id: 1
  }],
  receivers: [{
    id: 2, // MUST MATCH USER_ID
    user_id: 2
  }]
};
