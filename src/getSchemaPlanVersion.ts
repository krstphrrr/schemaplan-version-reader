import fs from 'fs'
import { join } from 'path'

export const findCSVFile = (path:string): any=>{
    if (!fs.existsSync(path)) {
        console.log("no dir ", path);
        return;
    }
    let vers
    let files = fs.readdirSync(path)
    let pattern = /(?<path>([a-zA-Z]*(\\|\/|))*)(?<prefix>([a-zA-Z]*(-)))(?<version>(\d+.\d+.\d+))(?<extension>(.*))/
    for ( let i=0; i<files.length; i++){
        let filename = join(path,files[i])
        if(filename){
            if(filename.match(pattern)?.groups){
                vers = filename.match(pattern)?.groups?.version
            }
        }
    }
    return vers
}