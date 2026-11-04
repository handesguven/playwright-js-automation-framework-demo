export const users = {
    standard: {
        username: 'standard_user',
        password: 'secret_sauce'
    }
};

export const products = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt'
];

export const information= {firstName : 'Hande',lastName : 'Guven', postalCode :'90036'};


export const negativeCheckoutData = [
    {
        scenario: 'Empty First Name',
        firstName: '',
        lastName: 'Guven',
        postalCode: '90036',
        expectedError: 'Error: First Name is required'
    },
    {
        scenario: 'Empty Last Name',
        firstName: 'Hande',
        lastName: '',
        postalCode: '90036',
        expectedError: 'Error: Last Name is required'
    },
    {
        scenario: 'Empty Postal Code',
        firstName: 'Hande',
        lastName: 'Guven',
        postalCode: '',
        expectedError: 'Error: Postal Code is required'
    }
];
