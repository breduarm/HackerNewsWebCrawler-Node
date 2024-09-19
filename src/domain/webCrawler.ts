import News from "../types/news";

class HackerNewsWebCrawler {
    news: News[];

    constructor(news: News[]) {
        this.news = news;
    }

    printNews() {
        console.info("====== News extrated ======")
        console.info(this.news);
    }
}

export default HackerNewsWebCrawler;
