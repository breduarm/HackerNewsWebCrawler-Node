import News from "../types/news";
import { FilterType } from "./enums/filterType";

class HackerNewsWebCrawler {
    private news: News[];

    constructor(news: News[]) {
        this.news = news;
    }

    printNewsFilteredByTitle(filterType: FilterType): number {
        console.info("==========================================================================");
        console.info(`============ News filtered data | Filter type : ${filterType} ============`);
        console.info("==========================================================================");
        let filteredNews: News[];

        if (filterType == FilterType.NONE) {
            filteredNews = this.news;
        } else if (filterType == FilterType.MORE_THAN_FIVE_WORDS) {
            filteredNews = this.news
                .filter((n) => this.countWords(n.title) > 5)
                .sort((a, b) => b.commentsCount - a.commentsCount);
        } else if (filterType == FilterType.FIVE_OR_LESS_WORDS) {
            filteredNews = this.news
                .filter((n) => this.countWords(n.title) <= 5)
                .sort((a, b) => b.points - a.points);
        } else {
            throw new Error(`Invalid filter type: ${filterType}`);
        }

        console.info(filteredNews);
        return filteredNews.length;
    }

    private countWords(statement: string) {
        const statementFormatted = statement.replace(/[^a-zA-Z\s]/g, "");
        return statementFormatted.split(/\s+/).filter((word) => word.length > 0)
            .length;
    }
}

export default HackerNewsWebCrawler;
