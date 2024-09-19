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
        const filterType = FilterType.FIVE_OR_LESS_WORDS;
        const newsCount = webCrawler.printNewsFilteredByTitle(filterType);

        await usageDataRepository.saveUsageData(filterType, newsCount);
        const usageDatas = await usageDataRepository.getUsageData();
        console.log(usageDatas);
    } catch (error) {
        console.error(`[Error] ${error}`);
    }
})();
