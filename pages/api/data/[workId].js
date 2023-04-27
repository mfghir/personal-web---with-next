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

  const id = req.query.workId;
  if (req.method === "GET") {
    try {
      const workData = await Work.findById(id);
      res.status(200).json({ status: "ok", data: workData });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "error in retrieving data from database",
      });
    }
  } else if (req.method === "PATCH") {
    try {
      const workData = await Work.findById(id);
      workData.like = req.body.like;
      await workData.save();
      res.status(200).json({ status: "ok", data: workData });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "error in updating data from database",
      });
    }
  }
}
