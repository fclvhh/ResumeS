var http = require ('http')
var url = require('url')
var fs = require('fs')
http.createServer(function(req,res){
   
    var temp = url.parse(req.url,true)
    var path = temp.pathname
    var query = temp.query
    var method = req.method
    
    if(path==='/'){
         //第一步:设置响应头
         res.writeHeader(200,{'content-type':'text/html;charset= utf8'})
        //第二步:设置响应数据
        var string = fs.readFileSync('./index.html','utf8')
        var amount = fs.readFileSync('./db.txt','utf8')
        string = string.replace('&&&amount&&&',amount)
        res.write(string)
        //第三步:告诉浏览器,我的请求结束了
        res.end()   
    }else if(path==='/2'){
        //这个代码是无法运行的,主要是图片的问题,伪代码,随便看看
        res.writeHeader(200,{'content-type':'text/html;charset= utf8'})
        var string = fs.readFileSync('./2.html','utf8')
        var amount = fs.readFileSync('./db.txt','utf8')
        string = string.replace('&&&amount&&&',amount)
        res.write(string)
        res.end()   
    }else if (path==='/3'){
        res.writeHeader(200,{'content-type':'text/html;charset= utf8'})
        var string = fs.readFileSync('./3.html','utf8')
        var amount = fs.readFileSync('./db.txt','utf8')
        string = string.replace('&&&amount&&&',amount)
        res.write(string)
        res.end()   

    }else if (path==='/jsonp'){
        res.writeHeader(200,{'content-type':'text/html;charset= utf8'})
        var string = fs.readFileSync('./jsonp.html','utf8')
        var amount = fs.readFileSync('./db.txt','utf8')
        string = string.replace('&&&amount&&&',amount)
        res.write(string)
        res.end()   

    }else if(path==='/style.css'){
        //这里是重复联系,当不同类型的资源时,如何设置响应头!
        res.writeHeader(200,{'content-type':'text/css;charset= utf8'})
        var string2 = fs.readFileSync('./style.css','utf8')
        res.end(string2)

    }else if (path==='/main.js'){
        res.writeHeader(200,{'content-type':'application/javascript;charset= utf8'})
        var string3 = fs.readFileSync('./main.js','utf8')
        res.end(string3)

    }else if(path='/pay'){
        var amount = fs.readFileSync('./db.txt','utf8')
        var newAmount = amount-1
        fs.writeFileSync('./db.txt',newAmount)
        res.end('pay ok!')
    }else if(path='/pay2'){
        var amount = fs.readFileSync('./db.txt','utf8')
        var newAmount = amount-1
        fs.writeFileSync('./db.txt',newAmount)
        res.setHeader('Content-Type','application/javascript')
        res.statusCode = 200
        res.end(`
                amount.innerHTML = amount.innerHTML-1
            `
        )
    }if (path === '/pay3'){
        let amount = fs.readFileSync('./db', 'utf8')
        amount -= 1
        fs.writeFileSync('./db', amount)
        let callbackName = query.callback
        response.setHeader('Content-Type', 'application/javascript')
        response.write(`
            ${callbackName}.call(undefined, 'success')
        `)
        response.end()
    }
    else{
        res.writeHeader(404,{'Content-Type':'text/html;charset=utf-8'} )
        res.end('你访问的资源不存在')
    }
    
}).listen(3000)
console.log('Server running at http://127.0.0.1:3000/')