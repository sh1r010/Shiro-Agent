const {getPageSpeedData} = require('../services/pagespeed.js')
const {analyzWithAI} = require('../services/openai.js')

async function analyzTechnicalSEO (url) {
  const data = await getPageSpeedData(url)
  console.log('2. Данные получены:', data ? '✅' : '❌');
  const analyzAI = await analyzWithAI(data)
  return analyzAI
}


module.exports = {analyzTechnicalSEO}