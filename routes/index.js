const Router = require('koa-router');
const controllers=require('../controllers');
const router = new Router();
router.get('/hello',message.hello);
// 提交考勤信息
router.post('/insert',mesage.insert);
module.exports=router;