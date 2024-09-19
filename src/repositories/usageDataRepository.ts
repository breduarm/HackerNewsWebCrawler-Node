import UsageData from "../data/models/usageDataModel";

class UsageDataRepository {
    async saveUsageData(filterApplied: string, newsCount: number) {
        const usageData = new UsageData({ filterApplied, newsCount });
        await usageData.save();
    }

    async getUsageData(): Promise<Object[]> {
        return await UsageData.find().sort({ timestamp: -1 }); // Sort by timestamp (newest first)
    }
}

export default UsageDataRepository;
