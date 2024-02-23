interface blogsData {
  url: string;
  name: string;
  preContent: string;
//   posts: Posts []
}

 /* interface Posts {
    userId: string;
  content: string;
  postTitle: string;
  photoImage: string;
} */


export const blogsData = [
  {
    url: "https://towardsdatascience.com/demand-forecast-a-value-driven-approach-with-5-key-insights-addc22e2e3e4",
    name: "Demand forecast — a value-driven approach with 5 key insights",
    preContent:
      "The end goal of forecast is not accuracy, but tangible value creation. Let’s explore 5 insights to maximise the value of demand forecasts",
  },
  {
    url: "https://medium.com/@beththomas003/part-1-the-resurrection-voyage-rediscovering-your-identity-8188ffd78aad",
    name: "Part 1 — The Resurrection Voyage: Rediscovering Your Identity",
    preContent:
      "Today, you shall commence on a voyage — resurrecting your curiosity for self-discovery. When you reach the end, remember it’s not really…",
  },
  {
    url: "https://medium.com/intendid/the-heartbeat-of-your-business-the-values-b941cbc8c6e5",
    name: "The heartbeat of your business — The Values",
    preContent:
      "How they create an instant, emotional and lasting report with your customers, employees and the market",
  },
  {
    url: "https://medium.com/original-philosophy/the-case-for-kindness-in-a-self-centric-world-52219e01935f",
    name: "The case for kindness in a self-centric world",
    preContent:
      "The biggest struggle in my 20s has been grappling with the question: what do I want to do with my life? “I want to be kind.”",
  },
];
