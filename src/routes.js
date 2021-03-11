const {Router} = require ('express');
const CommentsController = require('./controllers/CommentsController');
const TextToSpeech = require('./services/TextToSpeech');


const router = Router();
const commentsController = new CommentsController();
const textToSpeech = new TextToSpeech();

//rotas
router.post('/comments', commentsController.createComment);
router.get('/readComments', commentsController.readComments);
router.post('/generateSound', textToSpeech.generatesSound);

router.get('/interface', (req, res) => {
    res.render('views/interface');
});

module.exports = router;