const express = require('express');
const app = express();
const connectDB = require('./Mvc/config/dbconfig.js');
const Userroute = require('./Mvc/routs/userrouts.js')
const productroute = require('./Mvc/routs/productsrouts.js')
app.use(express.json());
const routes = express.Router()
require('dotenv').config({ path: "app.env" })
const jwt = require('jsonwebtoken')
const rateLimit = require('express-rate-limit');
const upload = require('./Mvc/Controllers/multers.js');
const usertyperoute = require('./Mvc/routs/userTypesroutes');
const cors = require('cors')
const orders = require('./Mvc/routs/adminrouts.js')

app.use(cors({
    origin: 'http://localhost:4200'}));

// تحديد الحد الأقصى للطلبات
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 دقيقة
    max: 50,  // الحد الأقصى 100 طلب لكل IP
    message: "Too many requests from this IP, please try again later."
});
// تطبيق الـ limiter على جميع المسارات
app.use(limiter);
connectDB()


app.use("/Users", Userroute)
app.use("/admins", orders)
app.use("/Products", productroute)
app.use('/insertSuperUser', usertyperoute)
app.post('/upload', upload.array('file', 5), (req, res) => {
    try {
        res.send('Files uploaded successfully');
    }
    catch (err) {
        console.log({ err: err.message });

    }
});

app.get('/', (req, res) => {
    try {
        res.send('Hello World');
    } catch (err) {
        console.error(err);
        res.status(500).send('Something broke!');
    }
})
app.listen(process.env.port, () => { console.log('listening'); });

