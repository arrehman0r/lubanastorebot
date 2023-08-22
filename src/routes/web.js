import express from "express";
let router = express.Router();
import chatbotController from "../controllers/chatbotController";
let initWebRoutes = (app) => {
  router.get("/", chatbotController.test);
  router.get("/webhook", chatbotController.getWebhook);
  router.post("/webhook", chatbotController.postWebhook);

  return app.use("/", router);
};

module.exports = initWebRoutes;
