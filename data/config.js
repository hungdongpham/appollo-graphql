const customers = require('./customers');
const requestors = require('./requestors');
const currentUser = require('./currentUser');
const paymentMethods = require('./paymentMethods');
const communicationPreference = require('./communicationPreference');
const companies = require('./companies');
const paymentSubscriptions = require('./paymentSubscriptions');
const jobTemplates = require('./jobTemplates');
const teams = require('./teams');
const users = require('./users');
const teamMembers = require('./teamMembers');
const wonoloers = require('./wonoloers');
const inboxJobs = require('./inboxJobs');
const jobs = require('./jobs');
const jobRequests = require('./jobRequests');
const messages = require('./messages');
const workers = require('./workers');

module.exports = {
  ...teams,
  ...teamMembers,
  ...customers,
  ...requestors,
  ...currentUser,
  ...paymentMethods,
  ...jobTemplates,
  ...communicationPreference,
  ...companies,
  ...paymentSubscriptions,
  ...users,
  ...wonoloers,
  ...inboxJobs,
  ...jobs,
  ...jobRequests,
  ...messages,
  ...workers
};
