const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();
app.use(cors());

app.use(async ctx => { 
  
  /*ctx.body = { msg: 'Hello World!' }}); */

 
  switch (ctx.url) {
    case '/eng':
      ctx.body = { msg: 'Hello World!' };
      break;

    case '/fin':
      ctx.body = { msg: 'Morjens Maailma!' };
      break;

    case '/swe':
      ctx.body = { msg: 'Hejssan Värld!' };
      break;

    case '/ger':
      ctx.body = { msg: 'Guten Tag Welt!' };
      break;

    default: 
      ctx.body = { msg: 'Vastaan nyt jotain kun en muutakaan osaa...' };
      break;
  }});
 
app.listen(3000, () => console.log('Server started...'));