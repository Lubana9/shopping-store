export const routes = {
  items: {
    mask: "/store",
    mask1: "/pro",
    create: (item: string): string => `/store/${item}`,
  },
};
