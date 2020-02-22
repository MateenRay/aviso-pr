const mockData = {
    "2018": {
      "feb": [
        "test1.csv"
      ]
    }
  };

  const items = [{
    "id": "1",
    "name": "2018",
    "children": [{
        "id": "2",
        "name": "feb",
        "children": [{
            "id": "3",
            "name": "test1.csv"
        }]
    }]
},
{
    "id": "4",
    "name": "2019",
    "children": [{
            "id": "5",
            "name": "jan",
            "children": [{
                "id": "6",
                "name": "3",
                "children": [{
                    "id": "7",
                    "name": "folder1",
                    "children": [{
                        "id": "8",
                        "name": "subfolder1",
                        "children": [{
                                "id": "9",
                                "name": "hello.csv"
                            },
                            {
                                "id": "10",
                                "name": "world.csv"
                            }
                        ]
                    }]
                }]
            },
            {
                "id": "11",
                "name": "5",
                "children": [{
                    "id": "12",
                    "name": "folder1",
                    "children": [{
                        "id": "13",
                        "name": "subfolder1",
                        "children": [{
                                "id": "14",
                                "name": "john.csv"
                            },
                            {
                                "id": "15",
                                "name": "doe.csv"
                            }
                        ]
                    }]
                }]
            }]
        },
        {
            "id": "16",
            "name": "mar",
            "children": [{
                "id": "17",
                "name": "15",
                "children": [{
                    "id": "18",
                    "name": "folder1",
                    "children": [{
                        "id": "19",
                        "name": "subfolder1",
                        "children": [{
                                "id": "20",
                                "name": "jane.csv"
                            },
                            {
                                "id": "21",
                                "name": "doe.csv"
                            }
                        ]
                    }]
                }]
            }]
        }
    ]
}
];

  export default {
      getFolders(){
          return items;
      },
      getMock(){
          return mockData;
      }
  }