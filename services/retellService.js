const axios = require('axios');

exports.createRetellAgent = async ({ agent_name, instructions, language }) => {
  const url = 'https://api.retellai.com/agents';
  const apiKey = process.env.RETELL_API_KEY;

  const payload = {
    display_name: agent_name,
    prompt: instructions,
    language_code: language
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
    console.error('Error creating Retell agent:', error.message);
    throw new Error('Failed to create Retell agent');
  }
};

module.exports = { createRetellAgent };
