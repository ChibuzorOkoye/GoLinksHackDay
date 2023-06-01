const token = process.env.ENV_TOKEN
const username = 'chibuzorokoye'

// console.log(token)

function getforkCount(gitHubData) //gets fork data
{
    let forkCount = 0

    for ( i = 0; i < gitHubData.length; i ++)
    {
         forkCount = forkCount + parseInt(gitHubData[i].forks_count)
        
    }
    console.log('Total fork amount: ' + forkCount)
}

function getstarCount(gitHubData) // gets stargazers data
{
    let starCount = 0
    for ( i = 0; i < gitHubData.length; i ++)
{
    starCount = starCount + parseInt(gitHubData[i].stargazers_count)
    
}
console.log('Total Stargaizer amount: ' + starCount)

}

function getSize(gitHubData) //calculates the size of the repos
{
    let avgsize = 0;
    for (i = 0; i<gitHubData.length; i++)
    {
        avgsize = avgsize + parseInt(gitHubData[i].size)
    }
    avgsize = Math.round(avgsize/gitHubData.length)

    if (avgsize <= 100)
    {
        console.log(avgsize + ' KB per repo')
    }
    else if (avgsize >= 1000)
    {
        console.log(avgsize + ' MB per repo')
    }
    else if (avgsize >= 10000)
    {
        console.log(avgsize + ' GB per repo')
    }
    
    else
    console.log(avgsize + 'per')
}


function getRepos(gitHubData) //gets the total amount of repos
{
    let repoCount = gitHubData.length

    console.log(repoCount)
}

function getlanguages(gitHubData)
{

}

function totalRepoAmount(gitHubData)
{
    console.log(gitHubData.length + ' Total Repos')
}


const fetchUserData  = async () => // fetches the data from the api

{   
    let name;
    let userData = []

     const res = await fetch (`https://api.github.com/users/${username}`,
     {
        // headers :
        // {
        //     'Authorization': `token ${token}`
        // }
    }
    
    ).then((response) => 
    {
        return response.json()
    }
      ).then(data =>
        userData = data
)

        name = userData.name
        console.log('Name: '+ name)//my name comes up as null
        console.log('Name: '+ userData.login)

}


// const fetchLangData  = async () => // fetches the data from the api

// {   
//     let language;
//     let userData = []

//      const res = await fetch (`https://api.github.com/repos/${username}/Assignmen-4/languages`,
//      {
//         // headers :
//         // {
//         //     'Authorization': `token ${token}`
//         // }
//     }
    
//     ).then((response) => 
//     {
//         return response.json()
//     }
//       ).then(data =>
//         userData = data

        
// )

//     // const res2 = await fetch ()
// }



const fetchRepoData  = async () => // fetches the data from the api

{   
    let gitHubData = []

     const res = await fetch (`https://api.github.com/users/${username}/repos`,
     {
        // headers :
        // {
        //     'Authorization': `token ${token}`
        // }
    }
    
    ).then((response) => 
    {
        
        return response.json()
    }
      ).then(data =>
        gitHubData = data

        
)

getforkCount(gitHubData)
getstarCount(gitHubData)
getlanguages(gitHubData)
getSize(gitHubData)
totalRepoAmount(gitHubData)
// console.log(gitHubData)
// console.log(gitHubData[0].name)
// console.log(gitHubData[0].size)
}


fetchRepoData();
fetchUserData();


