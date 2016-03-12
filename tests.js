/*
	QUnit.test( "hello test", function( assert ) {
	assert.ok( 1 == "1", "Passed!" );
	});
*/

QUnit.test("bigNumber declaration", function( assert ) {
	
    var i = 1;
    var big1 = new bigNumber([1]);
    
	assert.deepEqual(big1.number, [i], "sweet");
	var j = [2, 3, 7, 8, 8, 2, 5, 6, 4, 5, 6, 2, 9, 0, 1];
	var big2 = new bigNumber(j);
	assert.deepEqual(big2.number, j);
	
	var k = 65;
	var k2 = [6, 5];
	assert.deepEqual(new bigNumber(k).number, k2);
	
	var l = "742";
	var l2 = [7, 4, 2];
	assert.deepEqual(new bigNumber(l).number, l2);
	var b = [0, 0, 7, 2];
	
	var big1 = new bigNumber(b);
	assert.deepEqual(big1.number ,[7,2]);
	
});


QUnit.test("bigNumber addition", function( assert ){
	
	var b = 65;
	var c = 742;
	var big1 = new bigNumber(b);
	var big2 = new bigNumber(c);
	assert.deepEqual(big1.add(big2).number, [8, 0, 7]);
	
	
});

QUnit.test("bigNumber subtraction", function( assert ){
	
	var b = 65;
	var c = 742;
	var big1 = new bigNumber(b);
	var big2 = new bigNumber(c);
	
	
	
	
	assert.deepEqual(big2.subtract(big1).number, [6, 7, 7]);
	assert.deepEqual(big2.subtract(big2).number, [0]);
	assert.deepEqual(big1.subtract(big2).number, [6, 7, 7]);
	assert.deepEqual(big1.subtract(big2).isNegative, true);
});
QUnit.test("bigNumber multiplication", function( assert ){
	var a = 0;
	var b = 65;
	var c = 742;
	var big1 = new bigNumber(b);
	var big2 = new bigNumber(c);
	var big3 = new bigNumber(a);
	assert.deepEqual(big1.mult(big2).number, [4,8,2,3,0]);
	assert.deepEqual(big3.mult(big3).number, [0])
	
});


QUnit.test("bigNumber modular", function( assert ){
	var a = 0;
	var b = 65;
	var c = 742;
	var d = [7, 5, 1, 0, 4, 2, 4, 6, 7, 5, 4, 5, 7, 9, 5, 4, 3, 9, 6, 4, 3, 9, 3, 8, 1, 4, 9, 4, 9, 5, 1, 8, 3, 9];
	var big1 = new bigNumber(b);
	var big2 = new bigNumber(c);
	var big3 = new bigNumber(a);
	var big4 = new bigNumber(d);
	//console.log(big4.number);
	assert.deepEqual(big2.mod(big1).number, [2, 7]);
	
	
	
});

