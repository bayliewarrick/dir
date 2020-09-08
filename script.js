printBox = (length, width) => {

    toPrint = '' //create variable toPrint, which we will print at the end of the function.

    for(let i = 0; i < length; i++) {

        for(let j = 0; j < width; j++) {
        
			if(i == 0 || i == length - 1 || j == 0 || j == width - 1)
			{ toPrint += '*'; }//add a star to the toPrint variable.
			else
			{ toPrint += ' '; }// add a space to the toPrint variable
			
		}
		
		toPrint += '\n' // add a line break to the end of each row

	}
	
	console.log(toPrint) //at the end of function, log string toPrint

}

printBox(35, 40)