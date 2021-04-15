class LRUCache {
  constructor (limit = 10) {
    this.limit = limit
    this.cache = new Map()
  }
  get(key) {
    if (!this.cache.has(key)) return -1
    const val = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, val)
    return val
  }
  set(key, val) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if(this.cache.size === this.limit) {
      const delKey = this.cache.keys().next().value
      this.cache.delete(delKey)
    }

    this.cache.set(key, val)
  }
}


class LRUCache2 {
  constructor(limit = 10) {
    this.limit = limit
    this.cache = new Map()
  }
  get(key) {
    const {cache} = this
    if (!cache.has(key)) return -1
    let val = cache.get(key)
    cache.delete(key)
    cache.set(key, val)
    return val
  }
  set(key, val) {
    const {cache, limit} = this
    if (cache.has(key)) {
      cache.delete(key)
    } else if(cache.size === limit) {
      let delKey = cache.keys().next().value
      cache.delete(delKey)
    }
    cache.set(key, val)
  }
}

// test
let lru2 = new LRUCache2(2)

lru2.set(1, 1)
lru2.set(2, 2)
lru2.set(3, 3)
lru2.set(4, 4)
lru2.get(3)

console.log('lru2 :>> ', lru2)

let lru = new LRUCache(2)

lru.set(1, 1)
lru.set(2, 2)
lru.set(3, 3)
lru.set(4, 4)
lru.get(3)

console.log('lru :>> ', lru)