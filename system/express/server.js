/**
 * Created by rakhmatullahyoga on 06/07/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    console.time('Loading express engine');

    // Initialize Express engine
    const APP = MODULES.EXPRESS();
    APP.use(MODULES.BODY_PARSER.urlencoded({ extended: false }));
    APP.use(MODULES.BODY_PARSER.json({ extended: true }));
    APP.use(MODULES.CORS());
    APP.use(MODULES.HELMET());
    // APP.use(MODULES.EXPRESS_LOGGER.create(TOOLS.LOG));
    const green = '\x1b[32m';
    const noCollor = '\x1b[0m';
    APP.use(MODULES.MORGAN((`:date[web] - ${green}info: :method :status path=":url" :response-time ms${noCollor}`)));
    APP.use(MODULES.METHOD_OVERRIDE());

    // Make directory '/public' as a static file content
    APP.use('/public', MODULES.EXPRESS.static(CONSTANTS.PATH.PUBLIC_FILE_PATH));

    // Initialize express interface
    TOOLS.INTERFACES.EXPRESS = require(CONSTANTS.PATH.CLASS_LOADER)(TOOLS, MODULES, CONSTANTS, CONSTANTS.PATH.EXPRESS_INTERFACES_PATH);

    // Initialize routers
    require(CONSTANTS.PATH.ROUTERS_LOADER)(TOOLS, APP, CONSTANTS, MODULES);

    // Not found route handler
    APP.use(function (req, res) {
        return res.status(404).json({ status: MODULES.HTTP.STATUS_CODES[404] });
    });

    // Unhandled error should be 'handled'
    APP.use(function (err, req, res, next) {
        TOOLS.LOG.error(err);
        return res.status(500).json({
            code: 500,
            status: MODULES.HTTP.STATUS_CODES[500],
            message: 'Unhandled error',
            data: {}
        });
    });

    return new Promise(function (resolve, reject) {
        // Starting the application server
        const SERVER = APP.listen(process.env.APP_PORT, function () {
            console.timeEnd('Loading express engine');
            console.info('Listening on port: ' + SERVER.address().port);
        });
        // Return APP for testing purpose
        resolve(SERVER);
    });
};
