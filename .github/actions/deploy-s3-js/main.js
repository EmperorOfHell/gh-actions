const core = require('@actions/core')
// const github = require('@actions/github')
const exec = require('@actions/exec')

function run(){
    // 1) Get some input data
    const bucket = core.getInput('bucket', {required: true})
    const bucketRegion = core.getInput('bucket-region', {required: true})
    const distFolder = core.getInput('dist-folder', {required: true})

    

    // 2) Post file to S3
    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${ distFolder } ${ s3Uri } --region ${ bucketRegion }`)

    core.notice('Hit the end of action!')
}
run();