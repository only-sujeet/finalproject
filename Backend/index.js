const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const connectToMongo = require("./db");
const bodyParser = require("body-parser");

dotenv.config({path : './.env'})

connectToMongo();
const app = express();
const PORT = process.env.REACT_APP_PORT ;
app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))


app.use("/api/admin", require("./Routes/Admin/Adminlog"))
app.use("/api/admin", require("./Routes/Admin/chemployee"))
app.use("/api/employee", require("./Routes/Employee/Emplogin"))



app.get('/', (req, res) => {
    res.send("<h1>Hello User</h1>")
})

app.listen(PORT, () => {
  console.log(`Backend is run on  http://localhost:${PORT}`)
})

