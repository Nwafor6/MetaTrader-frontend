$(document).ready(function(){
    console.log("Hello I am")
    $(".ajaxResponse").html(`
    <div class="alert alert-info" role="alert">
        Fetiching live data..
    </div>
    `)
    $.ajax({
        type: "get",
        url: "https://tradeft9ja.vercel.app/account/",
        success:function(resp){
            $(".ajaxResponse").html(``)
            localStorage.removeItem("login")
            localStorage.setItem("login", JSON.stringify(resp))
            console.log(resp,"Success")
            $(".form-select").html(``)
            resp.details.forEach((e)=>{
                document.querySelector(".form-select").innerHTML +=`<option value="${e}">${e}</option>`
                
            })
        },
        error:function(err){
            console.log(err, "Error")
            $(".ajaxResponse").html(`
              <div class="alert alert-danger" role="alert">
              Failed to fetch live data due to network error.
              </div>
              `)
        }
    })
})