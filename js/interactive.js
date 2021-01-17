// three jobs ccording to consumer demands
// set up modals
//one if you click a link to something that I didnt write an artcile on (pay to see)
//one if you scroll down too much

//hidden debug thing, clikc the icon in the weather thing enough and you can set the time responce maunally.
var shownSignUp = false;
const mImg = document.querySelector(".main_content");


document.addEventListener("scroll",function(e)
{
    if(shownSignUp === false)
    {
      $('#signup_modal').modal('show');

        console.log("scroll");
        shownSignUp = true;
    }
    else
    {
        return;
    }
});
