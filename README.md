# Hacker News Web Crawler

This project is a web crawler built using TypeScript, which scrapes the top 30 entries from [Hacker News](https://news.ycombinator.com)
and filters them based on specific criteria (title word count, comments, and points).
The application stores usage data in MongoDB and follows a layered architecture for maintainability and scalability.

## Table of Contents

- [Installation](#installation)
- [Running the project](#running-the-project)
- [ADR (Architectural Decision Record)](#adr)
- [Screenshots](#screenshots)

## Installation

To install and set up the project, follow the steps below.

### Prerequisites

- **Node.js** (v18 or later)
- **TypeScript** (5.6.2 or later)

### Steps

1. Clone the repository
```
git clone https://github.com/breduarm/HackerNewsWebCrawler-Node.git
cd HackerNewsWebCrawler-Node
```
2. Install dependencies
```
npm install
```

## Running the project

1. Run the `index.ts` file
```
npx ts-node src/index.ts
```
This will start the web crawler, extract news data from Hacker News, filter it based on the criteria, store the usage data in MongoDB,
and present in console the result of filtered news and stored data.

## ADR (Architectural Decision Record)

For detailed information on the architectural decisions made in this project, refer to the ADR document hosted on Notion: [Architectural Decision Record](https://www.notion.so/ADR-Web-Crawler-Design-Using-Layered-Architecture-106b4d03fb60805a92bbdc4e31a822ba?pvs=4)

## Screenshots

<img width="978" alt="Screenshot 2024-09-19 at 12 32 49 PM" src="https://github.com/user-attachments/assets/b5f6eb2e-7c10-4fb7-8ce3-51d928253513">

<img width="977" alt="Screenshot 2024-09-19 at 12 33 09 PM" src="https://github.com/user-attachments/assets/fbdd331d-2b99-487e-b3c4-d19cd030618d">

<img width="976" alt="Screenshot 2024-09-19 at 12 33 31 PM" src="https://github.com/user-attachments/assets/3223e583-096d-422d-b25c-bc7a80f641e2">

<img width="976" alt="Screenshot 2024-09-19 at 12 33 47 PM" src="https://github.com/user-attachments/assets/1deca2c7-a97d-4a63-a81e-97461ffd09df">
