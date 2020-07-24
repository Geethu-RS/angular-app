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
                link: '/products',
            },
            {
                label: 'Add Product',
                link: '/products/add',
            },
            {
                label: 'Product Details',
                link: '/products/details',
            },
        ]
    },
    {
        label: 'User Management',
        icon: 'group',
        items: [
            {
                label: 'User List',
                link: '/users',
            }
        ]
    }
]