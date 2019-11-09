<?php

header('Content-Type: application/json');
$array = [[        
            'name' => 'Joker 3d',
            'date' => '21.11.2019',
            'cinema' => 'Cinema 5',
            'price' => 9.80
        ],
        [
            'name' => 'Avengers Endgame',
            'date' => '20.11.2019',
            'cinema' => 'Cinema 7',
            'price' => 7.60
        ],
        [
            'name' => 'Forrest Gump',
            'date' => '13.11.2019',
            'cinema' => 'Cinema 6',
            'price' => 5.60
        ]];

        $response = array(
            'status' => true,
            'data'=> $array
        );

echo json_encode($response);