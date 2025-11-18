const axios = require("axios");

async function getPageSpeedData(url) { 
  const data = await axios.get("https://www.googleapis.com/pagespeedonline/v5/runPagespeed", {
    params: {
      url: url,
      key: process?.env?.GOOGLE_API_KEY,
    }});

return data.data
}

module.exports = { getPageSpeedData };