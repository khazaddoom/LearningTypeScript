// type Style = number | string | undefined;

// const font: Style = ""

// const memoizee = require('memoizee');

import * as memoizee from 'memoizee';


function add(a: number, b: number): number {
  console.log('add is called');
  return a + b;
}

const memoizedAdd = memoizee(add);

memoizedAdd(1,2);  // log "add is called"
memoizedAdd(1,2);  // cache hit, not logging
memoizedAdd(1,3);  // log "add is called"