import { NextResponse } from 'next/server'
import {blogs} from '../../util/data'

export async function GET() {
  let data = blogs
  return NextResponse.json({res: data,ok:true})
}