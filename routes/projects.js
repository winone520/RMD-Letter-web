const express = require('express');
const router = express.Router();

const routes = require('../api/controllers/projects');
const Policy = require('../api/policy');

//  projects management
router.get('/', Policy.loggedIn, routes.projectList);
router.get('/create', Policy.loggedIn, routes.createPage);  //  create project
router.post('/', Policy.loggedIn, routes.projCreate); // create first hbr


//  project detail
router.get('/:projID', Policy.loggedIn, routes.projDetail);
router.put('/:projID/:hbrBodyID', Policy.loggedIn, routes.projHbrEdit); // modify post
router.post('/:projID', Policy.loggedIn, routes.projAddPost); // modify hbr, add a post(公告)
router.get('/:projID/edit', Policy.loggedIn, routes.editPage);

router.put('/:projID/titleZh', Policy.loggedIn, routes.projTitleZhEdit);
router.put('/:projID/subdomain', Policy.loggedIn, routes.projSubdomainEdit);

router.delete('/:projID', Policy.loggedIn, routes.projDelete);


//  self definite student forms
router.get('/:projID/student-form', Policy.loggedIn, routes.stuFormDetail);
router.post('/:projID/student-form', Policy.loggedIn, routes.createStuForm);
router.put('/:projID/student-form', Policy.loggedIn, routes.updateStuForm);


//  self definite recommend letter forms
router.get('/:projID/rmdletter-form', Policy.loggedIn, routes.rmdLtFormDetail);
router.post('/:projID/rmdletter-form', Policy.loggedIn, routes.createRmdLtForm);
router.put('/:projID/rmdletter-form', Policy.loggedIn, routes.updateRmdLtForm);


//  the email that mail to the recommended person
router.get('/:projID/invite-letter', Policy.loggedIn, routes.inviteltDetail);
router.put('/:projID/invite-letter', Policy.loggedIn, routes.updateInvitelt);


//  the recommended person manage
router.get('/:projID/rmd-person', Policy.loggedIn, routes.rmdPersonList);
router.post('/:projID/rmd-person', Policy.loggedIn, routes.addRmdPerson);
router.post('/:projID/rmd-person/:personID', Policy.loggedIn, routes.modifyVerification);


//  get student list
router.get('/:projID/student', Policy.loggedIn, routes.studentList);

//  get filled student form
router.get('/:projID/:stuID', Policy.loggedIn, routes.filledStudentForm);

//  get Recommend Letter by Student
router.get('/:projID/:stuID/rmd-letter', Policy.loggedIn, routes.studentRmdLetter);

module.exports = router;
