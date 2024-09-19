import mongooseConnection from "./config/dbConfig";
import NewsController from "./controllers/newsController";
import { FilterType } from "./domain/enums/filterType";

(async () => {
    try {
        await mongooseConnection();

        const newsController = new NewsController();
        await newsController.webCrawlerReady;

        await newsController.printAndSaveNewsFiltered(FilterType.NONE);
        await newsController.printAndSaveNewsFiltered(FilterType.MORE_THAN_FIVE_WORDS);
        await newsController.printAndSaveNewsFiltered(FilterType.FIVE_OR_LESS_WORDS);
        
        newsController.printUsageDataSaved();
    } catch (error) {
        console.error(`[Error] ${error}`);
    }
})();
