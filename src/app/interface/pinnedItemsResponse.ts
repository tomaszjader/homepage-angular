import { Repository } from "./repository";
export interface PinnedItemsResponse {
    data: {
      user: {
        pinnedItems: {
          nodes: Repository[];
        };
      };
    };
  }