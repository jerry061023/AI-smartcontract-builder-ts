import express from "express";
import cors from "cors";

const app = express();

import dbConnect from './dbConnect'
import routers from './contract/routes'
import workflowContoller from './contract/controllers/workflow'

app.use(cors({ 'origin': '*' }));
app.use(express.json());

const PORT = 9000

const main = async () => {
    try {
        // Initialize any necessary services here (like database connection)
        dbConnect().then(() => {
            console.log("Connection successful");
        }).catch((err: any) => {
            console.error("Connection failed:", err);
        });

        // init
        await workflowContoller.initConfig()
        app.use("/api", routers);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error: any) {
        console.log(error);
    }
};

main();