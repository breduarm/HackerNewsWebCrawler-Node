import envConfig from "../config/envConfig";
import HackerNewsService from "../services/hackerNewsService";
import News from "../types/news";
import * as cheerio from "cheerio";

class HackerNewsRepository {
    private service = new HackerNewsService();

    async extractNews(): Promise<News[]> {
        const html = await this.fetchHtml();
        const $ = cheerio.load(html);
        const news: News[] = [];

        const athingList =
            $(".athing").length >= 30
                ? $(".athing").slice(0, envConfig.maxEntries)
                : $(".athing");

        athingList.each((element) => {
            const rank: number = Number(
                $(element).find(".rank").text().replace(".", "")
            );
            const title: string = $(element).find(".titleline").text();
            const subtextElement = $(element).next().find(".subtext");
            const points: number = Number(
                $(subtextElement).find(".score").text().replace(" points", "")
            );
            const lastTagAText: string = $(subtextElement)
                .find("a")
                .last()
                .text();
            const commentsCount: number = lastTagAText.includes("comments")
                ? Number(lastTagAText.replace("comments", "").trim())
                : 0;

            news.push({ rank, title, points, commentsCount });
        });

        return news;
    }

    private async fetchHtml(): Promise<string> {
        const response = await this.service.fetchHtml();
        return response.data;
    }
}

export default HackerNewsRepository;
