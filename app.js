const express = require("express")
const app = express();
require("./db/connection")
const Race = require("./models/sports")
const port = process.env.PORT || 3000;
const router = require("./router/routs");
app.use(express.json()); // that is jason file always work synchronous type
app.use(router); // always this route use afer use express .json

// we wil handle the  post request 
// app.get("/", (req, res) => {
//     res.send("Hello from the Thapa")
// })
// app.post("/mens", async(req, res) => {
//         try {
//             const user = new Race(req.body)
//             const Creater = await user.save()
//             res.send(Creater)
//         } catch (e) {
//             res.send(e)
//         }
//     })
//     // get data from mongosedb
// app.get("/mens", async(req, resp) => {
//         try {
//             const Fetch = await Race.find().sort({ "ranking": 1 });
//             resp.send(Fetch)
//         } catch (e) {
//             resp.send(e);
//         }
//     })
//     // data get with help id 
// app.get("/mens/:id", async(req, resp) => {
//         try {
//             const data = req.params.id;
//             const Dataid = await Race.findById(data);
//             if (!Dataid) {
//                 return resp.send();
//             } else {
//                 resp.send(Dataid)
//             }

//         } catch (e) {
//             resp.send(e);
//         }
//     })
//     // data update by id through by postman 
// app.patch("/mens/:id", async(req, resp) => {
//         try {
//             const datas = req.params.id;
//             const Update = await Race.findByIdAndUpdate(datas, req.body, { new: true })
//             resp.send(Update)

//         } catch (e) {
//             resp.send(e);
//         }
//     })
//     // delete data by user id
// app.delete("/mens/:id", async(req, resp) => {
//     try {
//         const datas = req.params.id;
//         const Update = await Race.findByIdAndDelete(datas, req.body, { new: true })
//         resp.send(Update)

//     } catch (e) {
//         resp.send(e);
//     }
// })




app.listen(port, () => {
    console.log(`connection is live port ${port}`)
})