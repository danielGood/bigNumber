function bigNumber(n) {
    this.isNegative = false;
	this.number = [0];  //represents like this [1, 2, 3, 4, 5];
	
	//number to array of numbers
	if($.isNumeric(n)){
		//console.log("here");
		
		n = n.toString(10);
		
	}
	//array
	if (Array.isArray(n)) {
	    n = truncateZeros(n);
		this.number = n;
	}
	//string to array of numbers
	if(typeof n == "string"){
	    //console.log("here2");	
		var stringArr = n.split('');
		
		for(var i=0; i<stringArr.length; i++){
			this.number[i] = parseInt(stringArr[i]); 
		}
		
	}
	
	
	
    this.add = function (n) {
        var len = this.number.length;
        var numLen = n.number.length;
        var bigLength;
        var arr = [];
        //length belongs to the longest bigNumber
        if (numLen > len) {
            bigLength = numLen;
			} else {
            bigLength = len;
		}
        var sum = 0;
        //iterates backwards
        //from (bigLength - 1 - i) 
        //from end of both arrays simultanously
        //the ends of both arrays are lined up
        for (var i = 0; i < bigLength; i++) {
			
            var digit1 = n.number[numLen - 1 - i];
            var digit2 = this.number[len - 1 - i];
			
			
			
            if (digit1 === undefined) digit1 = 0;
            if (digit2 === undefined) digit2 = 0;
			
			
            sum = parseInt(digit1) + parseInt(digit2) + sum;
            //console.log(sum);
			
            var rem = 0;
			
			
			
            rem = sum % 10;
            //console.log("dig1: " + digit1);
            //console.log("dig2: " + digit2);
            sum = Math.floor(sum / 10);
            //console.log(sum);
            //console.log(rem);
            arr[bigLength - 1 - i] = rem;
			
			if (i === (bigLength - 1)) {
				if (sum > 0) {
					var addToArr = [sum];
					arr = addToArr.concat(arr);
				}
			}
			
		}
		
		
        return new bigNumber(arr.join(""));
		
	};
	//subtract this - n
	//order matters
	//negatives come into play
	this.subtract = function (n) {
        var nArr = n.number;
        var myArr = this.number;
		
        var bigL;
        var ansArr = [];
        if (nArr.length >= myArr.length) {
			bigL = nArr.length;
		}
        if (nArr.length < myArr.length) {
			bigL = myArr.length;
		}
        var minus = 0;
        var debt = 0;
        for (var i = 0; i < bigL; i++) {
			var digit1 = nArr[nArr.length - 1 - i];
			var digit2 = myArr[myArr.length - 1 - i];
			
			//console.log(digit1);
			//console.log(digit2);
			
			if (digit1 === undefined) digit1 = 0;
			if (digit2 === undefined) digit2 = 0;
			
			minus = digit2 - digit1 - debt;
			debt = 0;
			if (minus < 0) {
				if (i === (bigL - 1)) {
					//last one here
					//make negative
					} else {
					minus = minus + 10;
					debt = 1;
				}
				
			}
			ansArr[bigL - 1 - i] = minus;
			
		}
		
		
        return new bigNumber(ansArr);
		
	};
	
	
	this.mult = function (n) {
		
        var len = this.number.length;
        var numLen = n.number.length;
        var bigLength;
        var arr = new bigNumber(0);
        //length belongs to the longest bigNumber
        if (numLen > len) {
			bigLength = numLen;
			} else {
			bigLength = len;
		}
		
        //Iterate over 1 bigN outer loop
        //During each iteration
        //iterate over the other bigN
        //create number for addition
        //slot number approriately
        //at end of outer iter
        //add all numbers together
		
        // var sum = 1;
        var addArr = []; //made up of multArrs
        var zeroArr = [];
        for (var i = 0; i < len; i++) {
			
			var digit2 = this.number[len - 1 - i];
			//console.log(digit2);
			var multArr = [];
			var multiply = 0;
			if (i > 0) {
				zeroArr[i - 1] = 0;
			}
			
			for (var j = 0; j < numLen; j++) {
				
				var digit1 = n.number[numLen - 1 - j];
				//console.log(digit1);
				//console.log(multiply);
				multiply = (digit1 * digit2) + multiply;
				//console.log(multiply);
				var rem = 0;
				
				rem = multiply % 10;
				multiply = Math.floor(multiply / 10);
				//console.log(rem);
				multArr[numLen - 1 - j] = rem;
				//console.log(multiply);
				
			}
			if (multiply > 0) {
				var addToMult = [multiply];
				multArr = addToMult.concat(multArr);
			}
			multArr = multArr.concat(zeroArr);
			//console.log(multiply);
			//console.log(multArr)
			addArr[i] = new bigNumber(multArr.join(""));
			
			
			
			
		}
		
        for (var i = 0; i < addArr.length; i++) {
			//console.log(arr.number())
			arr = arr.add(addArr[i]);
		}
		
        return arr;
		
		
		
		
	};
	this.mod = function (b) {
		console.log("modstart");
		var bArr = b.number;
		var bNum = bArr.join('');
		
		
		
		
		var curr = 0;
		for(var i=0; i<this.number.length; i++){
			
			curr = parseInt(curr + "" +this.number[i]);
			
			if(curr>bNum){
				
				//derive divisor
				//subtract curr
				var n = 0;	
				var loop = true;
				var saftey =0;
				
				do {
					//loop untill (n+1)*b>curr
				
				
					if (  (bNum*(n+1)) >(curr)) {
						
				
						//mod = a - sum;
						
						loop = false;
						}else{
						
						n = n + 1;
						
					}
					
					if(saftey>50){
						break;
						console.log("saftey");
					}else{
					saftey = saftey + 1;
					}
					
					
				} while (loop);	
				
				
				//curr = curr.subtract(temp);
				//curr = curr.subtract(b.mult(new bigNumber(n))); 
				
				curr = curr - bNum*n;
			}
			//console.log(curr);
		}
		
		
		
		
		
		/*
			var c = 0;
			var sum = new bigNumber(0);
			var mod;
			var loop = true;
			do {
			//console.log(sum.number());
			
			if (sum.add(b).isGreaterThan(this)) {
			
			//console.log(sum.number());
			
			mod = this.subtract(sum); //errorr here
			//mod = a - sum;
			
			loop = false;
			}
			c = c + 1;
			sum = b.mult(new bigNumber(c));
			} while (loop);
		*/
        return new bigNumber(curr);
		
		
	};
	
	
	
	function truncateZeros(n){
		var count=0;
		//console.log("here");
		//console.log(this.number.length);
		for(var i=0; i<(n.length-1); i++){
			if(n[i] != 0){
			    //console.log("break at" + count);
				break;
				}else{
				count = count + 1;
			}
		}
		//console.log("count:"+ count);
		n = n.slice(count, n.length);
		return n;
	}
	this.isGreaterThan = function (b) {
        var bArray = b.number;
        var aArray = this.number;
        var isGT = false;
        //
        //test lengths first
        if (aArray.length > bArray.length) isGT = true;
        if (bArray.length > aArray.length) isGT = false;
        if (aArray.length === bArray.length) {
			
			for (var i = 0; i < aArray.length; i++) {
				if (aArray[i] > bArray[i]) {
					isGT = true;
					break;
				}
				if (bArray[i] > aArray[i]) {
					isGT = false;
					break;
				}
				
				
			}
			
			
			
		}
		
		
		
        return isGT;
	};
}

