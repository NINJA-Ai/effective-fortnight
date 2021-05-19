Webcam.set(
    {
        width : 400,
        height : 400,
        image_format : 'png',
        png_quality : 90
    }
);
camera=document.getElementById("camera");
Webcam.attach('#camera');

function math()
{
    Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version: ',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json', modelLoaded );

function modelLoaded()

{
    console.log("modelLoaded!");
}
function english()
{
img = document.getElementById('captured_image');
classifier.classify(img, gotresult);
}
function english()
{
img = document.getElementById('captured_image');
classifier.classify(img, gotresult);
}
function gotresult(error, results)
{
if (error) {console.error(error);
}
else 
{
 console.log(results);
 document.getElementById("resultobjectname").innerHTML = results[0].label;
 document.getElementById("resultaccuracyname").innerHTML = results[0].confidence.toFixed(3);
}
}