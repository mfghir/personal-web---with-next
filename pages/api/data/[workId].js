import Work from "@/models/Work";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "error in connecting to database" });

    return;
  }

  console.log(req.query);
  const id = req.query.workId;
  const data = req.body.data;
  console.log("workId",id);

  // if (req.method === "GET") {
  //   try {
  //     const workData = await Work.findOne({ _id: id });
  //     res.status(200).json({ status: "ok", data: workData });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json({
  //       status: "failed",
  //       message: "error in retrieving data from database",
  //     });
  //   }
  // } else
   if (req.method === "PATCH") {
    try {
      const workData = await Work.findOne({ _id: id });
      workData.id = data.id;
      workData.title = data.title;
      workData.description = data.description;
      workData.imgUrl = data.imgUrl;
      workData.gitLink = data.gitLink;
      workData.netlifyLink = data.netlifyLink;
      workData.like = data.like;

      await workData.save();
      res.status(200).json({ status: "ok", data: workData });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        status: "failed",
        message: "error in updating data from database",
      });
      return;
    }
  }
}
