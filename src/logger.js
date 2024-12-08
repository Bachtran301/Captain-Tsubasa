const log = (msg, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    const logFormat = `${timestamp} | ${type.toLocaleUpperCase()} | ${msg}`;
    
    switch(type) {
        case 'success':
            console.log(logFormat.green);
            break;
        case 'custom':
            console.log(logFormat.magenta);
            break;        
        case 'error':
            console.log(logFormat.red);
            break;
        case 'warning':
            console.log(logFormat.yellow);
            break;
        default:
            console.log(logFormat.blue);
    }
}

module.exports = log;