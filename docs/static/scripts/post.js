window.addEventListener("DOMContentLoaded", async ()=>{

    var params = new URLSearchParams(window.location.search)

    const id = params.get("id");

    let request = await fetch("/static/posts/" + id + ".txt", {
        method: "GET"
    })

    let data = await request.text();

    document.querySelector("main.content .postData .basic-title").innerHTML = data.split("[post-title]")[1].split("[/post-title]")[0]
    document.title =  "who енрл? | " + data.split("[post-title]")[1].split("[/post-title]")[0]
    document.querySelector("main.content .postData .postDate").innerHTML = data.split("[post-date]")[1].split("[/post-date]")[0]
   
    let content = data.split("[post-content]")[1].split("[/post-content]")[0]
    content = content.split("\n");
    let html = ""
    content.forEach(element => {
        html += "<p>" + element + "</p>"
    });
    document.querySelector("main.content .postData .postContent").innerHTML = html

})