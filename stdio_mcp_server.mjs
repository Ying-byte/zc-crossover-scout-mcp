#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "crossover",
  boardId: "crossover-official",
  domain: "crossover.com",
  npmName: "zc-crossover-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
