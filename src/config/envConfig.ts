const envConfig = {
    httpBaseUrl: "https://news.ycombinator.com/",
    httpTimeout: 10000, // in miliseconds
    dbUriLocal: "mongodb://localhost:27017/hackerNewsWebCrawler",
    dbUriRemote:
        "mongodb+srv://bryanearmijos:ZEBOeUPkfKunnbsv@cluster0.yrbye.mongodb.net/hackerNewsWebCrawler?retryWrites=true&w=majority&appName=Cluster0",
    maxEntries: 30,
};

export default envConfig;
