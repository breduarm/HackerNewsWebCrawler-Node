import HackerNewsWebCrawler from "./domain/webCrawler";
import HackerNewsRepository from "./repositories/hackerNewsRepository";

(async () => {
    try {
        const repository = new HackerNewsRepository();
        const news = await repository.extractNews();
        const webCrawler = new HackerNewsWebCrawler(news);

        webCrawler.printNews();
    } catch (error) {
        console.error(`[Error] ${error}`);
    }
})();
