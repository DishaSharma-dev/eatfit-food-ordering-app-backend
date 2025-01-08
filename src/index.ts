import express from "express";
import cors from "cors";
import "dotenv/config";
import moongoose from "mongoose";
import myUserRoute from "./routes/myUserRoute";
import { Request, Response } from "express";

moongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("Connected to MongoDB");
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
    res.send({message: "health OK!"})
})

app.use("/api/my/user", myUserRoute)

app.listen(7000, () => {
    console.log("Server is running on port 7000");
})