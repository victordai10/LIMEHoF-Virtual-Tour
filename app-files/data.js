var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.07097026016478125,
        "pitch": -0.01831506929075566,
        "fov": 1.4599726663201706
      },
      "linkHotspots": [
        {
          "yaw": -0.5350869579968975,
          "pitch": 0.3356048514601788,
          "rotation": 11.780972450961727,
          "target": "1-gift-shop"
        },
        {
          "yaw": -3.03411715489079,
          "pitch": 0.07648038792903655,
          "rotation": 0,
          "target": "2-main-stage"
        },
        {
          "yaw": -2.258418855613076,
          "pitch": -0.20847678619686683,
          "rotation": 7.0685834705770345,
          "target": "5-2nd-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-gift-shop",
      "name": "Gift Shop",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6263944459579776,
          "pitch": 0.2537474108192619,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-main-stage",
      "name": "Main Stage",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.123501496101553,
          "pitch": 0.08088808681403847,
          "rotation": 0,
          "target": "3-1st-floor-exhibit-1"
        },
        {
          "yaw": -1.354450559593893,
          "pitch": 0.18306047960060923,
          "rotation": 0,
          "target": "4-1st-floor-exhibit-2"
        },
        {
          "yaw": -2.2602560233510705,
          "pitch": 0.22208181171884078,
          "rotation": 5.497787143782138,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1st-floor-exhibit-1",
      "name": "1st Floor Exhibit 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6341407748842922,
          "pitch": 0.21459030646464328,
          "rotation": 0,
          "target": "2-main-stage"
        },
        {
          "yaw": -0.7766874369717556,
          "pitch": 0.04455939079909221,
          "rotation": 11.780972450961727,
          "target": "4-1st-floor-exhibit-2"
        },
        {
          "yaw": -0.9960400456927481,
          "pitch": 0.35860212687803994,
          "rotation": 5.497787143782138,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-1st-floor-exhibit-2",
      "name": "1st Floor Exhibit 2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10438121310110127,
          "pitch": 0.35770553363966684,
          "rotation": 0,
          "target": "2-main-stage"
        },
        {
          "yaw": 0.3517222561983875,
          "pitch": 0.08227295860695705,
          "rotation": 0,
          "target": "3-1st-floor-exhibit-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2nd-floor-lobby",
      "name": "2nd Floor Lobby",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 2.462170668107298,
        "pitch": 0,
        "fov": 1.4599726663201706
      },
      "linkHotspots": [
        {
          "yaw": 3.117536163480942,
          "pitch": 0.16935782081264605,
          "rotation": 0,
          "target": "0-lobby"
        },
        {
          "yaw": -1.8267192093820448,
          "pitch": 0.25405495236915954,
          "rotation": 0,
          "target": "6-hall-of-fame-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hall-of-fame-1",
      "name": "Hall of Fame 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -2.9166875844271267,
        "pitch": 0.06790310585582482,
        "fov": 1.4599726663201706
      },
      "linkHotspots": [
        {
          "yaw": 0.5448649964782977,
          "pitch": 0.36397490068138794,
          "rotation": 5.497787143782138,
          "target": "5-2nd-floor-lobby"
        },
        {
          "yaw": 2.374759714402283,
          "pitch": 0.2269261698388263,
          "rotation": 0.7853981633974483,
          "target": "7-hall-of-fame-2"
        },
        {
          "yaw": -1.9071978004508132,
          "pitch": 0.17989386769292715,
          "rotation": 11.780972450961727,
          "target": "8-hall-of-fame-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hall-of-fame-2",
      "name": "Hall of Fame 2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -2.498980543578492,
        "pitch": 0.010325580689141134,
        "fov": 1.4599726663201706
      },
      "linkHotspots": [
        {
          "yaw": 2.5951280084983788,
          "pitch": 0.17468064184346233,
          "rotation": 4.71238898038469,
          "target": "6-hall-of-fame-1"
        },
        {
          "yaw": 2.747045258964377,
          "pitch": 0.06098717598491987,
          "rotation": 5.497787143782138,
          "target": "5-2nd-floor-lobby"
        },
        {
          "yaw": 1.4382045014984106,
          "pitch": 0.12029939395941724,
          "rotation": 0,
          "target": "8-hall-of-fame-3"
        },
        {
          "yaw": 1.5219675974107947,
          "pitch": 0.33200872583007524,
          "rotation": 0,
          "target": "9-hall-of-fame-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-hall-of-fame-3",
      "name": "Hall of Fame 3",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.33531621665478184,
          "pitch": 0.3670057813194134,
          "rotation": 0,
          "target": "9-hall-of-fame-4"
        },
        {
          "yaw": -0.3100558911286253,
          "pitch": 0.11244050726837784,
          "rotation": 0,
          "target": "7-hall-of-fame-2"
        },
        {
          "yaw": -1.6764100566457394,
          "pitch": 0.24269299348863882,
          "rotation": 7.0685834705770345,
          "target": "6-hall-of-fame-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hall-of-fame-4",
      "name": "Hall of Fame 4",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6761078932529543,
          "pitch": 0.2656271321580821,
          "rotation": 0,
          "target": "7-hall-of-fame-2"
        },
        {
          "yaw": 1.8090119144156862,
          "pitch": 0.2195098197142542,
          "rotation": 0,
          "target": "8-hall-of-fame-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "LIMEHoFMarzipano",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
