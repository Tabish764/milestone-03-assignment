import { NextResponse } from 'next/server'
import {blogs} from '../../../util/data'


export async function GET(req,res) {
    let {id} = await res.params
  let data = blogs.filter((item) => String(item.id) == id);
  if(data.length === 0) {
    return NextResponse.json({res:'Not Found'},{status: 404})
  }
  return NextResponse.json({res: data,ok:true})
}