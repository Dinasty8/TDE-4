<?php
namespace Config;

use Slim\App;
use Controllers\V1\MainController;

final class RotasConfig {

    private static RotasConfig $config;
    private App $app;

    private function __construct(App $app) {
        $this->app = $app;
        $this->initRotas();
    }

    public static function getInstancia(App $app) {
        if (empty(self::$config)) {
            self::$config = new RotasConfig($app);
        }
        return self::$config;
    }

    public function initRotas() {
        $appM = $this->app;

        $appM->group("/v1", function($appM) {

            $appM->get("/status", array(MainController::class, "status"));
            $appM->post("/somar", array(MainController::class, "somar"));
            $appM->post("/maior", array(MainController::class, "maior"));
            $appM->get("/par-impar/{v}", array(MainController::class, "par_impar"));
            $appM->post("/ordenar", array(MainController::class, "ordenar"));
            
        });
    }
}