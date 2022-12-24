function operator(proxies) {
    const counter = {};
    return proxies.map(p => {
      if (!counter[p.name]) counter[p.name] = 0;
      p.name = p.name +(('000'+ ++counter[p.name]).slice(-2)).toString();
      return p;
    });
}

/* 重复节点添加标识效果
 香港01
 香港02
 香港03
*/
