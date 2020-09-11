module.exports = {
    usersSeed: [
        {
            username: 'superadmin',
            email: 'superadmin@groom.com',
            password: '123456',
            profile: {
                firstName: 'Superadmin',
                lastName: 'Account',
            },
            role: 'super-admin',
        },
        {
            username: 'admin',
            email: 'admin@groom.com',
            password: '123456',
            profile: {
                firstName: 'Admin',
                lastName: 'Account',
            },
            role: 'admin',
        },
        {
            username: 'contributor',
            email: 'contributor@groom.com',
            password: '123456',
            profile: {
                firstName: 'Contributor',
                lastName: 'Account',
            },
            role: 'contributor',
        },
        {
            username: 'shopowner',
            email: 'shopowner@groom.com',
            password: '123456',
            profile: {
                firstName: 'Shopowner',
                lastName: 'Account',
            },
            role: 'shop-owner',
        },
        {
            username: 'shopmanager',
            email: 'shopmanager@groom.com',
            password: '123456',
            profile: {
                firstName: 'Shopmanager',
                lastName: 'Account',
            },
            role: 'shop-manager',
        },
        {
            username: 'serviceprovider',
            email: 'serviceprovider@groom.com',
            password: '123456',
            profile: {
                firstName: 'Serviceprovider',
                lastName: 'Account',
            },
            role: 'service-provider',
        },
        {
            username: 'customer',
            email: 'customer@groom.com',
            password: '123456',
            profile: {
                firstName: 'Customer',
                lastName: 'Account',
            },
            role: 'customer',
        },
    ]
}