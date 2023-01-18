function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BfFdQnp5l/model.json', modelReady);
}
function modelReady(){

    classifier.classify(gotResults);
}
function gotResults(error, results) 
    { 
        if (error)
        {
            console.error(error);
        }
    
    else 
    {
           console.log(results); 
           random_number_r =Math.floor(Math.random() *255) +1;
           random_number_g =Math.floor(Math.random() *255) +1;
           random_number_b =Math.floor(Math.random() *255) +1;
   document.getElementById("result_label").innerHTML ='I can hear - '+ results[0].label;
   document.getElementById("result_count").innerHTML = 'Accuracy -'+ (results[0].confidence*100).toFixed(2)+"%";
   document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
   document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
   img = document.getElementById('dog')
   img1 = document.getElementById('cat')
   if (results[0].label == "barking") 
   {
     animal_image.src = 'dog.jpeg';
   }
   else if (results[0].label == "Meowing") 
   {
         animal_image.src = 'cat.jpeg';
   }
   else if (results[0].label == "Background Noise") 
   {
         animal_image.src = 'listen.jpeg';
   }
   
}
}