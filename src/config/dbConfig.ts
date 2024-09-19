import envConfig from "./envConfig";

const mongoose = require("mongoose");

const mongooseConnection = () => {
    mongoose
        .connect(envConfig.dbUriRemote)
        .then((_: any) => {
            console.debug("Connected to the remote data base sucessfuly");
        })
        .catch((error: Error) => {
            console.error("[ERROR]: ", error);
        });
};

export default mongooseConnection;
