// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract TasksContract {


    uint256 public taskCounter=0;

    constructor(){
        createTask("MI PRIMER TAREA DE EJEMPLO", "Tengo que hacer algo");

    }

    event TaskCreated(
        uint id,
        string title,
        string description,
        bool done,
        uint createdAt
    );

    struct Task{
        uint256 id;
        string title;
        string description;
        bool done;
        uint256 createdAt;
    }

    mapping(uint256 => Task) public tasks;


    function createTask(string memory _title,string memory _decription)public{

        //Block.timestamp pone fecha , task counter is the counter var.

        taskCounter ++ ;
        tasks[taskCounter]=Task(taskCounter,_title,_decription,false,block.timestamp);
        emit TaskCreated(taskCounter,_title,_decription,false,block.timestamp);
        
        //47:18 el video

    }


    function toggleDone(uint256 _id)public {
        Task memory _task=tasks[_id];
        _task.done= !_task.done;
        tasks[_id]=_task;

    }

    







}