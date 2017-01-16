import koa from 'koa'

let app = koa();

app.use(function *(){
  this.body = 'Hello World'
})

app.listen(3000)
