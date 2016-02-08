angular.module('app').constant('CONFIG', {
    /**
     * CLIENT_ID przypisany do aplikacji angularowej przez /oauth/applications
     */
    CLIENT_ID: 'b30d98b4b1a7620d6f2e3c4b0f5505e65b94b169c26bd8c35f670e5f93a7fec4',
    ANGULAR_URL: 'http://localhost:8000',
    RAILS_URL: 'http://localhost:3000',
    API_URL: 'http://localhost:3000/api/v1/',
    OAUTH_URL: 'http://localhost:3000/oauth/',
    LOGOUT_URL: 'http://localhost:3000/users/sign_out'
});
