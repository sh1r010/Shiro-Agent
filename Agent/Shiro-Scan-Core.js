const {getPageSpeedData} = require('../services/pagespeed.js')

async function analyzTechnicalSEO (url) {
  const data = await getPageSpeedData(url)
  return data
}

module.exports = {analyzTechnicalSEO}