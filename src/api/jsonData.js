const mockData = {
    "2018": {
      "feb": [
        "test1.csv"
      ]
    },
  
    "2019": {
      "jan": {
        "3": {
          "folder1": {
            "subfolder1": [
              "hello.csv",
              "world.csv",
              'js'
            ]
          }
        },
        "5": {
          "folder1": {
            "subfolder1": [
              "john.csv",
              "doe.csv"
            ]
          }
        }
      },
      "mar": {
        "15": {
          "folder1": {
            "subfolder1": [
              "jane.csv",
              "doe.csv"
            ]
          }
        }
      }
    }
  };

//   const items = [
//     {
//       id: 1,
//       name: '2018',
//       children: [
       
//       ],
//     },
//     {
//       id: 5,
//       name: '2019',
//       children: [
//         {
//           id: 6,
//           name: 'jan',
//           children: [
//             {
//               id: 7,
//               name: '3',
//               children: [
//                 { id: 8, name: 'index : ts' },
//                 { id: 9, name: 'bootstrap : ts' },
//               ],
//             },{id:11, name: '5', children:[{}]}
//           ],
//         },
//       ],
//     },
//   ];

  export default {
      getFolders(){
          return mockData;
      }
  }