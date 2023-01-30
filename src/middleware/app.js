import Koa from 'koa';
import koaBody from 'koa-body';

const app = new Koa();

app.use(koaBody({
  jsonLimit: '1kb'
}));

// POST .name to /uppercase
// co-body accepts application/json
// and application/x-www-form-urlencoded

app.use(async function(ctx) {
  const body = ctx.request.body;
  if (!body.distro) ctx.throw(400, '.distro required');
  if (!body.workflow) ctx.throw(400, '.workflow required');
  ctx.body = breakOut(body);
});

if (app.listen(3001));

const breakOut = (body) => {
  return { 
    distro: body.distro.toUpperCase(),
    workflow: body.workflow.toUpperCase() 
  }
}