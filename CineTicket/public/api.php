<?php

header('Content-Type: application/json');



if($_GET['i'] == 'movies'){
    $array = [
    [
        'id' => 1,
        'name' => 'Joker 3D',
    ],[
        'id' => 2,
        'name' => 'Avengers Endgame',
    ],[
        'id' => 3,
        'name' => 'Forrest Gump',
    ]];
} else if ($_GET['i'] == 'date'){
    $array = [
        [
            'id' => 1,
            'date' => '01.12.2019',
        ],[
            'id' => 2,
            'date' => '02.12.2019',
        ],[
            'id' => 3,
            'date' => '03.12.2019',
        ]];
} else if ($_GET['i'] == 'price'){
    $array = 
        [
            'id' => 1,
            'price' => 9.80,
        ];
} else {
    $array = ['There was an error'];
}

    $response = array(
        'status' => true,
        'data'=> $array
    );

echo json_encode($response);