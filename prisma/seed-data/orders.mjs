export function generateSampleOrders({ closedShiftId, openShiftId, tables, products }) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(8, 0, 0, 0);

  const today = new Date();
  today.setHours(8, 30, 0, 0);

  const yestStr = yesterday.toISOString().slice(0, 10).replace(/-/g, "");
  const todayStr = today.toISOString().slice(0, 10).replace(/-/g, "");

  const t1 = tables["Meja 01 (Indoor)"]?.id;
  const t2 = tables["Meja 02 (Indoor)"]?.id;
  const t7 = tables["Meja 07 (Indoor)"]?.id;
  const t9 = tables["Meja 09 (Outdoor)"]?.id;

  const pKopi = products["CF-001"];
  const pAmer = products["CF-002"];
  const pLatte = products["CF-003"];
  const pMatcha = products["NC-001"];
  const pChoco = products["NC-002"];
  const pNasgor = products["FD-001"];
  const pWagyu = products["FD-002"];
  const pFries = products["SN-001"];
  const pCroissant = products["BK-001"];

  return [
    {
      orderNumber: `TRX-${yestStr}-0001`,
      shiftId: closedShiftId,
      tableId: t1,
      orderType: "dine_in",
      paymentMethod: "cash",
      paidAmount: 50000,
      subtotal: 36000,
      tax: 3600,
      discount: 0,
      total: 39600,
      changeAmount: 10400,
      notes: "Less sugar",
      createdAt: new Date(yesterday.getTime() + 3600000),
      items: [
        { productId: pKopi.id, productName: "Kopi Susu Gula Aren", price: 18000, quantity: 2, subtotal: 36000 },
      ],
    },
    {
      orderNumber: `TRX-${yestStr}-0002`,
      shiftId: closedShiftId,
      tableId: t9,
      orderType: "dine_in",
      paymentMethod: "cash",
      paidAmount: 100000,
      subtotal: 72000,
      tax: 7200,
      discount: 0,
      total: 79200,
      changeAmount: 20800,
      notes: "Pedas mantap",
      createdAt: new Date(yesterday.getTime() + 7200000),
      items: [
        { productId: pWagyu.id, productName: "Nasi Goreng Wagyu Beef", price: 39000, quantity: 1, subtotal: 39000 },
        { productId: pFries.id, productName: "French Fries Truffle Herb", price: 18000, quantity: 1, subtotal: 18000 },
        { productId: pAmer.id, productName: "Americano Classic", price: 15000, quantity: 1, subtotal: 15000 },
      ],
    },
    {
      orderNumber: `TRX-${todayStr}-0001`,
      shiftId: openShiftId,
      tableId: t2,
      orderType: "dine_in",
      paymentMethod: "qris",
      paidAmount: 64000,
      subtotal: 64000,
      tax: 0,
      discount: 0,
      total: 64000,
      changeAmount: 0,
      notes: "QRIS BCA",
      createdAt: new Date(today.getTime() + 1800000),
      items: [
        { productId: pLatte.id, productName: "Caffe Latte Creamy", price: 22000, quantity: 1, subtotal: 22000 },
        { productId: pNasgor.id, productName: "Nasi Goreng Spesial Syntax", price: 26000, quantity: 1, subtotal: 26000 },
        { productId: pCroissant.id, productName: "French Butter Croissant", price: 16000, quantity: 1, subtotal: 16000 },
      ],
    },
    {
      orderNumber: `TRX-${todayStr}-0002`,
      shiftId: openShiftId,
      tableId: t7,
      orderType: "dine_in",
      paymentMethod: "cash",
      paidAmount: 100000,
      subtotal: 82000,
      tax: 8200,
      discount: 5000,
      total: 85200,
      changeAmount: 14800,
      notes: "Promo Opening",
      createdAt: new Date(today.getTime() + 4500000),
      items: [
        { productId: pMatcha.id, productName: "Matcha Latte Kyoto Uji", price: 24000, quantity: 1, subtotal: 24000 },
        { productId: pChoco.id, productName: "Belgian Dark Chocolate Rich", price: 22000, quantity: 1, subtotal: 22000 },
        { productId: pFries.id, productName: "French Fries Truffle Herb", price: 18000, quantity: 2, subtotal: 36000 },
      ],
    },
    {
      orderNumber: `TRX-${todayStr}-0003`,
      shiftId: openShiftId,
      tableId: null,
      orderType: "take_away",
      paymentMethod: "transfer",
      paidAmount: 50000,
      subtotal: 50000,
      tax: 0,
      discount: 0,
      total: 50000,
      changeAmount: 0,
      notes: "Take away paper bag",
      createdAt: new Date(today.getTime() + 7200000),
      items: [
        { productId: pKopi.id, productName: "Kopi Susu Gula Aren", price: 18000, quantity: 1, subtotal: 18000 },
        { productId: pCroissant.id, productName: "French Butter Croissant", price: 17000, quantity: 1, subtotal: 17000 },
        { productId: pAmer.id, productName: "Americano Hot", price: 15000, quantity: 1, subtotal: 15000 },
      ],
    },
  ];
}
