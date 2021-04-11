let Lru = require("../module/lrucache").Lru;
let benchSize = 500;
let cacheMiss = 0;
let cacheAccess = 0;
let cache = new Lru(900, async function (key, callback) {
    // cache-miss data-load algorithm
    setTimeout(function () {
        cacheMiss++
        callback(key + " processed");
    }, 1000);
}, 1000 /* cache element lifetime */);

let ctrBench = 0;

function bench() {
    let ctr = 0;
    let t1 = Date.now();
    for (let i = 0; i < benchSize; i++) {
        let key = parseInt(Math.random() * 1000, 10);
        cache.get(key, function (data) {
            cacheAccess++;
            if (key.toString() + " processed" !== data) {
                console.log("error: wrong key-data mapping.");

            }
            if (++ctr === benchSize) {
                console.log("benchmark: " + (Date.now() - t1) + " miliseconds");
                console.log("cache hit: " + (cacheAccess - cacheMiss));
                console.log("cache miss: " + (cacheMiss));
                if (ctrBench < 20) {
                    ctrBench++
                    bench();
                }
            }
        });
    }
}

bench();