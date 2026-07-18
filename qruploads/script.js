const cloudName = "Dpsmcu07f";
const uploadPreset = "qr_uploads";


function uploadImages(){


let files=document.getElementById("files").files;

let status=document.getElementById("status");


if(files.length===0){

status.innerHTML="Please select photos.";

return;

}



status.innerHTML="Uploading...";


for(let file of files){


let formData=new FormData();


formData.append("file",file);

formData.append("upload_preset",uploadPreset);



fetch(

`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,

{

method:"POST",

body:formData

}

)


.then(response=>response.json())

.then(data=>{


console.log(data);


status.innerHTML="Photos uploaded successfully!";


})

.catch(error=>{


console.log(error);

status.innerHTML="Upload failed.";

});


}



}
