import News from "../types/news";

class HackerNewsWebCrawler {
    private news: News[];

    constructor(news: News[]) {
        this.news = news;
    }

    printNews() {
        console.info("============ News extrated data ============");
        console.info(this.news);
    }
}

export default HackerNewsWebCrawler;
