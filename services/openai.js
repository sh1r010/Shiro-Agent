const axios = require("axios");

async function analyzWithAI(seoData) {
  const deepseekResponse = await axios.post(
    "https://api.artemox.com/v1/chat/completions",
    {
      model: "deepseek-chat",
      messages: [
        {
          role: "user",
          content: `Проанализируй эти данные: ${JSON.stringify(seoData)}`,
        },
      ],
      stream: false,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );


  const technicalAnalysis = deepseekResponse.data.choices[0].message.content

  const gigachatResponse = await axios.post(
    "https://gigachat.devices.sberbank.ru/api/v1/chat/completions",
    {
      model: "GigaChat",
      messages: [
        {
          role: "system",
          content: `Ты - редактор. Преобразуй технический SEO-анализ в структурированный отчет:

🛠️ ТЕХНИЧЕСКАЯ ЧАСТЬ:
• Core Web Vitals (LCP, FCP, CLS, TBT)
• 3 главные технические проблемы
• Конкретные файлы и размеры

💼 ДЛЯ ВЛАДЕЛЬЦА БИЗНЕСА:
🔴 ЧТО МЕШАЕТ КЛИЕНТАМ:
1. [Проблема простыми словами]
2. [Проблема простыми словами] 
3. [Проблема простыми словами]

🎯 ЧТО ДЕЛАТЬ:
1. [Конкретное действие]
2. [Конкретное действие]
3. [Конкретное действие]

Строго следуй формату!`,
        },
        {
          role: "user",
          content: `Отформатируй этот технический анализ: ${technicalAnalysis}`,
        },
      ],
      temperature: 0.1,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GIGACHAT_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return gigachatResponse.data.choices[0].message.content; // ← исправил на точку с запятой
}

module.exports = { analyzWithAI };
