import envConfig from "./envConfig";

const mongoose = require("mongoose");

const mongooseConnection = async (): Promise<any> => {
    try {
        const connection = await mongoose.connect(envConfig.dbUriRemote);
        console.debug("[DEBUG]: Connected to the remote database successfully");
        return connection;
    } catch (error) {
        console.error("[ERROR]:", error);
    }
};

export default mongooseConnection;
