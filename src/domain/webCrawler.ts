import News from "../types/news";
import { FilterType } from "./enums/filterType";

class HackerNewsWebCrawler {
    private news: News[];

    constructor(news: News[]) {
        this.news = news;
    }

    /**
     * Filters the news based on the provided filter type and prints the filtered news.
     * @param filterType - The type of filter to apply.
     * @returns the number of filtered news entries.
     */
    printNewsFilteredByTitle(filterType: FilterType): number {
        console.info("==========================================================================");
        console.info(`============ News filtered data | Filter type : ${filterType} ============`);
        console.info("==========================================================================");
        let filteredNews: News[];

        // Apply different filters based on the filter type
        if (filterType == FilterType.NONE) {
            // No filtering, return all news
            filteredNews = this.news;
        } else if (filterType == FilterType.MORE_THAN_FIVE_WORDS) {
            // Filter news with titles containing more than 5 words and sort by comment count (descending)
            filteredNews = this.news
                .filter((n) => this.countWords(n.title) > 5)
                .sort((a, b) => b.commentsCount - a.commentsCount);
        } else if (filterType == FilterType.FIVE_OR_LESS_WORDS) {
            // Filter news with titles containing 5 or fewer words and sort by points (descending)
            filteredNews = this.news
                .filter((n) => this.countWords(n.title) <= 5)
                .sort((a, b) => b.points - a.points);
        } else {
            throw new Error(`Invalid filter type: ${filterType}`);
        }

        console.info(filteredNews);
        return filteredNews.length;
    }

    /**
     * Helper method to count the number of words in a given statement.
     * Non-alphabetic characters are removed and only words with letters are counted.
     * @param statement - The string whose words will be counted.
     * @returns The number of words in the statement
     */
    private countWords(statement: string) {
        const statementFormatted = statement.replace(/[^a-zA-Z\s]/g, "");
        return statementFormatted.split(/\s+/).filter((word) => word.length > 0)
            .length;
    }
}

export default HackerNewsWebCrawler;
