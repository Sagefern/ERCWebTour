var APP_DATA = {
  "scenes": [
    {
      "id": "0-starbucks--erc",
      "name": "Starbucks @ ERC",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.0010397983381125186,
        "pitch": 0.12444868389935593,
        "fov": 1.241668724012166
      },
      "linkHotspots": [
        {
          "yaw": -0.6245479397013405,
          "pitch": 0.025565419576690118,
          "rotation": 11.780972450961727,
          "target": "1-near-escalator--erc"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4317800707313406,
          "pitch": 0.0031436105878199783,
          "title": "Study Area",
          "text": "Be sure to chope your seats early!"
        },
        {
          "yaw": -3.047269511241696,
          "pitch": 0.022483142246827015,
          "title": "Starbucks",
          "text": "&nbsp;Expert at creating holes in wallets"
        }
      ]
    },
    {
      "id": "1-near-escalator--erc",
      "name": "Near Escalator @ ERC",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.365281582032452,
        "pitch": 0.02373287164414073,
        "fov": 1.241668724012166
      },
      "linkHotspots": [
        {
          "yaw": -1.2506528771301273,
          "pitch": -0.009553264629822422,
          "rotation": 8.63937979737193,
          "target": "0-starbucks--erc"
        },
        {
          "yaw": -2.5571616145615685,
          "pitch": 0.07690338732937008,
          "rotation": 0,
          "target": "2-tembusu-tree--erc"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5289857206243749,
          "pitch": 0.10637093272451104,
          "title": "Link",
          "text": "To Stephen Riady Centre"
        },
        {
          "yaw": -1.4988797099143802,
          "pitch": 0.1057799463541258,
          "title": "Escalator",
          "text": "If it doesn't work, hope that your legs do"
        }
      ]
    },
    {
      "id": "2-tembusu-tree--erc",
      "name": "Tembusu Tree @ ERC",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.898039416350578,
        "pitch": -0.15986026517753693,
        "fov": 1.241668724012166
      },
      "linkHotspots": [
        {
          "yaw": -2.4108127988287382,
          "pitch": 0.1317185969821466,
          "rotation": 5.497787143782138,
          "target": "1-near-escalator--erc"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.867697232247057,
          "pitch": 0.2544829728025526,
          "title": "Tembusu Tree",
          "text": "Lucky tree, has plenty of personal space and attention"
        }
      ]
    }
  ],
  "name": "ERC Level 1 Web Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
