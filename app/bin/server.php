<?php

$server = new Swoole\Http\Server('0.0.0.0', getenv('SWOOLE_HTTP_PORT'));

$server->set(
    [
        'worker_num' => getenv('SWOOLE_HTTP_WORKER_NUM'),
        //number of worker processes
        'max_conn' => getenv('SWOOLE_HTTP_MAX_CONN'),
        //Maximum number of connections allowed. This parameter is used to set the maximum number of TCP connections allowed by the Server. After this number is exceeded, new incoming connections will be rejected.
        'max_request' => getenv('SWOOLE_HTTP_MAX_REQUEST'),
        'dispatch_mode' => 2,
        'discard_timeout_request' => false,
        'task_worker_num' => 1,
        'daemonize' => getenv('SWOOLE_HTTP_DAEMONIZE'),
        'backlog' => getenv('SWOOLE_HTTP_BACKLOG'),
        //Accept is triggered when a TCP connection has data to send
        'open_tcp_keepalive' => 1,
        //tcp keepalive
        'tcp_defer_accept' => getenv('SWOOLE_HTTP_TCP_DEFER_ACCEPT'),
        //Accept is triggered when a TCP connection has data to send
        'open_tcp_nodelay' => getenv('SWOOLE_HTTP_OPEN_TCP_NODELAY'),
        //When the TCP connection is opened, when sending data, the Nagle merge algorithm will not be closed, and it will be sent to the client connection immediately. In some scenarios, such as Http server, the response speed can be improved.
        //'log_file' => getenv('SWOOLE_HTTP_LOG_FILE_PATH_NAME'),  //log file path
        'document_root' => '/app/src',
        'enable_static_handler' => true,
        'static_handler_locations' => ['/'],
    ]
);

$onRequest = function (Swoole\Http\Request $request, Swoole\Http\Response $response) use ($server) {

};

$server->on('request', $onRequest);

$server->on('Start', function (\Swoole\Http\Server $server)  {
    echo PHP_EOL . PHP_EOL;
    echo PHP_EOL . 'SERVER HAS STARTET' . PHP_EOL;
    echo PHP_EOL . PHP_EOL;
    //$applicationApi->handleWebServerStarted();
});

$server->on('Shutdown', function ($serv) {
    echo 'Shutdown' . PHP_EOL;
});

$server->on('WorkerError',
    function (Swoole\Server $server, int $workerId, int $workerPid, int $exitCode, int $signal)  {
       // $applicationApi->handleWorkerError($server, $workerId, $workerPid, $exitCode, $signal);
    });

$server->on('Task', function (Swoole\Server $server, $task_id, $reactorId, $data)  {

});

$server->on('Receive', function (Swoole\Server $server, $fd, $reactor_id, $data) {
    $server->send($fd, "Echo to #{$fd}: \n" . $data);
    $server->close($fd);
});

$server->start();

