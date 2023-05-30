import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import KPI from "./models/KPI.js";
import Product from "../models/Product.js";
import { kpis } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);

/* MONGOOSE */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: false,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONLY ONCE OR AS NEEDED*/
    // await mongoose.connection.db.dropDatabase(); // for development, don't do it in the prodcution
    // KPI.insertMany(kpis);
  })
  .catch((error) => console.log(`${error} - did not connect`));
