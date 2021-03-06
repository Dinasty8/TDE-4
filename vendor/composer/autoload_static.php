<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6d095d04b77a652ddd8fa118dcdedfd1
{
    public static $files = array (
        '253c157292f75eb38082b5acb06f3f01' => __DIR__ . '/..' . '/nikic/fast-route/src/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Slim\\' => 5,
        ),
        'P' => 
        array (
            'Psr\\Http\\Message\\' => 17,
            'Psr\\Container\\' => 14,
        ),
        'F' => 
        array (
            'FastRoute\\' => 10,
        ),
        'C' => 
        array (
            'Controllers\\V1\\' => 15,
            'Config\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Slim\\' => 
        array (
            0 => __DIR__ . '/..' . '/slim/slim/Slim',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
        'Psr\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/container/src',
        ),
        'FastRoute\\' => 
        array (
            0 => __DIR__ . '/..' . '/nikic/fast-route/src',
        ),
        'Controllers\\V1\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/controllers/v1',
        ),
        'Config\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/config',
        ),
    );

    public static $prefixesPsr0 = array (
        'P' => 
        array (
            'Pimple' => 
            array (
                0 => __DIR__ . '/..' . '/pimple/pimple/src',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6d095d04b77a652ddd8fa118dcdedfd1::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6d095d04b77a652ddd8fa118dcdedfd1::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit6d095d04b77a652ddd8fa118dcdedfd1::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit6d095d04b77a652ddd8fa118dcdedfd1::$classMap;

        }, null, ClassLoader::class);
    }
}
