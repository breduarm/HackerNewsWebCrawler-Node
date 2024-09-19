import { FilterType } from "../domain/enums/filterType";
import HackerNewsWebCrawler from "../domain/webCrawler";
import HackerNewsRepository from "../repositories/hackerNewsRepository";
import UsageDataRepository from "../repositories/usageDataRepository";

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
