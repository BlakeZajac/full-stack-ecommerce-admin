import prismadb from "@/lib/prismadb";

export const getTotalRevenue = async (storeId: string) => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },

    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  // Iterate over all orders, then all order items, and then combine the prices of all
  const totalRevenue = paidOrders.reduce((total, order) => {
    const orderTotal = order.orderItems.reduce((orderSum, item) => {
      return orderSum + item.product.price.toNumber();
    }, 0);

    return total + orderTotal;
  }, 0);

  return totalRevenue;
};
