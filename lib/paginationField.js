import { WEAPON_PAGINATION_QUERY } from '../queries/PaginationQueries';

export default function paginationField() {
  // apollo will ask read for items.
  // It will return them from the cache if they exist or
  // it will return false & trigger a network request
  return {
    keyArgs: false, // toggle for apollo to let this function handle things
    read(existing = [], { args, cache }) {
      const { skip, first } = args;

      // read the number of items on the page from the cache
      const data = cache.readQuery({ query: WEAPON_PAGINATION_QUERY });
      const count = data?._allWeaponsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check for existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);

      // if there are items & there are not enough for the requested amount & it is the last page, go to the network
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      // there are no items, request from network
      if (items.length !== first) {
        return false;
      }

      // if there are items in cache, return them
      if (items.length) {
        return items;
      }

      // fallback to network
      return false;
    },

    // apollo will run this when the network request returns with items
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      // return the merged items from the cache
      return merged;
    },
  };
}
