import UsageData from "../data/models/usageDataModel";

class UsageDataRepository {
    async saveUsageData(filterApplied: string, newsCount: number) {
        const usageData = new UsageData({ filterApplied, newsCount });
        await usageData.save();
    }
}

export default UsageDataRepository;
