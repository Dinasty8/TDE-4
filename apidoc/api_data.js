define({ "api": [
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
    "group": "Maior",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Number",
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
    "filename": "app/controllers/v1/MainController.php",
    "groupTitle": "Maior",
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
    "filename": "app/controllers/v1/MainController.php",
    "groupTitle": "Math",
    "name": "PostV1Somar"
  },
  {
    "type": "POST",
    "url": "/v1/ordenar",
    "title": "Informar maior número",
    "sampleRequest": [
      {
        "url": "http://localhost/TDE-4/v1/ordenar"
      }
    ],
    "version": "1.0.0",
    "description": "<p>Método que ordena valores numéricos de um array de forma crescente e decrescente.</p>",
    "group": "Ordenar",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ordenacao",
            "description": "<p>tipo de ordenação que será usada.</p>"
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "v",
            "description": "<p>Array que será ordenado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemplos-requisição",
          "content": "{\n    \"v\":[\"A\",5,8,9,4,1,2,\"B\",7,6,3]\n}\n\n{\n    \"ordenacao\":\"crescente\",\n    \"v\":[\"A\",5,8,9,4,1,2,\"B\",7,6,3]\n}\n\n{\n    \"ordenacao\":\"decrescente\",\n    \"v\":[\"A\",5,8,9,4,1,2,\"B\",7,6,3]\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "ordem",
            "description": "<p>Resultado da Ordenação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "resposta-sucesso",
          "content": "{\n \"ordem\": null,\n \"ordenacao\": [\"A\",\"B\",1,2,3,4,5,6,7,8,9]\n}\n{\n \"ordem\": \"crescente\",\n \"ordenacao\": [\"A\",\"B\",1,2,3,4,5,6,7,8,9]\n}\n{\n \"ordem\": \"decrescente\",\n \"ordenacao\": [9,8,7,6,5,4,3,2,1,\"B\",\"A\"]\n}",
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
          }
        ]
      },
      "examples": [
        {
          "title": "resposta-erro",
          "content": "{\n  \"erro\": \"Algum dos campos pode ter sido inserido de forma incorreta, verifique as informações e tente novamente\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/controllers/v1/MainController.php",
    "groupTitle": "Ordenar",
    "name": "PostV1Ordenar"
  },
  {
    "type": "GET",
    "url": "/v1/par-impar/v",
    "title": "Verificar se um número é par ou impar",
    "sampleRequest": [
      {
        "url": "http://localhost/TDE-4/v1/par-impar"
      }
    ],
    "version": "1.0.0",
    "description": "<p>Método que informa a paridade de um número.</p>",
    "group": "Par-Impar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "v",
            "description": "<p>Valor a ser verificado.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "maior",
            "description": "<p>Resultado da verificação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "resposta-sucesso",
          "content": "{\n  \"Paridade\": \"impar\"\n}",
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
          "content": "{\n  \"erro\": \"Caractere(s) não numérico(s) informado(s) em: 5h\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/controllers/v1/MainController.php",
    "groupTitle": "Par-Impar",
    "name": "GetV1ParImparV"
  },
  {
    "type": "GET",
    "url": "/v1/status",
    "title": "Verificar Status do API",
    "sampleRequest": [
      {
        "url": "http://localhost/TDE-4/v1/status"
      }
    ],
    "version": "1.0.0",
    "description": "<p>Verificação do estado do API</p>",
    "group": "Status",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>Estado do  API atual.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "resposta-sucesso",
          "content": "{\n  \"status\": \"API no AR\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/controllers/v1/MainController.php",
    "groupTitle": "Status",
    "name": "GetV1Status"
  }
] });
