import cors from "cors";
import express, {json, Request, Response} from "express";
import "express-async-errors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  try {
   res.status(200).send("OK!");
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
})

const port = +process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server on in: localhost:${port}/`)
});
