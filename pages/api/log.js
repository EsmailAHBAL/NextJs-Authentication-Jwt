// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from "jsonwebtoken"
import { resolve } from "styled-jsx/css"
export default function handler(req, res) {
  const {username,password}=req.body
  
  res.json({
    token:jwt.sign({
      username,
      password,
      admin : username=='admin' && password =='admin'
    },'kdkfkeieiiiiiiiiiii')
  })

  }
