const { createVapiAgent } = require('../services/vapiService');
const { createRetellAgent } = require('../services/retellService');

const createAgent = async (req, res) => {
  const { platform, ...agentData } = req.body;

  try {
    let result;
    if (platform === 'vapi') {
      result = await createVapiAgent(agentData);
    } else if (platform === 'retell') {
      result = await createRetellAgent(agentData);
    } else {
      return res.status(400).json({ message: 'Invalid platform selected.' });
    }

    // Success response with detailed message
    res.status(200).json({
      message: `Agent created successfully on ${platform}`,
      data: result,
    });
  } catch (error) {
    console.error(`Error creating agent on ${platform}:`, error);
    res.status(500).json({
      message: `Failed to create agent on ${platform}`,
      error: error.message,
    });
  }
};

module.exports = { createAgent };
