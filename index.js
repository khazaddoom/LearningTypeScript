// type Style = number | string | undefined;
// const font: Style = ""
const memoizee = require('memoizee');
// import { memoizee } from 'memoizee';
function add(a, b) {
    console.log(`add is called on ${a} and ${b}`);
    return a + b;
}
const memoizedAdd = memoizee(add);
memoizedAdd(1, 2); // log "add is called"
memoizedAdd(1, 2); // cache hit, not logging
memoizedAdd(1, 3); // log "add is called"
