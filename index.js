const Router = require('koa-router');
const router = new Router();
const process = require('./process.queries');
module.exports = router;
const BASE_URL = ``; //`/api/v1/`;

router.post('/', async (ctx) => {
    try {
        const resp = await process.queries(ctx.request.body);
        ctx.status = 201;
        ctx.body = resp
    } catch (err) {
        ctx.status = 400;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, something when wrong! :(.'
        };
    }
});


router.get('/get/:id', async (ctx) => {
    try {
        const resp = await process.status(ctx.params.id);
        ctx.status = 201;
        ctx.body = !resp ? 0 :  resp;
    } catch (err) {
        ctx.status = 400;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, something when wrong! :(.'
        };
    }
});
