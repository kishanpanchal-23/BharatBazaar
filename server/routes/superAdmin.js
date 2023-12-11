const express = require("express");
const SuperAdminRouter = express.Router();
const AdminController = require('../controller/superadmincontroller')

// route for SuperAdmin Login;
SuperAdminRouter.post('/superadmin',AdminController.Login);

// route for Admin Login;
SuperAdminRouter.post('/adminLogin',AdminController.adminLogin)

// route for All Admin's get request;
SuperAdminRouter.get('/superadmin/admins', AdminController.getAdmins);

// route for single Admin get request;
SuperAdminRouter.get('/superadmin/admins/:id',AdminController.getAdmin)

// route for Admin's post request;
SuperAdminRouter.post('/superadmin/admins', AdminController.postAdmin);

// route for Admin's Put request;
SuperAdminRouter.put('/superadmin/admins/:id', AdminController.updateAdmin);

// route for Admin's delete request;
SuperAdminRouter.delete('/superadmin/admins/:id', AdminController.deleteAdmin);


module.exports = SuperAdminRouter;