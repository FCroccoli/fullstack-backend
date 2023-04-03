import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandler } from "./error/errors";
import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";
import contactRoutes from "./routes/contacts.routes";

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/login", sessionRoutes);
app.use("/contact", contactRoutes);

app.use(errorHandler);

export default app;
