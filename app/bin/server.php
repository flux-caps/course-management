<?php

use Swoole\WebSocket\Frame;
use Swoole\Server;

$server = new Swoole\WebSocket\Server('0.0.0.0', getenv('SWOOLE_HTTP_PORT'), SWOOLE_BASE);
$server->set(
    [
        'open_http2_protocol' => true,
        'document_root' => '/app',
        'enable_static_handler' => true,
        'static_handler_locations' => ['/']
    ]
);

// HTTP/1 and HTTP/2
$server->on(
    'request',
    function (Swoole\Http\Request $request, Swoole\Http\Response $response) use($server) {

        foreach($server->connections as $connection) {
            $server->push($connection, "received some message");
        }

        $response->end("Hello, {$request->rawContent()}" . PHP_EOL);
    }
);

// WebSocket
$server->on(
    'message',
    function (Swoole\WebSocket\Server $server, Swoole\WebSocket\Frame $frame) {
        $server->push($frame->fd, "Hello, {$frame->data}");
    }
);

$server->start();

/*
$server = new Swoole\Http\Server('0.0.0.0',getenv('SWOOLE_HTTP_PORT'), SWOOLE_BASE);
      // Web Socket listener
$server->set(
    [
        //'worker_num' => getenv('SWOOLE_HTTP_WORKER_NUM'),
        //number of worker processes
        //'max_conn' => getenv('SWOOLE_HTTP_MAX_CONN'),
        //Maximum number of connections allowed. This parameter is used to set the maximum number of TCP connections allowed by the Server. After this number is exceeded, new incoming connections will be rejected.
        //'max_request' => getenv('SWOOLE_HTTP_MAX_REQUEST'),
        //'dispatch_mode' => 2,
        //'discard_timeout_request' => false,
        //'task_worker_num' => 1,
        //'daemonize' => getenv('SWOOLE_HTTP_DAEMONIZE'),
        //'backlog' => getenv('SWOOLE_HTTP_BACKLOG'),
        //Accept is triggered when a TCP connection has data to send
        //'open_tcp_keepalive' => 1,
        //tcp keepalive
        //'tcp_defer_accept' => getenv('SWOOLE_HTTP_TCP_DEFER_ACCEPT'),
        //Accept is triggered when a TCP connection has data to send
        //'open_tcp_nodelay' => getenv('SWOOLE_HTTP_OPEN_TCP_NODELAY'),
        //When the TCP connection is opened, when sending data, the Nagle merge algorithm will not be closed, and it will be sent to the client connection immediately. In some scenarios, such as Http server, the response speed can be improved.
        //'log_file' => getenv('SWOOLE_HTTP_LOG_FILE_PATH_NAME'),  //log file path
        'document_root' => '/app',
        'enable_static_handler' => true,
        'static_handler_locations' => ['/'],
    ]
);
$websocket = $server->addlistener('0.0.0.0', 9503, SWOOLE_SOCK_TCP);
$websocket->set( array( 'package_max_length' => 8192, 'open_websocket_close_frame' => true));
$websocket->on('Handshake', function (\Swoole\Http\Request $request, \Swoole\Http\Response $response) use ($server) {
    // Handshake verification completed, validate request...
    $response->status(101);
    $response->end();

    $fd = $request->fd;

    // Same logic as the server Open event, will not block
    $server->defer(function() use ($fd, $server)
    {
        echo "Client connected\n";
        $server->push($fd, "hello, welcome\n");
    });
});

$websocket->on('Open', function(Server $server, Swoole\Http\Request $request)
{
    echo "connection open: {$request->fd}\n";

    $server->tick(1000, function() use ($server, $request)
    {
        $server->push($request->fd, json_encode(["hello", time()]));
    });
});

$websocket->on('receive', function ($serv, $fd, $from_id, $data) {
    $serv->send($fd, 'Swoole: '.$data);
});

$websocket->on('close', function ($serv, $fd) {

});

$websocket->on('Disconnect', function(Server $server, int $fd)
{
    echo "connection disconnect: {$fd}\n";
});


$onRequest = function (Swoole\Http\Request $request, Swoole\Http\Response $response) use ($server) {

};

$server->on('receive',  $onRequest);
$server->on('request', $onRequest);

$server->on('Start', function (\Swoole\Server $server)  {
    echo PHP_EOL . PHP_EOL;
    echo PHP_EOL . 'SERVER HAS STARTET' . PHP_EOL;
    echo PHP_EOL . PHP_EOL;
    //$applicationApi->handleWebServerStarted();
});

$server->on('Shutdown', function ($serv) {
    echo 'Shutdown' . PHP_EOL;
});



$server->on('Task', function (Swoole\Server $server, $task_id, $reactorId, $data)  {

});

$server->start();
*/
