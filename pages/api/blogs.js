// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {

  let data = await fs.promises.readdir("blogdata")
  let myfile;
      let allblogs = [];
        for (let index = 0; index < data.length; index++) {
          const item = data[index];
            console.log(item)
            myfile = await fs.promises.readFile(('blogdata/'+ item),'utf-8')
            console.log(myfile)
                    allblogs.push(JSON.parse(myfile))
        } 
    // }
  res.status(200).json(allblogs);
  // fs.prmises.readdir("blogs",(err,data) => {
  //   console.log(data);
  //   let allblogs = [];
  //   data.forEach((item)=>{
  //     console.log(item)
  //     fs.readFile(('blogs/'+ item),(d)=>{
  //       allblogs.push(d)
  //     })
  //   })
  //   res.status(200).json(allblogs);
  // })  
  }