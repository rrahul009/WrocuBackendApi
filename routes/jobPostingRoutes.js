const express=require('express')
const router=express.Router();
const { jobPosting, getAlljob, applyJob, getAllApplyJob, updateJobPost, deleteJobPost } = require('../controllers/jobPosting');
const upload = require('../utils/uploads');

router.post('/createjob',jobPosting);
router.get('/getalljob',getAlljob);
router.post('/applyjob',upload, applyJob);
router.get('/getallapplyjob',getAllApplyJob);
router.put('/updatejobpost/:id',updateJobPost);
router.delete('/deletejobpost/:id',deleteJobPost);



module.exports=router;