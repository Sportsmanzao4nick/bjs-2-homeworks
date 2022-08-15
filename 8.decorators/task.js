function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find(item => hash === item.hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }
    
    let result = func(...args);
    cache.push({ hash: hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let flag = false;
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, ms);

    if (!flag) {
      func.apply(this, args);
      flag = true;
    }
  }
}

function debounceDecorator2(func, ms) {
  let flag = false;
  let timeout;
  wrapper.count = 0;

  function wrapper(...args) {
    clearTimeout(timeout);
    if (!flag) {
        func.apply(this, args);
        wrapper.count++;
    };
    flag = true;
    timeout = setTimeout(() => {
        func.apply(this, args);
        wrapper.count++;
    }, ms);
};
return wrapper;
};
