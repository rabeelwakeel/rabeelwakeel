import tech from "express";
import { connect, connection } from "mongoose";
import myUser, { find, updateOne, deleteOne } from "./view";
import { json } from "body-parser";
import cors from "cors";

var app = tech();
const PORT = 4000;

// const upload = multer({ Storage: fileStorageEngine });

// jsonParser
app.use(json());
app.use(cors());

//to connet the database
connect("mongodb://127.0.0.1:27017/ExerciseApp", {
  useNewUrlParser: true,
});

//to check dabatabase is connected
connection.once("open", () => {
  console.log("Database connected!");
});

// create data
app.post("/create", (req, res) => {
  let user = myUser(req.body);
  user
    .save()
    .then((used) => {
      res.send(used);
    })
    .catch((err) => {
      console.log("api failed");
    });
});

//show
app.get("/show", (req, res) => {
  find()
    .then((showed) => {
      res.send(showed);
    })
    .catch((err) => {
      res.status(200).send(err.message);
    });
});

//update
app.put("/update/:id", (req, res) => {
  updateOne({ id: req.params.id }, { ...req.body, id: req.params.id })
    .then(() =>
      res.status(200).json({
        message: "Object Update!",
      })
    )
    .catch((error) => res.status(400).json({ error }));
});

//delete
app.delete("/delete/:id", (req, res) => {
  deleteOne({ _id: req.params.id })
    .then(() =>
      res.status(200).json({
        message: "Object Deleted!",
      })
    )
    .catch((error) => res.status(400).json({ error }));
});

app.listen(PORT, () => {
  console.log(`Port is Connected http://localhost:${PORT}`);
});
