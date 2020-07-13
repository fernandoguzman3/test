//require("C:\\Users\\patri\\Desktop\\credentials.txt");
const { Octokit } = require('@octokit/rest')
//const {glob} = require("globby")
//const {path} = require("path")
//const {readFile} = require("fs-extra")

//const main = async () => {
//const OWNER = 'fernandoguzman3'
//const REPO = 'test'
// const repos = await Octokit.repos.listForOrg({
//     owner: OWNER
// });

const getCurrentCommit = async (
    octo,
    own,
    repo,
    branch = 'master'
  ) => {
      //console.log(octo)
      console.log(own)
      console.log(repo)
      console.log(branch)
    const refData = octo.git.getRef({
      owner: own,
      repo: repo,
      ref: `heads/${branch}`
    });
    console.log(Object.values(refData))
    // const commitSha = refData.object.sha
    // const commitData  = octo.git.getCommit({
    //   owner: owner,
    //   repo,
    //   commit_sha: commitSha,
    // });
    // return {
    //   commitSha,
    //   treeSha: commitData.tree.sha,
    // }
  }

const main = async () => {

const clientWithAuth = new Octokit({
    auth: "2cd7fb59a9d020e7347a5575ba628a0921d63eb5"
});




const currComit = await getCurrentCommit(clientWithAuth, 'fernandoguzman3', 'test')


}
main()


// clientWithAuth.repos.createForAuthenticatedUser({
//     name: "test",
//     auto_init: true
//  });
//await uploadToRepo(Octokit,'./test.js',OWNER,REPO)

//}

// const uploadToRepo = async (
//     octo,
//     path,
//     owner, 
//     repo
// ) => {

//     const branch = 'master';
//     const currentCommit = await getCurrentCommit(octo,owner,repo,branch);
//     const filePath = await glob(path)
//     const filesBlobs = await Promise.all(filePath.map(createBlobForFile(octo, org, repo)))
//     const pathsForBlobs = filePath.map(fullPath => path.relative(coursePath, fullPath))
//     const newTree = await createNewTree(
//         octo,
//         org,
//         repo,
//         filesBlobs,
//         pathsForBlobs,
//         currentCommit.treeSha
//       )
//       const commitMessage = `My commit message`
//     const newCommit = await createNewCommit(
//         octo,
//         org,
//         repo,
//         commitMessage,
//         newTree.sha,
//         currentCommit.commitSha
//     )
//     await setBranchToCommit(octo, org, repo, branch, newCommit.sha)
// }

// const getCurrentCommit = async (
//     octo,
//     owner,
//     repo
// ) => {
//     const branch = 'master'
//     const {data: refData} = await octo.git.getRef({
//         owner: owner,
//         repo,
//         ref: `heads/${branch}`
//     })
//     const commitSha = refData.object.sha
//     const { data: commitData } = await octo.git.getCommit({
//         owner: owner,
//         repo,
//         commit_sha: commitSha,
//     })
//     return {
//         commitSha,
//         treeSha: commitData.tree.sha,
//     }
// }

// // Notice that readFile's utf8 is typed differently from Github's utf-8
// const getFileAsUTF8 = (filePath) => readFile(filePath, 'utf8')

// const createBlobForFile = (octo, org, repo) => async (
//   filePath
// ) => {
//   const content = await getFileAsUTF8(filePath)
//   const blobData = await octo.git.createBlob({
//     owner: org,
//     repo,
//     content,
//     encoding: 'utf-8',
//   })
//   return blobData.data
// }
// const createNewTree = async (
//     octo,
//     owner,
//     repo,
//     blobs,
//     paths,
//     parentTreeSha
//   ) => {
//     // My custom config. Could be taken as parameters
//     const tree = blobs.map(({ sha }, index) => ({
//       path: paths[index],
//       mode: `100644`,
//       type: `blob`,
//       sha,
//     })) 
//     const { data } = await octo.git.createTree({
//       owner,
//       repo,
//       tree,
//       base_tree: parentTreeSha,
//     })
//     return data
//   }

// const createNewCommit = async (
//     octo,
//     owner,
//     repo,
//     message,
//     currentTreeSha,
//     currentCommitSha
//   ) =>
//     (await octo.git.createCommit({
//       owner: owner,
//       repo,
//       message,
//       tree: currentTreeSha,
//       parents: [currentCommitSha],
//     })).data

// const setBranchToCommit = (
//     octo,
//     owner,
//     repo,
//     commitSha
//   ) =>
//     octo.git.updateRef({
//       owner: owner,
//       repo,
//       ref: `heads/${branch}`,
//       sha: commitSha,
//     })
