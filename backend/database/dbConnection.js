import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODATABASE_URI, {
      dbName: "JOB_SEEKING",
    })
    .then(() => {
      console.log("Database successfully connected");
    })

    .catch((err) => {
      console.log(`some any error not connected to database : ${err}`);
    });
};
