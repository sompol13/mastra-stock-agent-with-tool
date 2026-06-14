import { Agent } from '@mastra/core/agent'
import { stockPrices } from '../tools/stockPrices'

export const stockAgent = new Agent({
  id: 'stock-agent',
  name: 'Stock Agent',
  instructions:
    'You are a helpful assistant that provides current stock prices. When asked about a stock, use the stock price tool to fetch the stock price.',
  model: 'openai/gpt-5.5',
  tools: {
    stockPrices,
  },
})
