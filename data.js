var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception",
      "name": "RECEPTION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6919101283690754,
          "pitch": -0.017191547718649502,
          "rotation": 0,
          "target": "8-iv-room"
        },
        {
          "yaw": 0.8072291354459189,
          "pitch": 0.01761239127904446,
          "rotation": 0,
          "target": "1-retail-room"
        },
        {
          "yaw": 1.261461679636847,
          "pitch": -0.03129390776967966,
          "rotation": 0,
          "target": "3-lab"
        },
        {
          "yaw": -1.0982258472220323,
          "pitch": 0.00897901588453287,
          "rotation": 0,
          "target": "9-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-retail-room",
      "name": "RETAIL ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-reception-2nd-view",
      "name": "RECEPTION 2ND VIEW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3176256221837228,
          "pitch": 0.020524911984423966,
          "rotation": 0,
          "target": "1-retail-room"
        },
        {
          "yaw": -0.48344872232465796,
          "pitch": -0.012399420218894619,
          "rotation": 0,
          "target": "13-prp-room"
        },
        {
          "yaw": -0.3900706373978373,
          "pitch": -0.0761849805617878,
          "rotation": 1.5707963267948966,
          "target": "8-iv-room"
        },
        {
          "yaw": -0.8477778460481904,
          "pitch": 0.10627656846266476,
          "rotation": 0,
          "target": "0-reception"
        },
        {
          "yaw": 2.342302658079964,
          "pitch": -0.19409668252688483,
          "rotation": 0,
          "target": "3-lab"
        },
        {
          "yaw": 2.6544968776804057,
          "pitch": -0.085894488920637,
          "rotation": 0,
          "target": "4-red-zone"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lab",
      "name": "LAB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.022384164437184495,
          "pitch": -0.01287577372001536,
          "rotation": 1.5707963267948966,
          "target": "2-reception-2nd-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-red-zone",
      "name": "RED ZONE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "5-shaving-room",
      "name": "SHAVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "6-ot-room",
      "name": "OT ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "7-sterlization",
      "name": "STERLIZATION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-iv-room",
      "name": "IV ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-corridor",
      "name": "CORRIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.063024064674835,
          "pitch": -0.0679078924316201,
          "rotation": 0,
          "target": "8-iv-room"
        },
        {
          "yaw": -1.0794943810938786,
          "pitch": 0.4278641745786551,
          "rotation": 0,
          "target": "10-head-wash"
        },
        {
          "yaw": -0.010245397928452249,
          "pitch": -0.03686906199110496,
          "rotation": 0,
          "target": "11-consultation"
        },
        {
          "yaw": 0.24110250998840144,
          "pitch": -0.04029810976103221,
          "rotation": 0,
          "target": "13-prp-room"
        },
        {
          "yaw": -2.593273587251911,
          "pitch": 0.0968465157950753,
          "rotation": 0,
          "target": "0-reception"
        },
        {
          "yaw": -2.9091743986868472,
          "pitch": -0.012178333395862495,
          "rotation": 0,
          "target": "2-reception-2nd-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-head-wash",
      "name": "HEAD WASH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "11-consultation",
      "name": "CONSULTATION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.331822168689264,
          "pitch": 0.0602699239228226,
          "rotation": 0,
          "target": "9-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-change-room",
      "name": "CHANGE ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "13-prp-room",
      "name": "PRP ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6673000683015662,
          "pitch": 0.42600533918370687,
          "rotation": 4.71238898038469,
          "target": "9-corridor"
        },
        {
          "yaw": 0.7652382708149883,
          "pitch": -0.06010571427097133,
          "rotation": 0,
          "target": "11-consultation"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "GERWEYNE 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
