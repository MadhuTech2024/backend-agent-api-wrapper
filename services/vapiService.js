const axios = require('axios');

exports.createVapiAgent = async ({ agent_name, instructions, language }) => {
  const url = 'https://api.vapi.ai/assistants';
  const apiKey = process.env.VAPI_API_KEY;

  const payload = {
    name: agent_name,
    instructions: instructions,
    language: language
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error creating VAPI agent:', error.message);
    throw new Error('Failed to create VAPI agent');
  }
};

module.exports = { createVapiAgent };
