import News from "../types/news";
import { FilterType } from "./enums/filterType";

class HackerNewsWebCrawler {
    private news: News[];

    constructor(news: News[]) {
        this.news = news;
    }

    printNews() {
        console.info("============ News extrated data ============");
        console.info(this.news);
    }

    printNewsFiltered(filterType: FilterType): number {
        console.info("============ News filtered data ============");
        let filteredNews: News[];

        if (filterType == FilterType.NONE) {
            filteredNews = this.news;
        } else {
            throw new Error(`Invalid filter type: ${filterType}`);
        }

        console.info(filteredNews);
        return filteredNews.length;
    }
}

export default HackerNewsWebCrawler;
