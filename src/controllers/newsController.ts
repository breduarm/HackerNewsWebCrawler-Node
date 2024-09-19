import { FilterType } from "../domain/enums/filterType";
import HackerNewsWebCrawler from "../domain/webCrawler";
import HackerNewsRepository from "../repositories/hackerNewsRepository";
import UsageDataRepository from "../repositories/usageDataRepository";

/**
 * The NewsController class manages the flow of news data and interaction with the web crawler.
 * It initializes the HackerNewsWebCrawler by fetching news from the repository and allows
 * for printing filtered news and saving usage data. Additionally, it provides functionality
 * to print previously saved usage data.
 */
class NewsController {
    webCrawlerReady: Promise<void>;
    private webCrawler: HackerNewsWebCrawler = new HackerNewsWebCrawler([]);
    private usageDataRepository = new UsageDataRepository();

    constructor() {
        this.webCrawlerReady = this.init();
    }

    private async init() {
        const hackerNewsrepository = new HackerNewsRepository();
        const news = await hackerNewsrepository.extractNews();
        this.webCrawler = new HackerNewsWebCrawler(news);
    }

    async printAndSaveNewsFiltered(filterType: FilterType) {
        const newsCount = this.webCrawler.printNewsFilteredByTitle(filterType);
        await this.usageDataRepository.saveUsageData(filterType, newsCount);
    }

    async printUsageDataSaved() {
        const usageDatas = await this.usageDataRepository.getUsageData();
        console.info("==========================================================================");
        console.info(`=============================== Usage data ===============================`);
        console.info("==========================================================================");
        console.info(usageDatas);
    }
}

export default NewsController;
