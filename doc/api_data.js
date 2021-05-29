define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "C:\\xampp\\htdocs\\TDE-4\\apidoc\\main.js",
    "groupTitle": "C:\\xampp\\htdocs\\TDE-4\\apidoc\\main.js",
    "name": ""
  },
  {
    "type": "POST",
    "url": "/v1/maior",
    "title": "Informar maior número",
    "sampleRequest": [
      {
        "url": "http://localhost/TDE-4/v1/maior"
      }
    ],
    "version": "1.0.0",
    "description": "<p>Método que informa maior valor numérico de um array.</p>",
    "group": "Math",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Float",
            "optional": false,
            "field": "v",
            "description": "<p>Array que será verificado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemplos-requisição",
          "content": "{\n    \"v\":[0,5,7,1,3,9,88,9]\n}\n\n{\n    \"v\":[0,5.3,7,1.25,3,9.4,\"88.1\",\"9\"]\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Float",
            "optional": false,
            "field": "maior",
            "description": "<p>Resultado da verificação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "resposta-sucesso",
          "content": "{\n  \"maior\": 88.1\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "erro",
            "description": "<p>Descrição do erro seguido do valor errado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "resposta-erro",
          "content": "{\n  \"erro\": \"Caractere(s) não numérico(s) informado(s) em: 88.1h\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./app/controllers/v1/MainController.php",
    "groupTitle": "Math",
    "name": "PostV1Maior"
  },
  {
    "type": "POST",
    "url": "/v1/somar",
    "title": "Somar números",
    "sampleRequest": [
      {
        "url": "http://localhost/TDE-4/v1/somar"
      }
    ],
    "version": "1.0.0",
    "description": "<p>Método que soma dois valores numéricos.</p>",
    "group": "Math",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "v1",
            "description": "<p>Primeiro valor para somar.</p>"
          },
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "v2",
            "description": "<p>Segundo valor para somar.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemplo-requisição",
          "content": "{\n     \"v1\": 500,\n     \"v2\": 10\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "resultado",
            "description": "<p>Resultado do cálculo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "resposta-sucesso",
          "content": "{\n  \"resultado\": 510\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "erro",
            "description": "<p>Descrição do erro.</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "valor-errado",
            "description": "<p>Detalhes do valor não numérico.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "resposta-erro",
          "content": "{\n  \"erro\": \"Valores não numéricos informados\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./app/controllers/v1/MainController.php",
    "groupTitle": "Math",
    "name": "PostV1Somar"
  }
] });
