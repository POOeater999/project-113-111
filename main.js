Webcam.set({
    width:500,
    height:300,
     image_format:'png',
     png_quality:100

});

Webcam.attach("#camera")




function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
    })
}


console.log("ml5version: ",ml5.version)


classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wHW7owIri/model.json",modelLoaded);

function modelLoaded(){
console.log("model Loaded! 💩")
}

function check() {
    img = document.getElementById("capture_image") ;
    classifier.classify(img,getResult) ;
}

function getResult(error,results) {

    if(error){
        console.error(error) 
    }
    else {
        console.log(results)
        document.getElementById("result_name_object").innerHTML = results[0].label ;
        document.getElementById("result_accuracy_object").innerHTML = (results[0].confidence.toFixed(2)*100) + "%" ;
    }

}