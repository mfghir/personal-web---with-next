// import Work from "@/models/Work";
// import connectDB from "@/utils/connectDB";

// export default async function handler(req, res) {
//   try {
//     await connectDB();
//   } catch (err) {
//     console.log(err);
//     res
//       .status(500)
//       .json({ status: "failed", message: "error in connecting to database" });
//     return;
//   }

//   // if (req.method === "POST") {
//   //   const likeItem = req.body.like;
//   //   console.log(likeItem);

//   //   try {
//   //     const work = await Work.create({
//   //       id: 2,
//   //       title: "Web",
//   //       description: "HTML & CSS",
//   //       imgUrl: "https://i.postimg.cc/q7p7bkNt/Proj2.png",
//   //       gitLink: "https://github.com/mfghir/second-web-proj",
//   //       netlifyLink: "https://web-proj-two.netlify.app",
//   //       like: 0,
//   //     });

//   //     res.status(201).json({
//   //       status: "ok",
//   //       message: "like added to the item",
//   //       data: work,
//   //     });
//   //   } catch (err) {
//   //     console.log(err);
//   //     res.status(500).json({
//   //       status: "failed",
//   //       message: "error in storing data in database",
//   //     });
//   //   }
//   // } else
  
//   if (req.method === "GET") {
//     try {
//       const works = await Work.find();
//       res.status(200).json({ status: "ok", data: works });
//     } catch (err) {
//       res.status(500).json({
//         status: "failed",
//         message: "error in retrieving data from database",
//       });
//     }
//   }
// }
