import express from "express";

import { authController, userController, mailController } from "../controllers";
import { authPolicy } from "../policies";

export default app => {
  /* api */
  const apiv1 = express.Router();
  const user = express.Router();
  const auth = express.Router();
  const mail = express.Router();

  /* routes to api v1 routes  */
  app.use("/api/v1", apiv1);
  apiv1.use("/auths", auth);
  apiv1.use("/users", user);
  apiv1.use("/mails", mail);

  /* auth routes */
  auth.get("/", authPolicy.authentication, authController.AutoLogin);
  auth.post("/", authPolicy.registerRule, authController.create);
  auth.post("/:username", authController.login);

  /* user routes */
  user.get("/:username", userController.get);

  /* mail routes */
  mail.get("", mailController.getMailList);
};
