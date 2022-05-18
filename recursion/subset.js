
let subsett = "abc";
// console.log(subsett.length)

function subset_func(subsett){
    let output = "";
    solve_func(subsett,output);
}

function solve_func(subsett,output){
    if (subsett.length === 0){
        
        console.log(output);
        return;
    }
    
    let output1 = output;
    let output2 = output;

    output2 += subsett.charAt(0);
    // console.log(output2);
    subsett = subsett.substring(1);
    // console.log(subsett)
    // console.log(subset)
    solve_func(subsett, output1);
    solve_func(subsett,output2);

}

subset_func(subsett);

