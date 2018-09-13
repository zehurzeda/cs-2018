
function test(o) {
    var i = 0;      // i está definida para toda a função
    if (typeof o == "string") {
      var j= 0;

        for (var k=0; k <=10; k++) {
          console.log(k);
        }
        console.log(k);
    }
    console.log(j);
  }

test('object');