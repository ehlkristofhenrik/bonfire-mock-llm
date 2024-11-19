Bun.serve({
  port: 8080,
  fetch(req) {
    const url = new URL(req.url);
    let ret = {
      "overall_reasoning": "None",
      "malignity_reasoning": "None",
      "malignity_score": Math.floor(Math.random()*10),
      "severity_reasoning": "None",
      "severity_score": Math.floor(Math.random()*10),
      "utility_reasoning": "None",
      "utility_score": Math.floor(Math.random()*10),
      "expectance_reasoning": "None",
      "expectance_score": Math.floor(Math.random()*10)
    }
    if (url.pathname.includes("heal"))
      return new Response(JSON.stringify({status: "ok"}))
    return new Response(JSON.stringify(ret))
  }  
})
