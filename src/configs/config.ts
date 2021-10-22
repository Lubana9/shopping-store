export const routes = {
  items: {
    mask: "/store",
    create: (item: string): string => `/store/${item}`,
  },
};
