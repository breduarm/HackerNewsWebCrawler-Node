import mongooseConnection from "./config/dbConfig";
import { FilterType } from "./domain/enums/filterType";
import HackerNewsWebCrawler from "./domain/webCrawler";
import HackerNewsRepository from "./repositories/hackerNewsRepository";
import UsageDataRepository from "./repositories/usageDataRepository";

(async () => {
    try {
        mongooseConnection();

        const usageDataRepository = new UsageDataRepository();
        const hackerNewsrepository = new HackerNewsRepository();
        const news = await hackerNewsrepository.extractNews();
        const webCrawler = new HackerNewsWebCrawler(news);

        webCrawler.printNews();
        const filterType = FilterType.NONE;
        const newsCount = webCrawler.printNewsFiltered(filterType);

        await usageDataRepository.saveUsageData(filterType, newsCount);
        console.log("\n\n ====== Data saved !!");
    } catch (error) {
        console.error(`[Error] ${error}`);
    }
})();
