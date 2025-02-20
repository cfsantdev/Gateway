const logger = require('./logger');

exports.Resolve = function(req, res){
    const { alias, data } = req.body;

    if(alias === null || alias === undefined || alias === "")
        return res.status(400).json({ error: 'You must enter a valid value for the "alias" field.' });
    
    if(data === null || data === undefined || JSON.stringify(data) === JSON.stringify({}))
        return res.status(400).json({ error: 'You must enter a valid value for the "data" field.' });

    switch(alias){
        case 'TEST':
            res.status(200).json({
                data: {
                    status: 200,
                    msg: "Request received and processed successfully."
                }
            });
            break;

        default:
            res.status(400).json({ error: 'You must enter a valid value for the "alias" field.' });
            break;
    };

    logger.Logger(res, alias, data);
    
    return res;
};