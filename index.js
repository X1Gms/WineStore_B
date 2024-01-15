import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as bcrypt from "bcrypt";
import "dotenv/config";
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = 3000;

app.get("/", (req, res) => res.send("Hello World"));

app.post("/login", () => {
  // Add your login logic here
});

app.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, 15, (err, hash) => {
    // Add your registration logic here
    const newUser = new Register({
      name: req.body.nome,
      email: req.body.email,
      password: hash,
    });
  });
});

app.listen(port, async () => {
  console.log(port);
});
