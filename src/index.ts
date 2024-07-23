import * as core from '@actions/core'
import { findCSVFile } from './getSchemaPlanVersion'

async function run(){
    try{
        const path = core.getInput('path')

        core.debug(`Loading schemaPlan file at ${path}`)

        const result = findCSVFile(path)

        core.debug(`set output: version: ${result}`)
        core.setOutput('version',result)

    } catch (error:any){
        core.setFailed(error.message)
    }
}

run()