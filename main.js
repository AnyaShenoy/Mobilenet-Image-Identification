Webcam.set({
    width: 310,
    height:300, 
    image_format: 'png',
    png_quality: 90,
    constraints: {
        facingMode:"environment"

    }
})
camera= document.getElementById("webcam");
Webcam.attach(camera);

function take_photo(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML= "<img id='photo' src="+data_uri+">"
        
    })
}
console.log("Ml5 version- ",ml5.version)
classifier= ml5.imageClassifier('MobileNet', modelLoaded)

function modelLoaded(){
    console.log("Model Loaded")
}

function identify(){
    img= document.getElementById("photo");
    classifier.classify(img, gotResult)
}

function gotResult(error, result){
    if (error){
        console.log(error);
    }
    else {
       console.log(result); 
       document.getElementById("object_name").innerHTML= result[0].label;
    }
}