interface AuthConfiguration {
    clientID: string,
    domain: string,
    callbackURL: string
}

export const myConfig: AuthConfiguration = {
    clientID: 'xcV3lcWretdHJWLRS9TBj6hvCtz0W0rV',
    domain: 'neerajthakur.auth0.com',
    // You may need to change this!
    callbackURL: 'http://localhost:4200/'
};