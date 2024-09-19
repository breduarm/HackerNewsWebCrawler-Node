import { model, Schema } from "mongoose";

const usageDataSchema = new Schema({
    timestamp: { type: Date, default: Date.now() },
    filterApplied: { type: String, require: true },
    newsCount: { type: Number, require: true },
});

const UsageData = model("UsageData", usageDataSchema);

export default UsageData;
