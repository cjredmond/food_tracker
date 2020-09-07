import express from "express";
const app = express();
const port = 8080;

app.get("/", (req: any, res: any) => {
    res.send("hello");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});


