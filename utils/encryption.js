/*
//encoder

input:

aabbccccddeaaaa

output:

a2b2c4d2e1a4

//decoder

*/

function encoder(input) {

    let curr = input[0];
    let currCount = 1;
    let output = '';
    for (let i = 1; i < input.length; i++) {
        if (input[i] == curr) {
            currCount++;
        } else {
            output+= `${curr}${currCount}`;
            curr = input[i];
            currCount = 1;
        }
    }

    output+= `${curr}${currCount}`;

    return output;
}

// console.log(encoder('aabbccccddeaaaa'));

function decoder(input) {
    let output = '';
}

/*

IP: 
{
  a: {
    b: {
      c: {
        d: {
          e: 1,
        },
      },
      f: 2,
    },
    g: 3,
  },
  h: 4,
} 

op:

{
  'a.b.c.d.e': 1,
  'a.b.f': 2,
  'a.g': 3,
  'h': 4
}
*/


/*
    let output = {};
    keys = Object.keys(obj);
    for (var key of keys) {
        flat(key, object); // add a key value pair to op
    }
    return op;


    flat(key, object) {
        let value = object[key];
        key += k;
        if (typeof value == object) {
            keys =  Object.keys(obj);
            for (const k of keys) {
                flat(key, object);
            }
        } else {
            object[key] = value;
        }
    }
*/

function main() {
    let output = {};
    let input = {
        a: {
          b: {
            c: {
              d: {
                e: 1,
              },
            },
            f: 2,
          },
          g: 3,
        },
        h: 4,
      };
    let keys = Object.keys(input);
    for (var key of keys) {
        flat(key, output, input); // add a key value pair to op
    }

    console.log(output);
}

function flat(key, output, input) {
    let value = input[key.slice(-1)];
    if (typeof value == 'object') {
        keys =  Object.keys(value);
        for (const k of keys) {
            flat(key+k, output, value);
        }
    } else {
        output[key] = value;
    }
}

main()

// setTimeOut(0) resolve() setTimeOut(1)
// for () setTimeout
// bind, call apply
// arrow function