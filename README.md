
Unified Agent Creation API - Retell.ai & VAPI.ai

This project is a unified API wrapper built to create AI agents using Retell.ai and VAPI.ai platforms through a single API endpoint. It simplifies agent creation by standardizing the input parameters for both services.

Tech Stack

Backend Framework: Node.js (Express.js)

HTTP Client: Axios

Environment Variables: dotenv


Features

Unified API to create agents either on Retell.ai or VAPI.ai.

Standardized and clean request structure for users.

Easy to extend for additional platforms in the future.


Setup Instructions

1. Clone the Repository

git clone https://github.com/MadhuTech2024/backend-agent-api-wrapper.git
cd your-repo-name

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a .env file in the root directory and add:

VAPI_API_KEY=your_vapi_api_key
RETELL_API_KEY=your_retell_api_key

4. Run the Server

npm start

The server will start on http://localhost:5000.


API Usage

Endpoint

POST /create-agent

Request Body Example

{
  "platform": "vapi",   // or "retell"
  "name": "Agent Name",
  "description": "Optional description",
  "otherParams": {
    "key1": "value1",
    "key2": "value2"
  }
}

Headers

Content-Type: application/json

Authorization: Bearer token (handled internally)


Platform Values

"vapi" → Create agent on VAPI.ai

"retell" → Create agent on Retell.ai


Project Structure
/
├── controllers/
│   └── agentController.js
├── routes/
│   └── agentRoutes.js
├── services/
│   ├── retellService.js
│   └── vapiService.js
├── .env
├── app.js
├── package.json
├── README.md

Future Enhancements

Add platform error handling and fallback mechanisms.

Integrate additional AI agent services.

Add unit and integration testing.


License

This project is for learning, demonstration, and assignment purposes only.

Thank you!
