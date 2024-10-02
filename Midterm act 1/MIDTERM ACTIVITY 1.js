const dataInfo = []


function info_data(){
    var container_name = document.getElementById('main');


    let output = "";
    
    const infos = 
    
    {
        "name" : prompt("Please enter name: "),
        "course" : prompt("Please enter course: "),
        "address" : prompt("Please enter address: "),
        "grade" : prompt("Please enter grade: ")
    }

    dataInfo.push(infos);
    

    dataInfo.map((info, index) => {
        output+="<h1>" + "Name:" + info.name + "</h1>";
        output+="<p>" + "Course: " + info.course + " Address: " + info.address + " Grade: " + info.grade + "</p>";
        output+="<br>"
    });

    container_name.innerHTML = output;

}
