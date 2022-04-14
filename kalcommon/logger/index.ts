import bunyan from 'bunyan';

const logger = bunyan.createLogger({name: 'my2app'});

export function getLogger(name: string) {
    return logger.child({child: name});
}
