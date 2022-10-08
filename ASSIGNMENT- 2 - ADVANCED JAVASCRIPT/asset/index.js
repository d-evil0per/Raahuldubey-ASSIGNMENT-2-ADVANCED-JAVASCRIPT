window.onload = init;

  function getJsonData() {
    return fetch("asset/data.json").then((response)=>{return response.json()}).then((data)=>{
        var jsondata = new Array();
        jsondata.push(data);
        window.sessionStorage.setItem('resumedata',JSON.stringify(jsondata));
    });
    
}
function init(){
    
    

    var validUser=JSON.parse(window.localStorage.getItem('all_users'));
    const {
        host, hostname, href, origin, pathname, port, protocol, search
      } = window.location
    if(pathname==="/index.html" && validUser)
    {
        location.href="http://127.0.0.1:5500/resume.html";
    }
    else if(pathname==="/index.html" && !validUser)
    {
        var a = new Array();
        up1 = new Object();
        up1={
            name:'rahuldubey@gmail.com',
            password:btoa('rahul@123')
            };
        a.push(up1);
        // console.log(a)
        window.localStorage.setItem('all_users',JSON.stringify(a));
    }
    else if(pathname==="/resume.html")
    {
        var jsondata=JSON.parse(window.sessionStorage.getItem('resumedata'));
        if (!jsondata)
        {
            getJsonData();
        }
        
        
    }
    

}
function Login()
{
    
    let isvalid=false;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username!="" && password!="")
    {
        var validUser=JSON.parse(window.localStorage.getItem('all_users'));
        for(let key of validUser)
        {
        
            if(key['name'] === username && key['password']===btoa(password))
                {
                    
                    isvalid=true;
                    break;
                }
                
        }

        console.log(isvalid);
        if(isvalid)
        {
            location.href="/resume.html";
        }
        else
        {
            document.getElementById('msg').innerHTML='invalid username/password.';
        }
    }
    
    
}

function getdata()
{
    var jsondata=JSON.parse(window.sessionStorage.getItem('resumedata'));
    console.log(jsondata);
}