<?php
namespace Controllers\V1;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

final class MainController {

    /**
     * @api {GET} /v1/status Verificar Status do API
     * @apiSampleRequest /v1/status
     * @apiVersion 1.0.0
     * @apiDescription Verificação do estado do API
     * 
     * @apiGroup Status
     *
     * @apiSuccess (200) {Integer} status Estado do  API atual.
     * @apiSuccessExample {JSON} resposta-sucesso
     * {
     *   "status": "API no AR"
     * }
     */

    public static function status(Request $req, Response $res, array $args) {

        return $res->withJson([
            "status" => "API no AR"
        ]);
    }
    
    /**
     * @api {POST} /v1/somar Somar números
     * @apiSampleRequest /v1/somar
     * @apiVersion 1.0.0
     * @apiDescription Método que soma dois valores numéricos.
     * 
     * @apiGroup Math
     * 
     * @apiParam (Body) {Integer} v1 Primeiro valor para somar.
     * @apiParam (Body) {Integer} v2 Segundo valor para somar.
     * @apiParamExample {JSON} exemplo-requisição
     * {
     *      "v1": 500,
     *      "v2": 10
     * }
     * 
     * @apiSuccess (200) {Integer} resultado Resultado do cálculo.
     * @apiSuccessExample {JSON} resposta-sucesso
     * {
     *   "resultado": 510
     * }
     * 
     * @apiError (500) {String} erro Descrição do erro.
     * @apiError (500) {String} valor-errado Detalhes do valor não numérico.
     * @apiErrorExample {JSON} resposta-erro
     * {
     *   "erro": "Valores não numéricos informados"
     * }
     */
    public static function somar(Request $req, Response $res, array $args) {

        $dados = $req->getParsedBody();
        
        $v1 = $dados["v1"] ?? 0;
        $v2 = $dados["v2"] ?? 0;
        

        if (is_numeric($v1) && is_numeric($v2)) {
            return $res->withJson([
                "resultado" => $v1+$v2,
            ]);
        } else {
            return $res->withStatus(500)->withJson([
                "erro" => "Valores não numéricos informados"
            ]);
        }
    }
    /**
     * @api {POST} /v1/maior Informar maior número
     * @apiSampleRequest /v1/maior
     * @apiVersion  1.0.0
     * @apiDescription Método que informa maior valor numérico de um array.
     * 
     * @apiGroup Maior
     * 
     * @apiParam (Body) {Number} v Array que será verificado.
     * @apiParamExample {JSON} exemplos-requisição
     * {
     *     "v":[0,5,7,1,3,9,88,9]
     * }
     * 
     * {
     *     "v":[0,5.3,7,1.25,3,9.4,"88.1","9"]
     * }
     * 
     * @apiSuccess (200) {Float} maior Resultado da verificação
     * @apiSuccessExample {JSON} resposta-sucesso
     * {
     *   "maior": 88.1
     * }
     * 
     * @apiError (500) {String} erro Descrição do erro seguido do valor errado.
     * @apiErrorExample {JSON} resposta-erro
     * {
     *   "erro": "Caractere(s) não numérico(s) informado(s) em: 88.1h"
     * }
    */
    public static function maior(Request $req, Response $res, array $args) {

        $dados = $req->getParsedBody();
        $v = $dados["v"] ?? 0;
        $maior = max($v);
        
        for ($i = 0; $i < count($v); $i++) {
            if (!is_numeric($v[$i])) {
                return $res->withStatus(500)->withJson([
                    "erro" => "Caractere(s) não numérico(s) informado(s) em: ".$v[$i]
                ]);
            }
            
        }

        return $res->withJson([
            "maior" => floatval($maior)
        ]);
       
    }

    /**
     * @api {GET} /v1/par-impar/v Verificar se um número é par ou impar 
     * @apiSampleRequest /v1/par-impar
     * @apiVersion  1.0.0
     * @apiDescription Método que informa a paridade de um número.
     * 
     * @apiGroup Par-Impar
     * @apiParam {Number} v Valor a ser verificado.
     * 
     * @apiSuccess (200) {string} maior Resultado da verificação
     * @apiSuccessExample {JSON} resposta-sucesso
     * {
     *   "Paridade": "impar"
     * }
     * 
     * @apiError (500) {String} erro Descrição do erro seguido do valor errado.
     * @apiErrorExample {JSON} resposta-erro
     * {
     *   "erro": "Caractere(s) não numérico(s) informado(s) em: 5h"
     * }
    */
    public static function par_impar(Request $req, Response $res, array $args) {

        $v = $args["v"] ?? 0;

        if(!is_numeric($v)){
            return $res->withStatus(500)->withJson([
                "erro" => "Caractere(s) não numérico(s) informado(s) em: ".$v
            ]);
       
        }else{
            $r = !($v % 2) ? "par" : "impar";
            return $res->withJson([
                "Paridade" => $r
            ]);
        }
    }

    /**
     * @api {POST} /v1/ordenar Informar maior número
     * @apiSampleRequest /v1/ordenar
     * @apiVersion  1.0.0
     * @apiDescription Método que ordena valores numéricos de um array de forma crescente e decrescente.
     * 
     * @apiGroup Ordenar
     * @apiParam (Body) {String} ordenacao tipo de ordenação que será usada.
     * @apiParam (Body) {Array} v Array que será ordenado.
     * @apiParamExample {JSON} exemplos-requisição
     * {
     *     "v":["A",5,8,9,4,1,2,"B",7,6,3]
     * }
     * 
     * {
     *     "ordenacao":"crescente",
     *     "v":["A",5,8,9,4,1,2,"B",7,6,3]
     * }
     * 
     * {
     *     "ordenacao":"decrescente",
     *     "v":["A",5,8,9,4,1,2,"B",7,6,3]
     * }
     * 
     * 
     * @apiSuccess (200) {Array} ordem Resultado da Ordenação
     * @apiSuccessExample {JSON} resposta-sucesso
     * {
     *  "ordem": null,
     *  "ordenacao": ["A","B",1,2,3,4,5,6,7,8,9]
     * }
     * {
     *  "ordem": "crescente",
     *  "ordenacao": ["A","B",1,2,3,4,5,6,7,8,9]
     * }
     * {
     *  "ordem": "decrescente",
     *  "ordenacao": [9,8,7,6,5,4,3,2,1,"B","A"]
     * }
     * 
     * 
     * @apiError (500) {String} erro Descrição do erro.
     * @apiErrorExample {JSON} resposta-erro
     * {
     *   "erro": "Algum dos campos pode ter sido inserido de forma incorreta, verifique as informações e tente novamente"
     * }
    */

    public static function ordenar(Request $req, Response $res, array $args) {

        $dados = $req->getParsedBody();
        $ordenacao = $dados["ordenacao"] ?? NULL;
        $v = $dados["v"] ?? 0;
        

        if($ordenacao == "decrescente"){
            rsort($v);
            return $res->withJson([
                "ordem" =>$ordenacao,
                "ordenacao" =>$v
            ]); 
        }else if($ordenacao == "crescente" || $ordenacao == NULL){
            sort($v);
            return $res->withJson([
                "ordem" =>$ordenacao,
                "ordenacao" =>$v
            ]);

        }else{

            return $res->withStatus(500)->withJson([
                "erro" => "Algum dos campos pode ter sido inserido de forma incorreta, verifique as informações e tente novamente"
            ]); 
        }
        

        
    }


}



