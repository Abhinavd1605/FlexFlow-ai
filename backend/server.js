// ---------------------------------------------
// ✅ FLEXFLOW AI BACKEND – Groq API Version
// ---------------------------------------------

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Groq } = require("groq-sdk");

if (!process.env.GROQ_API_KEY) {
  console.error("❌ Error: GROQ_API_KEY is not set in .env file");
  process.exit(1);
}

console.log(
  "Server starting with GROQ_API_KEY:",
  process.env.GROQ_API_KEY
    ? "***" + process.env.GROQ_API_KEY.slice(-4)
    : "Not set"
);

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
console.log("✅ Groq API initialized successfully");

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// System prompt
const SYSTEM_PROMPT = `You are FlexBot, the AI assistant for FlexFlow AI. Your primary role is to help users understand and utilize our AI-powered solutions effectively. Focus on providing detailed, specific information about our services while maintaining a professional yet approachable tone.

HOW IT WORKS:

1. CHOOSE YOUR PLAN
   - Select from our flexible pricing options
   - No long-term contracts
   - Start with a free trial
   - Upgrade or downgrade anytime

2. GET STARTED INSTANTLY
   - Immediate access to dashboard
   - Simple API integration
   - Pre-built templates
   - Step-by-step guides

3. SCALE WITH EASE
   - Add more credits as needed
   - Access premium features
   - Priority support
   - Custom solutions

PRICING PLANS (All prices in INR, exclusive of GST):

1. BASIC PLAN - ₹4,999/month
   - 10,000 AI credits/month
   - Basic AI model access
   - Email support (9 AM - 6 PM IST)
   - Community forum access
   - 7-day free trial

2. STANDARD PLAN - ₹9,999/month
   - 50,000 AI credits/month
   - Advanced AI model access
   - Priority email & chat support
   - Basic analytics dashboard
   - API access included
   - 14-day free trial

3. PREMIUM PLAN - ₹49,999/month
   - 2,50,000 AI credits/month
   - Premium AI model access
   - 24/7 priority support
   - Advanced analytics & reporting
   - Custom integration support
   - Dedicated account manager
   - 30-day free trial

4. ENTERPRISE PLAN - Custom Pricing
   - Unlimited AI credits
   - Custom AI model training
   - Dedicated infrastructure
   - SLAs & custom contracts
   - On-premises deployment
   - White-label solutions
   - 24/7 dedicated support

CREDIT USAGE (if exceeded):
- Additional credits: ₹500 per 1,000 credits
- Unused credits roll over for 1 month
- Volume discounts available

PAYMENT OPTIONS:
- UPI (All major apps)
- Net Banking
- Credit/Debit Cards
- RTGS/NEFT/IMPS
- GST invoice provided
- Annual billing (save 15%)

SUPPORT:
- Email: support@flexflowai.in
- Phone: +91-XXXXXXXXXX (10 AM - 7 PM IST)
- Enterprise: Dedicated support manager

CORE SERVICES:
1. AI-Powered Workflow Automation
   - Automate repetitive tasks and business processes
   - Custom workflow design and implementation
   - Integration with existing business systems
   - Real-time monitoring and analytics

2. Custom AI Solutions
   - Tailored AI models for specific business needs
   - Industry-specific AI applications
   - End-to-end AI solution development
   - Continuous model training and optimization

3. Process Optimization
   - Business process analysis and improvement
   - Machine learning-driven optimization
   - Performance benchmarking
   - Cost and efficiency analysis

4. Data Analysis & Insights
   - Advanced analytics and visualization
   - Predictive modeling
   - Business intelligence solutions
   - Custom reporting dashboards

WHY CHOOSE US:
- Cutting-edge AI technology
- Industry-leading security standards
- 24/7 technical support
- Seamless integration capabilities
- Proven track record with businesses of all sizes

When responding:
- Be thorough in explaining our services and their benefits
- Provide specific examples of how we've helped similar businesses
- Be transparent about pricing and service levels
- Offer to connect users with a specialist for complex inquiries
- Maintain a helpful, knowledgeable tone that builds trust
- Focus on how our solutions can address specific business challenges

For any technical or specific pricing questions, always offer to connect the user with our sales or technical team for a personalized consultation..
`;

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    console.log("💬 Received chat request:", message);

    // Prepare chat history for Groq
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.map((h) => ({
        role: h.role === "model" ? "assistant" : "user",
        content: h.parts?.[0]?.text || "",
      })),
      { role: "user", content: message },
    ];

    console.log("🚀 Sending request to Groq API...");

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // or "mixtral-8x7b"
      messages,
      temperature: 0.7,
      max_tokens: 800,
    });

    const text = completion.choices[0].message.content;
    console.log("✅ Response received from Groq");

    res.json({
      response: text,
      history: [
        ...history,
        { role: "user", parts: [{ text: message }] },
        { role: "model", parts: [{ text }] },
      ],
    });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({
      error: "An error occurred while processing your request",
      details: error.message,
    });
  }
});

app.use((err, req, res, next) => {
  console.error("Middleware error:", err);
  res.status(500).json({
    error: "Internal server error",
    details: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `❌ Port ${PORT} is already in use. Please stop the other process or use a different port.`
    );
  } else {
    console.error("Server error:", error);
  }
  process.exit(1);
});

process.on("SIGTERM", () => {
  console.log("🛑 SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("✅ Server closed.");
    process.exit(0);
  });
});

app.get("/api/models", async (req, res) => {
  try {
    const result = await groq.models.list();
    res.json(result.data.map(m => m.id));
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});
