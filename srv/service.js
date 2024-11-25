// In the service implementation
const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
  const { Buyers } = this.entities;

  this.on('getLastID', async () => {
    const lastBuyer = await SELECT.from(Buyers).orderBy({ ID: 'desc' }).limit(1);
    return lastBuyer[0] ? lastBuyer[0].ID : null;
  });
});