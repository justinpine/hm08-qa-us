exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    headless: true,
    capabilities: [
    {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
            args: ['-headless']
        }
    }
],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://cnt-1d2ca9b9-1717-4203-a7ba-a8a109f4b883.containerhub.tripleten-services.com',
    // Increased timeout to prevent errors
    waitforTimeout: 150000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [ 
        'geckodriver', 
        'intercept', 
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        retries: 3,
        timeout: 15000
    },
};