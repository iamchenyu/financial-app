import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// Helmet helps secure Express apps by setting HTTP response headers
app.use(helmet());
// this middleware sets the `Cross-Origin-Resource-Policy` header to `cross-origin`
// which allows resources from the server to be accessed by any domain
// CORP (Cross-Origin Resource Policy)
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// cors allows our server and client to talk to each other
// it allows HTTP requests from different origins
// CORS (Cross-Origin Resource Sharing)
app.use(cors());
// Morgan helps with monitoring server activity, debugging, and performance analysis
// by recording requests received by a server
app.use(morgan("common"));

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);
