
export const dataSource = [

	{ id: 'product_01', name: 'Product 01', createdAt: new Date(), price: 1000 },
	{ id: 'product_02', name: 'Product 02', createdAt: new Date(), price: 1000 },
	{ id: 'product_03', name: 'Product 03', createdAt: new Date(), price: 1000 },

	{ id: 'category_01', name: 'Category 01', category: 'category' },
	{ id: 'product_01.01', name: 'Product 01.01', createdAt: new Date(), parent: 'category_01', price: 1000 },
	{ id: 'product_01.02', name: 'Product 01.02', createdAt: new Date(), parent: 'category_01', price: 1000 },
	{ id: 'product_01.03', name: 'Product 01.03', createdAt: new Date(), parent: 'category_01', price: 1000 },
	{ id: 'product_01.04', name: 'Product 01.04', createdAt: new Date(), parent: 'category_01', price: 1000 },

	{ id: 'category_02', name: 'Category 02', category: 'category' },
	{ id: 'product_02.01', name: 'Product 02.01', createdAt: new Date(), parent: 'category_02', price: 1000 },
	{ id: 'product_02.02', name: 'Product 02.02', createdAt: new Date(), parent: 'category_02', price: 1000 },
	{ id: 'product_02.03', name: 'Product 02.03', createdAt: new Date(), parent: 'category_02', price: 1000 },
	{ id: 'product_02.04', name: 'Product 02.04', createdAt: new Date(), parent: 'category_02', price: 1000 },
]