var APP_DATA = {
  "scenes": [
    {
      "id": "0-room-view",
      "name": "Room View",
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
          "yaw": 1.460124224099876,
          "pitch": 0,
          "rotation": 0,
          "target": "0-room-view"
        },
        {
          "yaw": 0.048829978676691255,
          "pitch": 0.3257770211646456,
          "rotation": 0,
          "target": "0-room-view"
        },
        {
          "yaw": 0.7023655964740438,
          "pitch": 0.06194775329007918,
          "rotation": 1.5707963267948966,
          "target": "2-wardrobe"
        },
        {
          "yaw": -0.766900291152659,
          "pitch": 0.36135359785649257,
          "rotation": 6.283185307179586,
          "target": "3-dressing-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cot-head-panel",
      "name": "Cot Head Panel",
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
          "yaw": -0.039949136044548084,
          "pitch": 0.47363267175711243,
          "rotation": 0,
          "target": "1-cot-head-panel"
        },
        {
          "yaw": 0.42718536678233754,
          "pitch": 0.08267322183496617,
          "rotation": 1.5707963267948966,
          "target": "2-wardrobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wardrobe",
      "name": "Wardrobe",
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
          "yaw": 0.8634567950221346,
          "pitch": 0.46767909847027234,
          "rotation": 3.141592653589793,
          "target": "3-dressing-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dressing-area",
      "name": "Dressing Area",
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
          "yaw": 0.9841575180777387,
          "pitch": -0.11994803899139228,
          "rotation": 1.5707963267948966,
          "target": "1-cot-head-panel"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
