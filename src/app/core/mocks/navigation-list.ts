export const navigation = [
    {
        label: 'Dashboard',
        link: '/dashboard',
        icon: 'dashboard'
    },
    {
        label: 'E-Commerce',
        icon: 'shopping_cart',
        items: [
            {
                label: 'Products',
                link: '/product-list',
            },
            {
                label: 'Add Product',
                link: 'product-add',
            },
            {
                label: 'Product Details',
                link: '/product-details',
            },
        ]
    },
    {
        label: 'User Management',
        icon: 'group',
        items: [
            {
                label: 'User List',
                link: '/user-list',
            }
        ]
    }
]